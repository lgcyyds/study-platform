<template>
	<view class="main">
		<!-- 用户信息 -->
		<view class="user">
			<view class="user-container">
				<view class="user-pic" @click="WXlogin">
					<image :src="globalProperties.$baseURL + avatar" mode="aspectFill"></image>
				</view>
				<view class="user-name">{{username}}</view>
			</view>
		</view>
		<!-- 签到、收藏、文章 -->
		<view class="count">
			<view class="count-sign">
				<view class="count-text">签到天数</view>
				<view class="count-num">{{userOtherInfo.checkInCount}}</view>
			</view>
			<view class="count-collect" @click="goMyCollect">
				<view class="count-text">收藏</view>
				<view class="count-num">{{userOtherInfo.collectCount}}</view>
			</view>
			<view class="count-article" @click="goMyArticle">
				<view class="count-text">文章</view>
				<view class="count-num">{{userOtherInfo.myArticleCount}}</view>
			</view>
		</view>
		<!-- 功能模块 -->
		<view class="section">
			<ul class="section-ul" @click="goPage($event)">
				<li class="section-li">
					<image class="icon-li" src="../../static/assets/customer-center.png" mode="aspectFill"></image>
					<view class="text" id="userInfo">个人资料</view>
					<image class="icon-arrow" src="../../static/assets/triangle-right-fill.png" mode="aspectFill"></image>
				</li>
				<li class="section-li">
					<image class="icon-li" src="../../static/assets/good-like.png" mode="aspectFill"></image>
					<view class="text" id="userLike">我的点赞</view>
					<image class="icon-arrow" src="../../static/assets/triangle-right-fill.png" mode="aspectFill"></image>
				</li>
				<li class="section-li">
					<image class="icon-li" src="../../static/assets/comment.png" mode="aspectFill"></image>
					<view class="text" id="readHistory">阅读历史</view>
					<image class="icon-arrow" src="../../static/assets/triangle-right-fill.png" mode="aspectFill"></image>
				</li>
				<li class="section-li">
					<image class="icon-li" src="../../static/assets/exit.png" mode="aspectFill"></image>
					<view class="text" id="loginout">退出登录</view>
					<image class="icon-arrow" src="../../static/assets/triangle-right-fill.png" mode="aspectFill"></image>
				</li>
			</ul>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { onMounted,computed, ref } from 'vue';
import {userLogin,getUserOtherInfo} from '../../api/index.js'
import useGlobalProperties from '@/hooks/globalVar'
import useUserStore from '../../store/user.js'
const globalProperties = useGlobalProperties()
const userStore = useUserStore()

const username = computed(()=>{
	return userStore.userInfo.username
})
const avatar = computed(()=>{
	return userStore.userInfo.avatar
})

function WXlogin(){
	uni.showLoading({
	      title: '登录中...'
	});
	wx.login({
		async success (res) {
			if (res.code) {
				let params = {
					code:res.code
				}
				try{
					const dataMsg = await userLogin(params)
					const {code,data:{userInfo}} = dataMsg
					if(code =='0000'){
						userStore.updateUserInfo(userInfo)
						uni.hideLoading();
						uni.showToast({
						      title: '登录成功',
						});
					}else{
						uni.showToast({
						      title: '登录失败',
						});
					}
				}catch(e){
					console.log(e);
				}
				
			} else {
			  console.log('登录失败！' + res.errMsg)
			}
		},
		fail(res){
			console.log(res);
		}
	})
}

const goPage=(e)=>{
	let pageName = e.target.innerText;
	let id = e.target.id;
	console.log(pageName,id);
	if(pageName == '我的点赞' || id == 'userLike'){
		uni.navigateTo({
			url:`/pages/myActive/myActive?title=我的点赞`
		})
	}else if (pageName == '个人资料' || id == 'userInfo'){
		uni.navigateTo({
			url:`/pages/myInfo/myInfo`
		})
	}else if(pageName == '退出登录' || id == 'loginout'){

	}else if(pageName == '阅读历史' || id == 'readHistory'){
		uni.navigateTo({
			url:`/pages/myActive/myActive?title=阅读历史`
		})
	}
}
const goMyCollect = ()=>{
	uni.navigateTo({
		url:`/pages/myActive/myActive?title=我的收藏`
	})
}
const goMyArticle = ()=>{
	uni.navigateTo({
		url:`/pages/myArticle/myArticle`
	})
}

let userOtherInfo = ref({})
async function getOtherInfo(){
	let params={
		id:userStore.userInfo.id
	}
	try{
		let dataMsg = await getUserOtherInfo(params)
		let {code,data} = dataMsg
		if(code == '0000'){
			userOtherInfo.value = data
		}
	}catch(e){
		//TODO handle the exception
	}
}

onMounted(() => {
	getOtherInfo()
});
	


</script>

<style lang="less">
.main {
	width: 92%;
	margin: 0 auto;
	.user {
		width: 100%;
		height: 230rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		.user-container {
			align-item: center;
			.user-pic {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
				overflow: hidden;
				margin: 0 auto;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.user-name {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 10rpx;
			}
		}
	}
	.count {
		display: flex;
		border-radius: 10px;
		box-shadow: 0 2px 10px #ccc;
		.count-sign,
		.count-collect,
		.count-article {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			width: 33.33%;
			height: 150rpx;
			.count-text,
			.count-num {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
	.section {
		width: 100%;
		.section-ul {
			width: 100%;
			list-style-type: none;
			padding: 0;
			.section-li {
				display: flex;
				width: 100%;
				height: 100rpx;
				line-height: 100rpx;
				border: #ccc 1px solid;
				margin: 15rpx 0;
				border-radius: 10px;
				.icon-li {
					margin: 26rpx 20rpx;
					width: 50rpx;
					height: 50rpx;
				}
				.text {
					flex: 1;
				}
				.icon-arrow {
					margin: 26rpx 20rpx;
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
	}
}
</style>
