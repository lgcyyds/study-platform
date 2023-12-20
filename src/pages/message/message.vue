<template>
	<view class="message">
		<view class="message-tip">
			<view class="like">
				<view class="container">
					<image class="icon" src="@/static/logo.png" mode="aspectFill"></image>
					<view class="word">点赞</view>
					<view class="dot">1</view>
				</view>
			</view>
			<view class="collect">
				<view class="container">
					<image class="icon" src="@/static/logo.png" mode="aspectFill"></image>
					<view class="word">收藏</view>
					<view class="dot">1</view>
				</view>
			</view>
			<view class="comment">
				<view class="container">
					<image class="icon" src="@/static/logo.png" mode="aspectFill"></image>
					<view class="word">评论</view>
					<view class="dot">1</view>
				</view>
			</view>
		</view>
		<view class="message-box">
			
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="less">
.message{
	.message-tip{
		width: 100%;
		height: 170rpx;
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
					width: 70rpx;
					height: 70rpx;
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
					width: 28rpx;
					height: 28rpx;
					border-radius: 50%;
					right: -8rpx;
					top: 50rpx;
					color: #ffffff;
				}
			}
			
		}
	}
}
</style>
