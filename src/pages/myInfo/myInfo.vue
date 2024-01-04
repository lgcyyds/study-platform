<template>
	<view class="info_container">
		<view class="info_image">
			<uni-file-picker 
				class="imageUploader"
				v-model="imageValue" 
				fileMediatype="image" 
				:limit="1"
				:del-icon="false"
				disable-preview
				mode:grid
				:image-styles="imageStyle"
				@select="select" 
				@progress="progress" 
				@success="success" 
				@fail="fail" 
			/>
		</view>
		<view class="info_msg">
			
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const imageValue = ref([])
const imageStyle = ref({
	"height": 100,	// 边框高度
	"width": 100,	// 边框宽度
	"border":{ // 如果为 Boolean 值，可以控制边框显示与否
		"radius":"50%" 		// 边框圆角，支持百分比
	}
})
// 获取上传状态
const select = (e)=>{
	console.log('选择文件：',e)
}
// // 获取上传进度
const progress = (e)=>{
	console.log('上传进度：',e)
}

// // 上传成功
const success = (e)=>{
	console.log('上传成功')
}

// // 上传失败
const fail = (e)=>{
	console.log('上传失败：',e)
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
		/deep/.uni-file-picker {
			    overflow: visible;
			    flex: 1;
			    width: 100rpx;
			    height: 100rpx;
		}
	}
}
</style>
