<template>
	<view class="active_container">
		<van-tabs v-if="pageFlag == '0'" v-model:active="active" sticky>
			<view class="artAndTopic_collect">
				<van-tab title="文章收藏">
					<articleList></articleList>
				</van-tab>
				<van-tab title="题目收藏">
					<questionList></questionList>
				</van-tab>
			</view>
		</van-tabs>
		<view v-else-if="pageFlag=='1'" class="article_like">
			<articleList></articleList>
		</view>
		<view v-else class="article_history">
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

const pageFlag = ref('')
//初始化顶部title
onLoad((options)=>{
	const {title} = options
	if(title == '我的点赞'){
		pageFlag.value = '1'
	}else if(title == '我的收藏'){
		pageFlag.value = '0'
	}
	uni.setNavigationBarTitle({
		title:title
	})
})
</script>

<style lang="less" scoped>
.active_container {
	width: 100%;
	height:100vh;
	overflow: hidden;
	.artAndTopic_collect,
	.article_like,
	.article_history{
		width: 93%;
		height: 1355rpx;
		overflow-y: scroll;
		margin: 0 auto;
	}
}
/deep/ .van-tabs__line {
    background: #20b427;
}
</style>
