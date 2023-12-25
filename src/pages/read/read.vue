<template>
	<view>
		<van-tabs v-model:active="active">
		  <van-tab title="全部文章"></van-tab>
		  <van-tab title="收藏最多"></van-tab>
		  <van-tab title="点赞最多"></van-tab>
		</van-tabs>
		<view class="article_container">
			<articleList></articleList>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import articleList from '@/components/articleList/articleList.vue'
	const active = ref(0);
</script>

<style lang="less" scoped>
.article_container{
	width: 92%;
	height: 100%;
	overflow-y: scroll;
	margin: 0 auto;
}
</style>
