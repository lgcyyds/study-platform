<template>
	<view class="active_container">
		<van-tabs v-if="true" v-model:active="active">
			<view class="artAndTopic_collect">
				<van-tab title="文章收藏">
					<articleList></articleList>
				</van-tab>
				<van-tab title="题目收藏">
					<questionList></questionList>
				</van-tab>
			</view>
		</van-tabs>
		<view v-if="false" class="article_like">
			<articleList></articleList>
		</view>
	</view>
</template>

<script setup>
import articleList from '@/components/articleList/articleList.vue'
import questionList from '@/components/questionList/questionList.vue'
import { onLoad } from '@dcloudio/uni-app';
import { onMounted, ref } from 'vue';
const active = ref(0);

//初始化顶部title
onLoad((options)=>{
	const {title} = options
	uni.setNavigationBarTitle({
		title:title
	})
})
</script>

<style lang="less">
.active_container {
	width: 100%;
	height: 100%;
	.artAndTopic_collect{
		width: 93%;
		height: 1155rpx;
		overflow-y: scroll;
		margin: 0 auto;
	}
	.article_like{
		width: 93%;
		height: 1245rpx;
		overflow-y: scroll;
		margin: 0 auto;
	}
}
/deep/ .van-tabs__line {
    background: #20b427;
}
</style>
