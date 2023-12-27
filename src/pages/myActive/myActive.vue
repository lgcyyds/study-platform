<template>
	<view>
		
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { onMounted } from 'vue';
	onLoad((options)=>{
		const {title} = options
		uni.setNavigationBarTitle({
			title:title
		})
	})
</script>

<style lang="less">

</style>
