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
}
</style>
