<template>
  <view>
    <scroll-view class="search_box" scroll-y="true" @scrolltolower="toNextPage">
      <view class="search_block">
        <image src="../../static/assets/search.png" mode=""></image>
        <view class="text">
          <input
            class="uni-input"
            type="text"
            v-model="keyword"
            placeholder="请输入搜索词..."
            @input="getResult"
          />
        </view>
        <view class="clear_Icon">
          <van-icon
            v-show="showClearIcon"
            @click="clearIcon"
            name="clear"
            size="1.2rem"
            color="#b8b8b8"
          />
        </view>
      </view>
      <view class="search-content">
        <van-tabs :active="active" sticky>
          <van-tab title="文章">
            <articleList :articleMsgList="articleMsgList"></articleList>
          </van-tab>
          <van-tab title="题目">
            <questionList :questionMsgList="questionMsgList"></questionList>
          </van-tab>
        </van-tabs>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import articleList from "@/components/articleList/articleList.vue";
import questionList from "@/components/questionList/questionList.vue";
import { getArticle, getQuestion } from "@/api/index.js";
import { computed, onMounted, ref } from "vue";
let active = ref(0);
let keyword = ref("");
let clearIcon = () => {
  keyword.value = "";
};
const showClearIcon = computed(() => {
  return keyword.value !== "";
});
let articleMsgList = ref([]);
let questionMsgList = ref([]);
//获取文章搜索列表
async function getArticleSearchList() {
  let params = {
    page: 1,
    keywords: keyword.value,
  };
  try {
    let resultMsg = await getArticle(params);
    const { code, data } = resultMsg;
    if (code == "0000") {
      articleMsgList.value.push(data);
    }
  } catch (e) {
    console.log(e);
  }
}
//获取题目搜索列表
async function getQuestionSearchList() {
  let params = {
    page: 1,
    keywords: keyword.value,
  };
  try {
    let resultMsg = await getQuestion(params);
    const { code, data } = resultMsg;
    if (code == "0000") {
      questionMsgList.value.push(data);
    }
  } catch (e) {
    console.log(e);
  }
}

function getResult() {
  getArticleSearchList();
  getQuestionSearchList();
}
function toNextPage() {
  console.log("翻页了");
}
onMounted(() => {});
</script>

<style lang="less" scoped>
.search_box {
  width: 100%;
  height: 100vh;
  // overflow-y: scroll;

  .search_block {
    width: 90%;
    height: 70rpx;
    border: 4rpx solid #d8d8d8;
    border-radius: 5px;
    margin: 30rpx auto 0;
    display: flex;
    justify-content: center;
    border-radius: 15rpx;

    image {
      width: 50rpx;
      height: 50rpx;
      margin-top: 8rpx;
      margin-left: 20rpx;
    }

    .text {
      flex: 1;
      margin-left: 30rpx;
      height: 70rpx;
      line-height: 70rpx;

      input {
        height: 100%;

        &::placeholder {
          color: #b8b8b8;
        }
      }
    }

    .clear_Icon {
      margin-top: 10rpx;
      margin-right: 10rpx;
      width: 50rpx;
      height: 50rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .search-content {
    width: 90%;
    height: 100%;
    // overflow-y: scroll;
    margin: 0 auto;
  }
}

/deep/ .van-tabs__line {
  background: #20b427;
}
</style>
