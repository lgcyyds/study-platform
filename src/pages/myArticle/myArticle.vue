<template>
	<view class="my_article">
		<view class="article_container">
			<articleList :btnType='btnType'></articleList>
		</view>
		<uni-fab ref="fab" :pattern="pattern" :content="content" horizontal="right" vertical="bottom" direction="vertical" @trigger="trigger"/>
	</view>
</template>

<script setup>
import articleList from '@/components/articleList/articleList.vue';
import { ref, toRaw } from 'vue';

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
		selectedIcon:'plus-filled',
		text: '写文章',
		active: false
	},
	{
		icon: 'compose',
		selectedIcon:'compose-filled',
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
	}else if(e.index == 1){
		//编辑
		btnType.value = !isBtnActive?'primary':''
	}else{
		//删除
		btnType.value = !isBtnActive?'warn':''
	}
}
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
