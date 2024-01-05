<template>
	<view class="my_article">
		<view class="article_container">
			<articleList></articleList>
		</view>
		<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction" @trigger="trigger" @fabClick="fabClick" />
	</view>
</template>

<script setup>
import articleList from '@/components/articleList/articleList.vue';
import { ref } from 'vue';

const pattern = ref({
	color: '#7A7E83',
	backgroundColor: '#fff',
	selectedColor: '#007AFF',
	buttonColor: '#007AFF',
	iconColor: '#fff'
});
//此配置是修改uni-ui源码的
const content = ref([
	{
		icon: 'plus',
		text: '写文章',
		active: false
	},
	{
		icon: 'compose',
		text: '编辑',
		active: false
	},
	{
		icon: 'trash',
		text: '删除',
		active: false
	}
]);
const horizontal = ref('right')
const vertical = ref('bottom')
const direction = ref('vertical')
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
