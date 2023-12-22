<template>
	<view class="message">
		<view class="message-tip">
			<view class="like">
				<view class="container">
					<image class="icon" src="@/static/assets/like.png" mode="aspectFill"></image>
					<view class="word">点赞</view>
					<view class="dot">1</view>
				</view>
			</view>
			<view class="collect">
				<view class="container">
					<image class="icon" src="@/static/assets/focus.png" mode="aspectFill"></image>
					<view class="word">收藏</view>
					<view class="dot">1</view>
				</view>
			</view>
			<view class="comment">
				<view class="container">
					<image class="icon" src="@/static/assets/comment1.png" mode="aspectFill"></image>
					<view class="word">评论</view>
					<view class="dot">10</view><!-- 最大99 -->
				</view>
			</view>
		</view>
		<view class="message-box">
			<view class="message-items" v-for="(item,index) in 8" :key="index">
				<view class="message-img">
					<image src="../../static/logo.png" mode="aspectFill"></image>
				</view>
				<view class="dot" v-show="true"></view>
				<view class="message-content">
					<view class="message-text">
						<view class="message-title">
							文章标题
						</view>
						<view class="message-action">
							根据三个标识区分点赞收藏品论，评论显示内容，多出的...
						</view>
					</view>
				</view>
				<view class="message-time">
					2000-12-23
				</view>
				
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="less">
.message{
	.message-tip{
		width: 100%;
		height: 210rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		.like,
		.collect,
		.comment{
			width: 33.33%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.container{
				position: relative;
				.icon{
					width: 90rpx;
					height: 90rpx;
				}
				.word{
					text-align: center;
					font-size: 30rpx;
					font-weight: 600;
				}
				.dot{
					position: absolute;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 10rpx;
					background-color: #ff3e03;
					width: 33rpx;
					height: 33rpx;
					border-radius: 50%;
					right: -8rpx;
					top: 65rpx;
					color: #ffffff;
				}
			}
			
		}
	}
	.message-box{
		width: 100%;
		height: 100%;
		.message-items{
			width: 100%;
			height: 150rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 10rpx 0;
			position: relative;
			.message-img{
				width: 115rpx;
				height: 115rpx;
				margin: 0 25rpx;
				border-radius: 50%;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.dot{
				position: absolute;
				width: 20rpx;
				height: 20rpx;
				border-radius: 50%;
				border: #ffffff 7rpx solid;
				background: #ff3e03;
				left: 105rpx;
				bottom: 15rpx;
			}
			.message-content{
				height: 100%;
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				.message-text{
					width: 100%;
					height: 115rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.message-title{
						font-size: 32rpx;
						font-weight: 600;
					}
					.message-action{
						height: 40rpx;
						width: 420rpx;
						line-height: 40rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						color: #8c8c8c;
						font-size: 25rpx;
					}
				}
				
			}
			.message-time{
				height: 100%;
				width: 150rpx;
				font-size: 10rpx;
				text-align: center;
				margin-top: 40rpx;
			}
		}
	}
}
</style>
