<template>
	<!-- 签到 -->
	<view class="sign">
		<!-- 签到按钮 -->
		<view class="sign-btn" @click="signOn">
			<!-- v-on：事件类型="触发后的函数" 事件绑定 -->
			<view ref='signShadow' class="circle"></view>
			<view ref='signInner' class="sign-inner">
				<view>立即签到</view>
				<view class="time">00:00:00</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
import { ref } from 'vue';
	let instance = getCurrentInstance()
	let signInner = ref(null);
	let signOn = ()=>{
		let signInnerDom = instance.refs.signInner
		// console.log(signInner)
		console.log(signInnerDom)
	}
</script>

<style lang="less">
	@keyframes myScale {
		0% {
			transform: scale(1.1);
		}
	
		50% {
			transform: scale(1.2);
		}
	
		100% {
			transform: scale(1.1);
		}
	}
	
	.sign {
		.sign-btn {
			display: flex;
			justify-content: center;
			padding-top: 50rpx;
			position: relative;
	
			.circle {
				width: 160rpx;
				height: 160rpx;
				background-color: #c2d6fc;
				border-radius: 50%;
				position: absolute;
				left: calc(50% - (160rpx / 2));
				top: 50rpx;
				z-index: -1;
				animation: myScale 2s infinite linear;
				transition: all 1s;
			}
			.sign-inner {
				width: 160rpx;
				height: 160rpx;
				background-color: #3478f6;
				border-radius: 50%;
				color: #a3d0fa;
				display: flex;
				flex-wrap: wrap;
				align-content: center;
				justify-content: center;
				transition: all 1s;
				.time {
					font-size: 26rpx;
				}
			}
		}
	}
</style>