<template>
	<view class="main">
		<!-- 用户信息 -->
		<view class="user">
			<view class="user-container">
				<view class="user-pic">
					<image src="../../static/logo.png" mode="aspectFill"></image>
				</view>
				<view class="user-name">用户名</view>
			</view>
		</view>
		<!-- 签到、收藏、文章 -->
		<view class="count">
			<view class="count-sign">
				<view class="count-text">签到天数</view>
				<view class="count-num">1</view>
			</view>
			<view class="count-collect" @click="goMyCollect">
				<view class="count-text">收藏</view>
				<view class="count-num">1</view>
			</view>
			<view class="count-article">
				<view class="count-text">文章</view>
				<view class="count-num">2</view>
			</view>
		</view>
		<!-- 功能模块 -->
		<view class="section">
			<ul class="section-ul" @click="goPage($event)">
				<li class="section-li">
					<image class="icon-li" src="../../static/assets/customer-center.png" mode="aspectFill"></image>
					<view class="text">个人资料</view>
					<image class="icon-arrow" src="../../static/assets/triangle-right-fill.png" mode="aspectFill"></image>
				</li>
				<li class="section-li">
					<image class="icon-li" src="../../static/assets/good-like.png" mode="aspectFill"></image>
					<view class="text">我的点赞</view>
					<image class="icon-arrow" src="../../static/assets/triangle-right-fill.png" mode="aspectFill"></image>
				</li>
				<li class="section-li">
					<image class="icon-li" src="../../static/assets/comment.png" mode="aspectFill"></image>
					<view class="text">阅读历史</view>
					<image class="icon-arrow" src="../../static/assets/triangle-right-fill.png" mode="aspectFill"></image>
				</li>
				<li class="section-li">
					<image class="icon-li" src="../../static/assets/exit.png" mode="aspectFill"></image>
					<view class="text">退出登录</view>
					<image class="icon-arrow" src="../../static/assets/triangle-right-fill.png" mode="aspectFill"></image>
				</li>
			</ul>
		</view>
	</view>
</template>

<script setup>
import { onMounted } from 'vue';
const goPage=(e)=>{
	let pageName = e.target.innerText
	if(pageName == '我的点赞'){
		uni.navigateTo({
			url:`/pages/myActive/myActive?title=${pageName}`
		})
	}else if (pageName == '个人资料'){
		
	}else if(pageName == '退出登录'){
		
	}else if(pageName == '阅读历史'){
		
	}
}
const goMyCollect = ()=>{
	uni.navigateTo({
		url:`/pages/myActive/myActive?title=我的收藏`
	})
}
onMounted(() => {});
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
			.user-pic {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
				overflow: hidden;
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
