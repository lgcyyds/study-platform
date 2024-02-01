<template>
  <view class="container">
    <view
      class="article"
      v-for="(item, index) in articleMsgList"
      :key="index"
      @click="goArticle(item._id)"
    >
      <image
        class="article_img"
        src="https://img1.baidu.com/it/u=507850114,3105556430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
        mode="aspectFill"
      ></image>
      <view class="article_title">{{ item.title }}</view>
      <view class="article_content">{{ formatTitle(item.content) }}</view>
      <view class="article_control">
        <view class="control_btn">
          <button
            v-show="props.btnType"
            :type="props.btnType"
            size="mini"
            class="del_btn"
            plain="true"
            :style="btnStyle"
          >
            {{ props.btnType == "warn" ? "删除" : "编辑" }}
          </button>
        </view>
        <view class="article_time"
          >发布时间：{{ formatDate(item.createdTime) }}</view
        >
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  btnType: {
    type: String,
    default: "",
  },
  articleMsgList: {
    type: Array,
    default: [],
  },
});
let goArticle = (id) => {
  uni.navigateTo({
    url: `/pages/article/article?id=${id}`,
  });
};
//去除文章内容的html标签
const formatTitle = function (content) {
  return content.replace(/<.*?>/g, "");
};
//格式化日期
const formatDate = function (t) {
  const date = new Date(t);
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 > 10
      ? date.getMonth() + 1
      : "0" + (date.getMonth() + 1);
  const day = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();
  return year + "-" + month + "-" + day;
};
//按钮的模式
// const btnType = ref('warn')
//编辑模式下字为绿色
const btnStyle = computed(() => {
  return props.btnType == "primary" ? { color: "#1AAD19" } : "";
});
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;

  .article {
    width: 100%;
    height: 470rpx;
    border-bottom: solid 1px #c5c5c5;
    margin: 35rpx 0;

    .article_img {
      width: 100%;
      height: 225rpx;
      border-radius: 5px;
    }

    .article_title {
      margin: 20rpx 0;
      padding-left: 20rpx;
      font-weight: 600;
      font-size: 33rpx;
      white-space: nowrap;
      overflow: hidden;
    }

    .article_content {
      height: 80rpx;
      width: 100%;
      font-size: 28rpx;
      color: #8c8c8c;
      line-height: 40rpx;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .article_control {
      width: 100%;
      height: 50rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .control_btn {
        width: 100rpx;
        height: 50rpx;
        .del_btn {
          width: 100rpx;
          height: 50rpx;
          font-size: 22rpx;
          line-height: 50rpx;
          white-space: nowrap;
          margin: 10rpx 10rpx;
        }
      }
      .article_time {
        width: 250rpx;
        height: 50rpx;
        line-height: 70rpx;
        font-size: 20rpx;
        color: #8c8c8c;
        margin: 15rpx 0;
        text-align: right;
      }
    }
  }
}
</style>
