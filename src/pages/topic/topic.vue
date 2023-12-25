<template>
	<view class="topic">
		<van-dropdown-menu>
		  <van-dropdown-item v-model="value1" :options="option" />
		</van-dropdown-menu>
		<view class="topic_content">
			<questionList></questionList>
		</view>
	</view>
</template>

<script setup>
	import questionList from '@/components/questionList/questionList.vue'
	import { ref } from 'vue';
	let value1 = ref(0)
	let option = ref([
        { text: '全部题目', value: 0 },
        { text: '难度升序', value: 1 },
        { text: '难度降序', value: 2 },
      ])
</script>

<style lang="less" scoped>
.topic{
	width: 90%;
	height: 100%;
	margin: 0 auto;
	.topic_content{
		width: 100%;
		height: 1150rpx;
		overflow-y: scroll;
	}
}
/deep/.van-dropdown-menu__bar{
	box-shadow: none;
}
</style>
