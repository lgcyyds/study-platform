<template>
	<view class="info_container">
		<view class="info_image">
			<van-uploader :file-list="fileList" @after-read="afterRead" preview-size="180rpx" accept="image" max-count="1"/>
		</view>
		<view class="info_msg">
			
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
let fileList = ref([])
let afterRead = (event)=>{
	console.log(event.detail.file);
	fileList.value.push({
		url:event.detail.file.url
	})
	console.log(fileList.value);
}
</script>

<style lang="less" scoped>
.info_container{
	width: 100%;
	height: 100vh;
	.info_image{
		width: 100%;
		height: 250rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		/deep/.van-uploader__upload{
			border-radius: 50%;
		}
	}
}
</style>
