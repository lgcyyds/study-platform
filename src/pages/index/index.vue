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
		<view class="block">
			<view class="search_block">
				<view class="search_btn">
					搜索
				</view>
			</view>
			<view class="article_block">
				<view class="article_btn">
					阅读
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
onLoad(() => {});
</script>

<style lang="less">
.content {
	.banner {
		.banner-img {
			width: 100%;
			height: 100%;
		}
	}
	.block{
		width: 92%;
		height: 150rpx;
		margin: 40rpx auto;
		display: flex;
		justify-content: space-between;
		.search_block,
		.article_block{
			width: 46%;
			height: 100%;
			border: black 1rpx solid;
			border-radius: 15rpx;
			position: relative;
			.search_btn,
			.article_btn{
				position: absolute;
				bottom: 20rpx;
				right: 20rpx;
				width: 100rpx;
				height: 30rpx;
				border: black 1rpx solid;
				border-radius: 20px;
				font-size: 20rpx;
				line-height: 25rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
}
</style>
