<template>
	<view>
		<van-tabs v-model:active="active" @change='tabChange'>
			<van-tab title="全部文章"></van-tab>
			<van-tab title="收藏最多"></van-tab>
			<van-tab title="点赞最多"></van-tab>
		</van-tabs>
		<view class="article_container">
			<articleList :articleMsgList="allArticleList" @nextPage = 'getAllArticle'></articleList>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import articleList from '@/components/articleList/articleList.vue';
import {getArticle} from '../../api/index.js'
import { onLoad } from '@dcloudio/uni-app';
const active = ref(0);
const page = ref(1)
const collected = ref(0)
const liked = ref(0)
const finish = ref(false)
const allArticleList = ref([])
async function getAllArticle(){
	if(finish.value) return
	let params = {
		page:page.value,
		collected:collected.value,
		liked:liked.value
	}
	try{
		let dataMsg = await getArticle(params)
		const {code,data} = dataMsg
		if(code == '0000'){
			allArticleList.value.push(...data)
		}
		page.value++
		if(data.length <10){
			finish.value = true
		}
	}catch(e){
		//TODO handle the exception
		console.log(e);
	}
	
}
let tabChange = (name)=>{
	let index = name.detail.index
	allArticleList.value = []//重置
	page.value = 1//重置
	finish.value = false//重置
	switch(index){
		case 0:{
			collected.value = 0
			liked.value = 0
			getAllArticle()
			break;
		}
		case 1:{
			collected.value = 1
			liked.value = 0
			getAllArticle(1,0)
			break;
		}
		case 2:{
			collected.value = 0
			liked.value = 1
			getAllArticle(0,1)
			break;
		}
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