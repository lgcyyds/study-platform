<template>
	<view class="topic_container">
		<view class="topic_title">
			<view class="dot"></view>
			<view class="title">
				单选题
			</view>
			<view class="topic_index">
				<text>1</text>/150
			</view>
		</view>
		<view class="topic_content">
			<view class="topic_details">
				<view class="topic_text">
					测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
				</view>
				<view class="topic_option" v-for="item in 4">
					<view class="option_Word">
						A.
					</view>
					<text>测试测试测试测试测试测试测试测试试试测试测试测试测试试测</text>
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

</script>

<style lang="less">
body{
	// background-color: #f8f8f8;
}
.topic_container{
	width: 90%;
	height: 100%;
	margin: 0 auto;
	overflow: hidden;
	.topic_title{
		width: 100%;
		height: 60rpx;
		border-radius: 5px;
		background-color: #f3f3f3;
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
			flex: 1;
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
		background-color: #f3f3f3;
		margin-top: 20rpx;
		display: flex;
		padding: 30rpx 0;
		.topic_details{
			width: 85%;
			height: 100%;
			margin: 0 auto;
			.topic_option{
				width: 100%;
				min-height: 80rpx;
				background-color: #e1e1e1;
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
