<template>
	<!-- 签到 -->
	<view class="sign" :style="{height:status,display:isSignIn}">
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
import { getCurrentInstance, onMounted } from 'vue';
import { ref } from 'vue';
	let isSignInState = ref(false)//签到状态
	let isSignIn = ref()//签到样式
	//点击签到按钮
	let status = ref('230rpx')
	let signOn = ()=>{
		setTimeout(function() {
			status.value = '0rpx' 
		}, 1000);
		console.log(status.value)
	}
	onMounted(()=>{
		//根据签到状态初始化签到按钮
		if(isSignInState.value){
			isSignIn.value = 'none'
		}
	})
</script>

<style lang="less" scoped>
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
		transition: all 1s;
		overflow: hidden;
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
				height: 160rpx;
				width: 160rpx;
				background-color: #3478f6;
				border-radius: 50%;
				color: #a3d0fa;
				display: flex;
				flex-wrap: wrap;
				align-content: center;
				justify-content: center;
				font-size: 30rpx;
				transition: all 1s;
				.time {
					font-size: 26rpx;
				}
				overflow: hidden;
			}
		}
	}
</style>