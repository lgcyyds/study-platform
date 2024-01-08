<template>
	<view class="articleWrite_container">
		<view class="article_cover">
			<uni-file-picker 
				v-model="imageValue" 
				fileMediatype="image" 
				mode="grid" 
				:image-styles="uploaderStyle"
				@select="select" 
				@progress="progress" 
				@success="success" 
				@fail="fail" 
			/>
		</view>
		<view class="input_content">
			<uni-forms ref="form" :modelValue="formData" :rules="rules">
				<uni-forms-item label="文章标题" name="title">
					<uni-easyinput type="text" v-model="formData.title" placeholder="请输入标题"/>
				</uni-forms-item>
			</uni-forms>
			<myEditor></myEditor>
			<button @click="submit">发布</button>
		</view>
	</view>
</template>

<script setup>
import myEditor from '@/components/editor/editor.vue'
import { onLoad } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';


const imageValue = ref([])
const uploaderStyle = ref({
	"height": 100,	// 边框高度
	"width": 100,	// 边框宽度
})
// 获取上传状态
const select = (e)=>{
	console.log('选择文件：',e)
}
// 获取上传进度
const progress = (e)=>{
	console.log('上传进度：',e)
}
// 上传成功
const success = (e)=>{
	console.log('上传成功')
}
// 上传失败
const fail = (e)=>{
	console.log('上传失败：',e)
}


const formData = ref({
	title:''
})
const rules = ref({
	title: {
		rules: [{
				required: true,
				errorMessage: '请输入标题',
			},
			{
				minLength: 1,
				maxLength: 15,
				errorMessage: '标题长度在 {minLength} 到 {maxLength} 个字符',
			}
		]
	},
})
const form = ref(null)
const submit = ()=>{
	form.value.validate().then(res=>{
			console.log('表单数据信息：', res);
		}).catch(err =>{
			console.log('表单错误信息：', err);
		})
}
//初始化title
onLoad((options)=>{
	const {title} = options
	uni.setNavigationBarTitle({
		title:title
	})
})
</script>

<style lang="less" scoped>
.articleWrite_container{
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
	.article_cover{
		width: 100%;
		height: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		/deep/.uni-file-picker {
			    overflow: visible;
			    flex: 0 1 auto;
			    width: 180rpx;
			    height: 165rpx;
		}
	}
	.input_content{
		width: 93%;
		margin: 0 auto;
	}
}
</style>
