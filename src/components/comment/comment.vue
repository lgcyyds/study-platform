<template>
	<view class="comment-block">
		<view class="comment-container">
			<view class="comment-input">
				<image class="comment-icon" src="../../static/assets/edit.png" mode="aspectFill"></image>
				<p>
					写评论...
				</p>
			</view>
			<image v-if="iconFlag" @click="changeBtn" class="icon" src="../../static/assets/commentErea.png" mode="aspectFill"></image>
			<image v-else @click="changeBtn" class="icon" src="../../static/assets/top.png" mode="aspectFill"></image>
			<image @click="changeCollect($event)" :class="['icon',isclickCollect?'icon-change':'']" :src="`../../static/assets/clickCollect${isCollect?'':'_on'}.png`" mode="aspectFill"></image>22
			<image @click="changeLike($event)" :class="['icon',isclickLike?'icon-change':'']" :src="`../../static/assets/clickLike${isLike?'':'_on'}.png`" mode="aspectFill"></image>12
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
	const emit = defineEmits(['toComment','toArticle','update:locationFlag','update:iconFlag'])
	const props = defineProps(['locationFlag','iconFlag'])
	let isCollect = ref(true)
	let isclickCollect = ref(false)
	let changeCollect=(e)=>{
		// 收藏和取消收藏
		isclickCollect.value = true
		isCollect.value = false
	}
	
	
	let isLike = ref(true)
	let isclickLike = ref(false)
	let changeLike=()=>{
		// 点赞和取消点赞
		isclickLike.value = true
		isLike.value = false
	}
	
	
	//locationFlag  true图标显示评论  false是文章
	//iconFlag  true图标显示评论  false是文章
	let changeBtn=()=>{
		emit('update:iconFlag',!props.iconFlag)//点击改变图标
		emit('update:locationFlag',!props.iconFlag)//点击改变位置（位置改变方向由图标主导）
	}

	
</script>

<style lang="less" scoped>
	.comment-block{
		width: 100vw;
		height: 100rpx;
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
			.icon-change{
				animation: btnChange .5s;
			}
			@keyframes btnChange{
				75%{
					transform: scale(150%);
				}
				100%{
					transform: scale(50%);
				}
			}
		}
	}
</style>