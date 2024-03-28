<template>
	<scroll-view class="question_container" scroll-y="true" @scrolltolower="toNextPage">
	<!-- <view class="question_container"> -->
		<view class="question_item" v-for="(item,index) in qtList" :key="index">
			<view class="question_left">
				<view class="title">
					<view class="dot"></view>
					<view class="text">
						{{item.title}}
					</view>
				</view>
				<view class="difficulty">
					<view class="text">难度:</view>
					<view class="star">
						<image v-for="(i,index) in item.level" :key="index" src="../../static/assets/star.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="tags">
					<view class="tags_left">
						<view class="text">
							标签：
						</view>
						<view class="tag" v-for="(tag,index) in item.tags" :key="index">
							{{tag}}
						</view>
					</view>
					<view class="tags_right">
						<van-button plain type="primary" color="#20b427" round size="mini" @click="goTopicExercise(item)">练习</van-button>
					</view>
				</view>
			</view>
		</view>
	<!-- </view> -->
	</scroll-view>
</template>

<script setup>
import { onMounted } from 'vue';
 const props = defineProps({
	qtList: {
	  type: Array,
	  default: []
	}
  })
const emit = defineEmits(['nextPage'])
const goTopicExercise = (item)=>{
	uni.navigateTo({
		url:`/pages/topicExercise/topicExercise?id=${item._id}`,
	})
}

function toNextPage() {
  console.log("翻页了");
  emit('nextPage')
}
onMounted(()=>{

})
</script>

<style lang="less" scoped>
	// --button-mini-height:20rpx
.question_container{
	height: 100%;
	width: 100%;
	overflow-y: scroll;
	.question_item{
		width: 100%;
		height: 180rpx;
		display: flex;
		margin-bottom: 30rpx;
		.question_left{
			// width: 570rpx;
			width: 100%;
			height: 100%;
			.title{
				width: 100%;
				height: 75rpx;
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
				display: flex;
				.text{
					font-size: 25rpx;
					line-height: 55rpx;
					color: #adadad;
				}
				.star{
					margin-left: 10rpx;
					height: 100%;
					width: 280rpx;
					image{
						width: 45rpx;
						height: 45rpx;
						margin-right: 10rpx;
					}
				}
			}
			.tags{
				height: 40rpx;
				display: inline-block;
				display: flex;
				justify-content: space-between;
				margin-top: 10rpx;
				.tags_left{
					display: flex;
					.text{
						font-size: 25rpx;
						line-height: 55rpx;
						color: #adadad;
					}
					.tag{
						width: auto;
						height: 100%;
						background-color: #b4b4b4;
						color: #ffffff;
						font-size: 25rpx;
						line-height: 40rpx;
						padding: 0 7rpx;
						margin-right: 20rpx;
					}
				}
				.tags_right{
					width: 100rpx;
					margin-top: -8rpx;
					/deep/.van-button--mini{
						padding: 0 20rpx;
					}
				}
			}
		}
	}
}
</style>