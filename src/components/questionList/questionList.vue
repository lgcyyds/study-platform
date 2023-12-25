<template>
	<view class="question_container">
		<view class="question_item">
			<view class="question_left">
				<view class="title">
					<view class="dot"></view>
					<view class="text">
						测试测试测试测试测试测试测试测试测试
					</view>
				</view>
				<view class="difficulty">
					<view class="text">难度:</view>
					<view class="star">
						
					</view>
				</view>
			</view>
			<view class="question_right">
				
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="less" scoped>
.question_container{
	height: 100%;
	width: 100%;
	.question_item{
		width: 100%;
		height: 150rpx;
		border: 1rpx black solid;
		display: flex;
		.question_left{
			width: 570rpx;
			height: 100%;
			border: 1rpx black solid;
			.title{
				width: 100%;
				height: 75rpx;
				border: 1rpx black solid;
				display: flex;
				align-items: center;
				.text{
					width: calc(100% - 15rpx);
					height: 100%;
					line-height: 75rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.dot{
					width: 15rpx;
					height: 15rpx;
					border-radius: 50%;
					background-color: #20b427;
					margin-right: 15rpx;
				}
			}
			.difficulty{
				width: 100%;
				height: 55rpx;
				border: 1rpx black solid;
			}
		}
		.question_right{
			width: 100rpx;
			height: 100%;
			border: 1rpx black solid;
		}
	}
}
</style>