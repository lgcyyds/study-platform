<template>
	<view class="container">
		<view class="article" v-for="item in 6" @click="goArticle">
			<image class="article_img" src="https://img1.baidu.com/it/u=507850114,3105556430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" mode="aspectFill"></image>
			<view class="article_title">标题不能超过15个字</view>
			<view class="article_content">内容两行显示，第二行满了用省略号表示,内容两行显示，第二行满了用省略号表示,内容两行显示，第二行满了用省略号表示</view>
			<view class="article_time">发布时间：2023-11-03</view>
		</view>
	</view>
</template>

<script setup>
	let goArticle = ()=>{
		uni.navigateTo({
			url:'/pages/article/article'
		})
	}
</script>

<style lang="less">
	.container{
		width: 100%;
		height: 100%;
		.article{
			width: 100%;
			height: 470rpx;
			border-bottom: solid 1px #c5c5c5;
			margin: 35rpx 0;
			.article_img{
				width: 100%;
				height: 225rpx;
				border-radius: 5px;
			}
			.article_title{
				margin: 20rpx 0;
				padding-left: 20rpx;
				font-weight: 600;
				font-size: 33rpx;
				white-space: nowrap;
				overflow: hidden;
			}
			.article_content{
				height: 80rpx;
				width: 100%;
				font-size: 28rpx;
				color: #8c8c8c;
				line-height: 40rpx;
				display: -webkit-box;
				overflow: hidden;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
			.article_time{
				width: 100%;
				font-size: 10rpx;
				color: #8c8c8c;
				margin: 15rpx 0;
				text-align: right;
			}
		}
	}
</style>