<template>
	<scroll-view scroll-y="true" show-scrollbar="false" :scroll-into-view="location" @scroll="locationChange" scroll-with-animation="true">
		<view class="article-container">
			<view class="article-info" id="article">
				<view class="article-title">
					不能超过32个字不能超过32个字不能超过32个字不能超过32个字
				</view>
				<view class="article-author-info">
					<view class="article-author-items">
						<view class="article-author-img">
							<image src="../../static/logo.png" mode="aspectFill"></image>
						</view>
						<view class="article-author-content">
							<view class="article-author-text">
								<view class="article-author-title">
									用户名
								</view>
								<view class="article-author-action">
									<image class="sign-icon" src="../../static/assets/signup1.png" mode="aspectFill"></image>
									<view class="day">
										签到23天
									</view>
									<image class="view-icon" src="../../static/assets/view.png" mode="aspectFill"></image>
									<view class="day">
										23
									</view>
								</view>
							</view>
						</view>				
					</view>
				</view>
			</view>
			<!-- 文章主体 -->
			<view class="article-body">
			  <rich-text :nodes="valueHtml"></rich-text>
			</view>
			<!-- 日期和标签 -->
			<view class="article-other">
				<view class="article-date">
					—— 发表于2000年12月12日 12:12 ——
				</view>
			</view>
			<!-- 全部评论 -->
			<view class="article-comment" id="allComment">
				<commentList/>
			</view>
			<!-- 评论组件 -->
		</view>
	</scroll-view>
	<comment @toComment="goComment" @toArticle="goArticle"></comment>
	
</template>

<script setup>
import comment from '@/components/comment/comment.vue'
import commentList from '@/components/commentList/commentList.vue'
import { onBeforeUnmount, ref, onMounted, getCurrentInstance } from 'vue'
    // 内容 HTML
    const valueHtml = ref('<h4>测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据</h4>')
	//markdown内容（需要将markdown转html后在richtext展示）
	const valueMd = ref('')
	const location = ref('')
	let goComment = ()=>{
		location.value = 'allComment'
	}
	let goArticle=()=>{
		location.value = 'article'
	}
	// 获取组件实例
	const instance = getCurrentInstance();
	const query = uni.createSelectorQuery().in(instance);
	let locationChange = (e)=>{
		query.select("#allComment")
		    .boundingClientRect((rect) => {
				if(rect.top>=250){
					//显示移动到评论
				}
		    })
		    .exec();
		// console.log(e.detail);//滚动位置
	}
</script>

<style lang="less" scoped>
.article-container{
	width: 93%;
	height: 100vh;
	margin: 0 auto;
	.article-info{
		width: 100%;
		max-height: 280rpx;
		.article-title{
			width: 100%;
			font-size: 43rpx;
			font-weight: 600;
		}
		.article-author-info{
			.article-author-items{
				width: 100%;
				height: 120rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 10rpx 0;
				position: relative;
				.article-author-img{
					width: 90rpx;
					height: 90rpx;
					margin: 0 25rpx 0 0;
					border-radius: 50%;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.article-author-content{
					height: 100%;
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					.article-author-text{
						width: 100%;
						height: 90rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.article-author-title{
							font-size: 32rpx;
							font-weight: 600;
						}
						.article-author-action{
							height: 40rpx;
							width: 420rpx;
							line-height: 40rpx;
							color: #8c8c8c;
							font-size: 25rpx;
							display: flex;
							align-items: center;
							.sign-icon{
								width: 35rpx;
								height: 35rpx;
								margin-right: 10rpx;
								margin-bottom: 5rpx;
							}
							.view-icon{
								width: 35rpx;
								height: 35rpx;
								margin-left: 30rpx;
								margin-right: 10rpx;
							}
						}
					}
					
				}
			}
		}
	}
	.article-other{
		width: 100%;
		display: flex;
		flex-direction: column;
		.article-date{
			width: 100%;
			display: flex;
			justify-content: center;
			align-content: center;
			font-size: 25rpx;
			color: #8c8c8c;
			margin: 20rpx 0;
		}
	}
	.article-comment{
		padding-bottom: 120rpx;
	}
}
</style>
