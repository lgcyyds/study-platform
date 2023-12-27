<template>
	<view class="content">
		<!-- 轮播图 -->
		<view class="banner">
			<swiper indicator-dots indicator-active-color="#fff" autoplay circular interval="5000">
				<swiper-item v-for="(item, index) in banner" :key="index">
					<image class="banner-img" :src="item.url" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 点击签到按钮 -->
		<signBtn></signBtn>
		<view class="search_block" @click="goSearch">
			<image src="../../static/assets/search.png" mode=""></image>
			<view class="text">
				请输入搜索词...
			</view>
		</view>
		<view class="topic_title">
			题库入口
		</view>
		<view class="topic">
			<view class="topic-items" v-for="(item,index) in icon" :key="index" @click="goTopicPage(item)">
				<view class="topic-item">
					<image :src="`../../static/assets/homeIcon/${item.url}.png`" mode="aspectFill"></image>
					<view class="title">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import signBtn from '@/components/sign-btn/sign-btn.vue'
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
let banner = ref([
	{
		url: 'https://img1.baidu.com/it/u=507850114,3105556430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
	},
	{
		url: 'https://img0.baidu.com/it/u=1032314795,3433105171&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
	}
]);
let icon = ref([
	{url: 'all',type:1,title:'全部'},
	{url: 'javascript',type:2,title:'JavaScript'},
	{url: 'css',type:3,title:'css'},
	{url: 'html',type:4,title:'HTML'},
	{url: 'react',type:5,title:'React'},
	{url: 'vue',type:6,title:'Vue'},
	{url: 'computer',type:7,title:'计算机网络'},
	{url: 'nodejs',type:8,title:'NodeJS'},
	{url: 'typescript',type:9,title:'TypeScript'},
	{url: 'optimize',type:10,title:'性能优化'},
	{url: 'js_es6',type:11,title:'ES6'},
	{url: 'Wall',type:12,title:'工程化'},
	{url: 'git',type:13,title:'Git'},
])
let goTopicPage=(item)=>{
	uni.navigateTo({
		url:`/pages/topic/topic?id=${item.type}&title=${item.title}`
	})
}
let goSearch=()=>{
	uni.navigateTo({
		url:'/pages/search/search'
	})
}
onLoad(()=>{
	console.log(1212)
})
</script>

<style lang="less" scoped>
.content {
	.banner {
		.banner-img {
			width: 100%;
			height: 100%;
		}
	}
	.search_block{
		width: 80%;
		height: 70rpx;
		border: 4rpx solid #d8d8d8;
		border-radius: 5px;
		margin: 30rpx auto;
		display: flex;
		justify-content: center;
		border-radius: 15rpx;
		image{
			width: 50rpx;
			height: 50rpx;
			margin-top: 8rpx;
		}
		.text{
			height: 70rpx;
			line-height: 70rpx;
			color: #b8b8b8;
			
		}
	}
	.topic_title{
		padding-left:15rpx;
		padding-bottom:15rpx;
	}
	.topic{
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		border-collapse: collapse;
		border-top: 1rpx solid #dfdfdf;
		.topic-items{
			width: 100%;
			height: 180rpx;
			box-sizing: content-box;
			display: flex;
			justify-content: center;
			align-items: center;
			border-right: 1rpx solid #dfdfdf;
			border-bottom: 1rpx solid #dfdfdf;
			box-sizing: border-box;
			.topic-item{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 60rpx;
				height: 110rpx;
				image{
					width: 100%;
					height: 100%;
					margin-bottom: 20rpx;
				}
				.title{
					width: 100%;
					height: 30rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 25rpx;
					white-space: nowrap;
				}
			}
		}
	}
}
</style>
