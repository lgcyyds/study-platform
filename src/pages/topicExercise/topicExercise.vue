<template>
	<view class="topic_container">
		<view class="topic_title">
			<view class="dot"></view>
			<view class="title">
				单选题
			</view>
			<view class="collect_img">
				<image @click="clickCollect" :class="['collect',clickActive?'collect_active':'']" :src="`../../static/assets/clickCollect${isCollected?'_on':''}.png`" mode="aspectFill"></image>
			</view>
			<view class="topic_index">
				<text>1</text>/150
			</view>
		</view>
		<view class="topic_content">
			<view class="topic_details">
				<view class="topic_text">
					{{questionMsg.title}}
				</view>
				<view class="topic_option" v-for="(item,index) in questionMsg.options" :key="index">
					<view class="option_Word">
						{{Object.keys(item)[0].toUpperCase()+'、'}}
					</view>
					<text>{{item[Object.keys(item)[0]]}}</text>
				</view>	
				<view class="topic_control">
					<view class="control">
						<view class="pre-btn">
							上一题
						</view>
						<view class="next-btn">
							下一题
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { onMounted, ref } from 'vue';
import {  getQuestion } from "@/api/index.js";

let isCollected = ref(false)
const clickActive = ref(false)
const clickCollect = () =>{
	isCollected.value = true
	clickActive.value = true
}

let questionMsg = ref(null)
async function getQuestionSearchList(id) {
  let params = {
    id
  };
  try {
    let resultMsg = await getQuestion(params);
    const { code, data } = resultMsg;
    if (code == "0000") {
      questionMsg.value = data[0];
	  console.log(questionMsg.value);
    }
  } catch (e) {
    console.log(e);
  }
}
onLoad((params)=>{
	console.log(params.id);//拿到题目id
	
	getQuestionSearchList(params.id)
})
</script>

<style lang="less" scoped>
body{
	// background-color: #f8f8f8;
}
.topic_container{
	width: 90%;
	height: 100%;
	margin: 0 auto;
	.topic_title{
		width: 100%;
		height: 60rpx;
		border-radius: 5px;
		// background-color: #f3f3f3;
		box-shadow: 2rpx 2rpx 4rpx rgba(0, 0, 0, 0.3);
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		.dot{
			width: 13rpx;
			height: 35rpx;
			background-color: #20b427;
		}
		.title{
			line-height: 60rpx;
			margin-left: 20rpx;
		}
		.collect_img{
			flex: 1;
			.collect{
				padding-left: 20rpx;
				margin-top: 5rpx;
				width: 40rpx;
				height: 35rpx;
			}
			.collect_active{
				animation: .5s btnChange;
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
		.topic_index{
			color: #b4b4b4;
			margin-right: 10rpx;
			text{
				color:black;
			}
		}
	}
	.topic_content{
		width: 100%;
		height: auto;
		border-radius: 5px;
		// background-color: #f3f3f3;
		box-shadow: 2rpx 2rpx 6rpx rgba(0, 0, 0, 0.3);
		margin: 20rpx 0;
		display: flex;
		padding: 30rpx 0;
		.topic_details{
			width: 85%;
			height: 100%;
			margin: 0 auto;
			.topic_option{
				width: 100%;
				min-height: 80rpx;
				background-color: #f1f1f1;
				border-radius: 5px;
				margin-top: 20rpx;
				display: flex;
				align-items: center;
				.option_Word{
					margin-left: 20rpx;
				}
				text{
					margin-left: 20rpx;
					margin: 10rpx 20rpx;
				}
			}
			.topic_control{
				width: 100%;
				height: 70rpx;
				margin-bottom: 20rpx;
				.control{
					display: flex;
					justify-content: space-evenly;
					.pre-btn,.next-btn{
						margin-top: 30rpx;
						width: 160rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						line-height: 55rpx;
						border-radius: 15rpx;
					}
					.pre-btn{
						border: #b4b4b4 1px solid;
						color: #a8a8a8;
					}
					.next-btn{
						background-color: #20b427;
						color: #ffffff;
					}
				}
			}
		}
	}
}
</style>
