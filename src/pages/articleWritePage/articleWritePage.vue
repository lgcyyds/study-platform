<template>
	<view class="articleWrite_container">
		<view class="article_cover">
			<uni-file-picker 
				v-model="imageValue" 
				fileMediatype="image" 
				mode="grid" 
				limit="1"
				:image-styles="uploaderStyle"
				@select="select" 
			/>
		</view>
		<view class="input_content">	
			<uni-easyinput type="text" v-model="articleInfo.articleTitle" placeholder="请输入文章标题" maxlength="15"/>
			<view class="uni-textarea">
				<myEditor :arrticleContent='articleInfo.arrticleContent' v-if="articleInfo.arrticleContent"></myEditor>
			</view>
			<button class="sub-btn" type="primary" @click="submit">发布</button>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
import myEditor from '@/components/myEditor/myEditor.vue'
import {getArticle} from '../../api/index.js'
const imageValue = ref([])
const uploaderStyle = ref({
	"height": 100,	// 边框高度
	"width": 100,	// 边框宽度
})
// 获取上传状态
const select = (e)=>{
	console.log('选择文件：',e)
}

const articleTitle = ref('')
const submit = ()=>{
	uni.navigateBack({
		delta: 1
	});
}
let articleInfo = ref({
	cover:'',
	articleTitle:'',
	arrticleContent:''
})
async function getArticleContent(){
	let params = {
		id:articleId.value
	}
	try{
		let dataMsg = await getArticle(params)
		const {code,data} = dataMsg
		if(code =='0000'){
			articleInfo.value.cover = data[0].cover
			articleInfo.value.articleTitle = data[0].title
			articleInfo.value.arrticleContent = data[0].content
		}
	}catch(e){
		//TODO handle the exception
		console.log(e);
	}
}

let articleId = ref(null)
//初始化title
onLoad((options)=>{
	const {title , id} = options
	articleId.value = id
	getArticleContent()
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
		margin: 20rpx auto;
		.sub-btn{
			width: 100%;
		}
	}
}
</style>
