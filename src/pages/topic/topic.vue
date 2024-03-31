<template>
	<view class="topic">
		<view class="topic_control">
			<view class="control_btn" @click="changeSort">
				难度{{arrowClassName == 'topic_arrow_down'?'降':'升'}}序<van-icon :class="['topic_arrow',arrowClassName]" name="arrow-up" />
			</view>
		</view>
		<view class="topic_content">
			<questionList :qtList="questionsList" @nextPage='getQtList'></questionList>
		</view>
	</view>
</template>

<script setup>
import questionList from '@/components/questionList/questionList.vue';
import {getQuestion} from '../../api/index.js'
import { onLoad } from '@dcloudio/uni-app';
import { ref,onMounted } from 'vue';
let level = ref(1)//1:难度上升  0:难度下降
let optionList = ref([
	{ text: '全部题目', value: 0 },
	{ text: '难度升序', value: 1 },
	{ text: '难度降序', value: 2 }
]);
let arrowClassName = ref('')
let changeSort =()=>{
	questionsList.value = []//重置
	stopNext.value = false//重置
	page.value = 1//重置
	if(arrowClassName.value == 'topic_arrow_down'){
		//难度上升
		arrowClassName.value=''
		level.value = 1
		getQtList()
	}else{
		//难度下降
		arrowClassName.value='topic_arrow_down'
		level.value = 0
		getQtList()
	}
	
}

//获取所有题目
let page = ref(1);//页码
let tag = ref('')
let questionsList = ref([])
let stopNext = ref(false)
async function getQtList(){
	if(stopNext.value) return
	let params= {
		page:page.value,
		level:level.value,
		tag:tag.value
	}
	try{
		let dataMsg = await getQuestion(params)
		const {code,data} = dataMsg
		if(code == '0000'){
			questionsList.value.push(...data)
			console.log(questionsList.value);
			page.value++
			if(data.length =='0'){
				stopNext.value = true
			}
		}
	}catch(e){
		//TODO handle the exception
	}
}
onMounted(()=>{
	getQtList()
	console.log(111);
})
onLoad((options) => {
	const { id, title } = options;
	uni.setNavigationBarTitle({
		title: title
	});
	if(title !== '全部'){
		tag.value = title
	}
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
