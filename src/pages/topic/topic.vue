<template>
	<view class="topic">
		<view class="topic_control">
			<view class="control_btn" @click="changeSort">
				难度{{arrowClassName == 'topic_arrow_down'?'降':'升'}}序<van-icon :class="['topic_arrow',arrowClassName]" name="arrow-up" />
			</view>
		</view>
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
let arrowClassName = ref('')
let changeSort =()=>{
	if(arrowClassName.value == 'topic_arrow_down'){
		arrowClassName.value=''
	}else{
		arrowClassName.value='topic_arrow_down'
	}
	
}

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
	.topic_control{
		width: 100%;
		height: 70rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		.control_btn{
			font-size: 30rpx;
			line-height: 70rpx;
			.topic_arrow{
				transition: all .5s;
			}
			.topic_arrow_down{
				transform: rotate(180deg);
			}
		}
	}
	.topic_content {
		width: 100%;
		height: calc(100vh - 100rpx);
		overflow-y: scroll;
	}
}
// /deep/.van-dropdown-menu__bar {
// 	box-shadow: none;
// }
</style>
