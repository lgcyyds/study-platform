<template>
	<view class="comment_box">
		<view class="comment_left">
			<input class="comment_input" placeholder="输入评论" type="text" focus v-model="commentText" @input="changeCommentText"/>
		</view>
		<view class="comment_right">
			<view class="send_btn">
				发送
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['changeComment'])
const commentText = ref('')
const changeCommentText = ()=>{
	emit('changeComment',commentText.value)
}
</script>

<style lang="less" scoped>
.comment_box{
	width: 100vw;
	max-height: 300rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1000;
	padding-bottom: 30rpx;
	background-color: #ffffff;
	display: flex;
	.comment_left{
		min-height: 130rpx;
		width: 70%;
		display: flex;
		justify-content: center;
		align-items: center;
		.comment_input{
			width: 90%;
			height: 70rpx;
			margin: 10rpx 0;
			padding: 0 10rpx;
			background-color: #dcdcdc;
			border-radius: 8rpx;
		}
	}
	.comment_right{
		width: 30%;
		min-height: 130rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		white-space: nowrap;
		.send_btn{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 150rpx;
			height: 50rpx;
			line-height: 50rpx;
			background: #20b427;
			border-radius: 30rpx;
			color: #ffffff;
			font-size: 30rpx;
		}
	}
}
</style>