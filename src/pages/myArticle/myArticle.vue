<template>
	<view class="my_article">
		<view class="article_container">
			<articleList :btnType='btnType'  :articleMsgList="articleDataList" @editArticle='editArticle' @delArticle='delArticle'></articleList>
		</view>
		<uni-fab ref="fab" :pattern="pattern" :content="content" horizontal="right" vertical="bottom" direction="vertical" @trigger="trigger" @fabClick="fabClick"/>
	</view>
</template>

<script setup>
import articleList from '@/components/articleList/articleList.vue';
import { computed, onMounted, ref, toRaw } from 'vue';
import {getArticle} from '../../api/index.js'
import useUserStore from '../../store/user.js'
const userStore = useUserStore()
let userId = computed(()=>{
	return userStore.userInfo.id
})
const pattern = ref({
	color: '#7A7E83',
	backgroundColor: '#fff',
	selectedColor: '#5b5e62',
	buttonColor: '#007AFF',
	iconColor: '#fff'
});
//此配置是修改uni-ui源码的
const content = ref([
	{
		icon: 'plus',
		selectedIcon:'plus',
		text: '写文章',
		active: false
	},
	{
		icon: 'tune',
		selectedIcon:'tune-filled',
		text: '编辑',
		active: false
	},
	{
		icon: 'trash',
		selectedIcon:'trash-filled',
		text: '删除',
		active: false
	}
]);

const btnType = ref('')
const trigger = (e)=>{
	let isBtnActive = toRaw(e.item).active//修改前的
	//重置所有按钮
	content.value.forEach(item =>{
		item.active = false
	})
	content.value[e.index].active = !isBtnActive
	if(e.index == 0){
		//写文章
		btnType.value = ''
		uni.navigateTo({
			url:`/pages/articleWritePage/articleWritePage?title=文章编写`
		})
	}else if(e.index == 1){
		//编辑
		btnType.value = !isBtnActive?'primary':''
	}else{
		//删除
		btnType.value = !isBtnActive?'warn':''
	}
}
//点击悬浮按钮重置按钮样式和取消删除编辑按钮
const fabClick = ()=>{
	content.value.forEach(item =>{
		item.active = false
	})
	btnType.value = ''
}

let articleDataList = ref([])

async function getArticleList(){
	let params = {
		id:userId.value
	}
	try{
		let dataMsg = await getArticle(params)
		const {code, data} = dataMsg
		if(code == '0000'){
			articleDataList.value = data
		}
	}catch(e){
		//TODO handle the exception
	}
}

const delArticle = (id)=>{
	console.log(id);
}
const editArticle = (id)=>{
	uni.navigateTo({
	  url: `/pages/articleWritePage/articleWritePage?id=${id}&&title=编辑文章`,
	});
}

onMounted(()=>{
	getArticleList()
})
</script>

<style lang="less" scoped>
.my_article {
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
	.article_container {
		width: 93%;
		height: 100%;
		margin: 0 auto;
	}
}
</style>
