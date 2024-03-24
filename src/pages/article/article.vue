<template>
	<scroll-view style="{height: calc(100vh - 100rpx);}" scroll-y="true" show-scrollbar="false" :scroll-into-view="moveFlag" id="scrollLocation" @scroll="locationChange" scroll-with-animation="true">
		<view class="article-container">
			<view class="article-info" id="article">
				<view class="article-title">
					{{ArticleData.title}}
				</view>
				<view class="article-author-info">
					<view class="article-author-items">
						<view class="article-author-img">
							<image src="../../static/logo.png" mode="aspectFill"></image>
						</view>
						<view class="article-author-content">
							<view class="article-author-text">
								<view class="article-author-title">
									用户名
								</view>
								<view class="article-author-action">
									<image class="sign-icon" src="../../static/assets/signup1.png" mode="aspectFill"></image>
									<view class="day">
										签到23天
									</view>
									<image class="view-icon" src="../../static/assets/view.png" mode="aspectFill"></image>
									<view class="day">
										{{ArticleData.visited}}
									</view>
								</view>
							</view>
						</view>				
					</view>
				</view>
			</view>
			<!-- 文章主体 -->
			<view class="article-body">
			  <rich-text :nodes="ArticleData.content"></rich-text>
			</view>
			<!-- 日期和标签 -->
			<view class="article-other">
				<view class="article-date">
					—— 发表于{{userFormatDate(ArticleData.createdTime)}} ——
				</view>
			</view>
			<!-- 全部评论 -->
			<view class="article-comment" id="allComment">
				<commentList :commentList="articleCommentList"/>
			</view>
		</view>
	</scroll-view>
	<!-- 底部评论组件 -->
	<comment v-if="commentType" v-model:locationFlag="locationFlag" v-model:iconFlag="iconFlag" @changeComment="switchCommentBox" :ArticleData='ArticleData' @clickCollectedOrLiked = "clickCollectedOrLiked"></comment>
	<commentBox v-else @changeComment="getCommentContent"></commentBox>
	<van-overlay :show="isShow" @click="onClickHide" />
</template>

<script setup>
import comment from '@/components/comment/comment.vue'
import commentList from '@/components/commentList/commentList.vue'
import commentBox from '@/components/commentBox/commentBox.vue'
import { isBoolean } from 'lodash';
import { onBeforeUnmount, ref, onMounted, getCurrentInstance, computed } from 'vue'
import userFormatDate from "../../hooks/useFormatDate.js"
import {getArticle,getArticleCommentList,collectOrLikeArticle} from '../../api/index.js'
import { onLoad } from '@dcloudio/uni-app';
import useUserStore from '../../store/user.js'
const userStore = useUserStore()

    // 内容 HTML
    const valueHtml = ref('')
	const ArticleData = ref({})
	
	const locationFlag = ref(true)//true标识为评论、false为回顶部
	const moveFlag =  computed(()=>{
		if(isBoolean(locationFlag.value)){
			return locationFlag.value?'article':'allComment'
		}else{
			return ''
		}
	})
	onMounted(()=>{
		//记录评论区距离顶部的原始高度
		const instance = getCurrentInstance();
		const query = uni.createSelectorQuery().in(instance);
		query.select("#allComment")
			.boundingClientRect((rect) => {
				commentTop.value = rect.top
			})
			.exec();
	})

	
	const commentTop = ref(0)//记录评论区距离顶部的原始高度
	const iconFlag = ref(true)//图标的标志
	let locationChange = (e)=>{ 
		locationFlag.value = ''//重置位置标识，保证改变时能移动页面
		let st = e.target.scrollTop
		if(st + 150 >commentTop.value){
			iconFlag.value = false
		}else{
			iconFlag.value = true
		}
	}
	
	//底部评论组件
	const commentType = ref(true)
	const isShow = ref(false)
	const switchCommentBox=()=>{
		commentType.value = false
		isShow.value = true
	}
	const onClickHide=()=>{
		isShow.value = false
		commentType.value = true
	}
	const getCommentContent = (value)=>{
			console.log(value);
	}
	
	//获取文章内容
	async function getArticleDetail(id){
		try{
			let params={
				id:id
			}
			let dataMsg = await getArticle(params)
			const {code,data} = dataMsg
			if(code == "0000"){
				ArticleData.value = data[0]
			}
		}catch(e){
			//TODO handle the exception
			console.log(e);
		}
	}
	
	let articleCommentList = ref([])
	//获取文章评论
	async function getArticleComment(id){
		try{
			let params = {
				id:id
			}
			let dataMsg = await getArticleCommentList(params)
			const {code,data} = dataMsg
			if(code == "0000"){
				articleCommentList.value.push(...data)
			}
		}catch(e){
			//TODO handle the exception
		}
	}
	
	const userId = computed(()=>{
		return userStore.userInfo._id
	})
	let articleId = ref(null)
	//点赞和收藏文章
	async function clickCollectedOrLiked(type){
		console.log(type);
		let form = {
			userId:userId.value,
			articleId:articleId.value,
			type:type
		}
		try{
			let dataMsg = await collectOrLikeArticle(form)
			const {code,data} = dataMsg
			if(code = '0000'){
				console.log(data);
			}
		}catch(e){
			//TODO handle the exception
		}
	}
	
	
	onLoad((params)=>{
		articleId = params.id
		getArticleDetail(params.id)
		getArticleComment(params.id)
	})
</script>

<style lang="less" scoped>
.article-container{
	width: 93%;
	height: calc(100vh - 100rpx);
	margin: 0 auto;
	.article-info{
		width: 100%;
		max-height: 280rpx;
		.article-title{
			width: 100%;
			font-size: 43rpx;
			font-weight: 600;
		}
		.article-author-info{
			.article-author-items{
				width: 100%;
				height: 120rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 10rpx 0;
				position: relative;
				.article-author-img{
					width: 90rpx;
					height: 90rpx;
					margin: 0 25rpx 0 0;
					border-radius: 50%;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.article-author-content{
					height: 100%;
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					.article-author-text{
						width: 100%;
						height: 90rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.article-author-title{
							font-size: 32rpx;
							font-weight: 600;
						}
						.article-author-action{
							height: 40rpx;
							width: 420rpx;
							line-height: 40rpx;
							color: #8c8c8c;
							font-size: 25rpx;
							display: flex;
							align-items: center;
							.sign-icon{
								width: 35rpx;
								height: 35rpx;
								margin-right: 10rpx;
								margin-bottom: 5rpx;
							}
							.view-icon{
								width: 35rpx;
								height: 35rpx;
								margin-left: 30rpx;
								margin-right: 10rpx;
							}
						}
					}
					
				}
			}
		}
	}
	.article-other{
		width: 100%;
		display: flex;
		flex-direction: column;
		.article-date{
			width: 100%;
			display: flex;
			justify-content: center;
			align-content: center;
			font-size: 25rpx;
			color: #8c8c8c;
			margin: 20rpx 0;
		}
	}
	// .article-comment{
	// 	padding-bottom: 120rpx;
	// }
}
</style>
