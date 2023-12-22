<template>
	<view class="comment-block">
		<view class="comment-container">
			<view class="comment-input">
				<image class="comment-icon" src="../../static/assets/edit.png" mode="aspectFill"></image>
				<p>
					写评论...
				</p>
			</view>
			<image v-if="true" @click="changeBtn" class="icon" src="../../static/assets/commentErea.png" mode="aspectFill"></image>
			<image v-else @click="changeBtn" class="icon" src="../../static/assets/top.png" mode="aspectFill"></image>
			<image @click="changeCollect" class="icon" :src="`../../static/assets/clickCollect${isCollect?'':'_on'}.png`" mode="aspectFill"></image>22
			<image @click="changeLike" class="icon" :src="`../../static/assets/clickLike${isLike?'':'_on'}.png`" mode="aspectFill"></image>12
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
	let isCollect = ref(true)
	let isLike = ref(true)
	let changeCollect=()=>{
		// 收藏和取消收藏
		isCollect.value = false
	}
	let changeLike=()=>{
		// 点赞和取消点赞
		isLike.value = false
	}
	let changeBtn=()=>{
		
	}
</script>

<style lang="less">
	.comment-block{
		width: 100vw;
		height: 90rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #ffffff;
		.comment-container{
			width: 100%;
			height: 56rpx;
			margin-top: 17rpx;
			display: flex;
			justify-content:space-around;
			align-items: center;
			.comment-input{
				height: 100%;
				line-height: 56rpx;
				padding-left: 10rpx;
				width: 300rpx;
				border-radius: 10rpx;
				background-color: #dcdcdc;
				color: #5f5f5f;
				display: flex;
				.comment-icon{
					width: 35rpx;
					height: 35rpx;
					margin-top: 10rpx;
					margin-right: 5rpx;
				}
				p{
					font-size: 10rpx;
				}
			}
			.icon{
				width: 50rpx;
				height: 50rpx;
			}
		}
	}
</style>