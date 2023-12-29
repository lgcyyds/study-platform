<template>
	<view class="topic">
		<van-dropdown-menu active-color="#20b427">
			<van-dropdown-item :value="value1" :options="optionList" />
		</van-dropdown-menu>
		<view class="topic_content">
			<questionList></questionList>
		</view>
	</view>
</template>

<script setup>
import questionList from '@/components/questionList/questionList.vue';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
let value1 = ref(0);
let optionList = ref([
	{ text: '全部题目', value: 0 },
	{ text: '难度升序', value: 1 },
	{ text: '难度降序', value: 2 }
]);

onLoad((options) => {
	const { id, title } = options;
	uni.setNavigationBarTitle({
		title: title
	});
});
</script>

<style lang="less" scoped>
.topic {
	width: 93%;
	height: 100vh;
	overflow: hidden;
	margin: 0 auto;
	.topic_content {
		width: 100%;
		height: 1120rpx;
		overflow-y: scroll;
	}
}
// /deep/.van-dropdown-menu__bar {
// 	box-shadow: none;
// }
</style>
