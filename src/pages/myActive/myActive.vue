<template>
	<view class="active_container">
		<van-tabs v-if="pageFlag == '0'" v-model:active="active" sticky>
			<view class="artAndTopic_collect">
				<van-tab title="文章收藏">
					<articleList :articleMsgList="articleDataList"></articleList>
				</van-tab>
				<van-tab title="题目收藏">
					<questionList :qtList="quetionDataList"></questionList>
				</van-tab>
			</view>
		</van-tabs>
		<view v-else-if="pageFlag=='1'" class="article_like">
			<articleList :articleMsgList="articleDataList"></articleList>
		</view>
		<view v-else class="article_history">
			<articleList :articleMsgList="articleDataList"></articleList>
		</view>
	</view>
</template>

<script setup>
import articleList from '@/components/articleList/articleList.vue'
import questionList from '@/components/questionList/questionList.vue'
import {getLiked , getAllCollect} from '../../api/index.js'
import { onLoad } from '@dcloudio/uni-app';
import { computed, onMounted, ref } from 'vue';
import useUserStore from '../../store/user.js'
const userStore = useUserStore()
const active = ref(0);

const pageFlag = ref('')

let userId = computed(()=>{
	return userStore.userInfo.id
})
let articleDataList = ref([])
let quetionDataList = ref([])
async function getLikedArticle(){
	let params = {
		id : userId.value
	}
	try{
		let dataMsg = await getLiked(params)
		const {code, data} = dataMsg
		if(code=='0000'){
			articleDataList.value = data
		}
	}catch(e){
		//TODO handle the exception
	}
}
async function getAllCollectList(){
	let params = {
		id : userId.value
	}
	try{
		let dataMsg = await getAllCollect(params)
		const {code, data:{articleListResult , questionListResult}} = dataMsg
		if(code=='0000'){
			articleDataList.value = articleListResult
			quetionDataList.value = questionListResult
		}
	}catch(e){
		//TODO handle the exception
	}
}

//初始化顶部title
onLoad((options)=>{
	const {title} = options
	if(title == '我的点赞'){
		pageFlag.value = '1'
		getLikedArticle()
	}else if(title == '我的收藏'){
		pageFlag.value = '0'
		getAllCollectList()
	}else{//阅读历史
		
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
