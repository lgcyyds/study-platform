<template>
	<view>
		<van-tabs v-model:active="active">
			<van-tab title="全部文章"></van-tab>
			<van-tab title="收藏最多"></van-tab>
			<van-tab title="点赞最多"></van-tab>
		</van-tabs>
		<view class="article_container">
			<articleList :articleMsgList="allArticleList"></articleList>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import articleList from '@/components/articleList/articleList.vue';
import {getArticle} from '../../api/index.js'
import { onLoad } from '@dcloudio/uni-app';
const active = ref(0);
const page = ref(1)
const allArticleList = ref([])
async function getAllArticle(){
	let params = {
		page
	}
	try{
		let dataMsg = await getArticle(params)
		const {code,data} = dataMsg
		if(code == '0000'){
			allArticleList.value.push(...data)
		}
	}catch(e){
		//TODO handle the exception
		console.log(e);
	}
	
}

onMounted(()=>{
	getAllArticle()
})
</script>

<style lang="less" scoped>
.article_container {
	width: 92%;
	height: calc(100vh - 100rpx);
	overflow-y: scroll;
	margin: 0 auto;
}
/deep/ .van-tabs__line {
	background: #20b427;
}
</style>