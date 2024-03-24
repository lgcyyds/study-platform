<template>
	<view class="commentList-container">
		<view class="tab">
			<p>全部评论</p>
		</view>
		<view class="comment-items">
			<view class="comment-item" v-for="(item,index) in commentList" :key="index">
				<view class="img">
					<image :src="globalProperties.$baseURL + item.userInfo[0].avatar" mode="aspectFill"></image>
				</view>
				<view class="comment-content">
					<view class="user-nick">
						{{item.userInfo[0].username}}
					</view>
					<view class="comment-text">
						{{item.content}}
					</view>
					<view class="comment-other">
						{{userFormatTime(item.commentTime)}}
					</view>
				</view>
			</view>
			<view class="loadTip">
				加载更多评论/— 已显示全部评论 —
			</view>
		</view>
	</view>
</template>

<script setup>
import userFormatTime from "../../hooks/useFormatTime.js"
import useGlobalProperties from '@/hooks/globalVar'
const globalProperties = useGlobalProperties()
const props = defineProps({
	commentList:{
		type: Array,
		default: [],
	}
})

</script>

<style lang="less" scoped>
	.commentList-container{
		width: 100%;
		height: 100%;
		.tab{
			width: 100%;
			height: 90rpx;
			display: flex;
			align-items: center;
			border-top: 1px #d5d5d5 solid;
			p{
				margin-left: 30rpx;
			}
		}
		.comment-items{
			width: 100%;
			.comment-item{
				width: 100%;
				min-height: 180rpx;
				display: flex;
				margin-bottom: 20rpx;
				.img{
					height: 70rpx;
					width: 70rpx;
					margin: 5rpx 25rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				.comment-content{
					width: calc(100% - 120rpx);
					display: flex;
					flex-direction: column;
					.user-nick{
						font-size: 30rpx;
						color: #8c8c8c;
					}
					.comment-text{
						width: 90%;
						flex: 1;
						margin: 25rpx 0;
						font-size: 30rpx;
					}
					.comment-other{
						color: #8c8c8c;
						font-size: 20rpx;
					}
				}
			}
			.loadTip{
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 20rpx;
				color: #8c8c8c;
			}
		}
	}
</style>