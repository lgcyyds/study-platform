<template>
	<view class="search_box">
		<view class="search_block" >
			<image src="../../static/assets/search.png" mode=""></image>
			<view class="text">
				<input class="uni-input" type="text" v-model="keyword" placeholder="请输入搜索词..."/>
			</view>
			<view class="clear_Icon">
				<van-icon v-show="showClearIcon" @click="clearIcon" name="clear" size="1.2rem" color="#b8b8b8"/>
			</view>
		</view>
		<view class="search-content">
			<van-tabs :active="active" sticky offset-top='58'>
				<van-tab title="文章">
					<articleList></articleList>
				</van-tab>
				<van-tab title="题目">
					<questionList></questionList>
				</van-tab>
			</van-tabs>
		</view>
	</view>
</template>

<script setup>
import articleList from '@/components/articleList/articleList.vue'
import questionList from '@/components/questionList/questionList.vue'
import { computed, onMounted, ref } from 'vue';
	let active = ref(0)
	let keyword = ref('')
	let clearIcon=()=> {
            keyword.value = '';
        }
	const showClearIcon = computed(()=>{
		return keyword.value !==''
	})
	
	
	onMounted(()=>{
	})
</script>

<style lang="less" scoped>
.search_box{
	width: 100%;
	height: 100vh;
	overflow: hidden;
	.search_block{
		width: 90%;
		height: 70rpx;
		border: 4rpx solid #d8d8d8;
		border-radius: 5px;
		margin: 30rpx auto 0;
		display: flex;
		justify-content: center;
		border-radius: 15rpx;
		image{
			width: 50rpx;
			height: 50rpx;
			margin-top: 8rpx;
			margin-left: 20rpx;
		}
		.text{
			flex: 1;
			margin-left: 30rpx;
			height: 70rpx;
			line-height: 70rpx;
			input{
				height: 100%;
				&::placeholder {
					color: #b8b8b8;
				}
			}
		}
		.clear_Icon{
			margin-top: 10rpx;
			margin-right: 10rpx;
			width: 50rpx;
			height: 50rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.search-content{
		width: 90%;
		height: 1112rpx;
		overflow-y: scroll;
		margin: 0 auto;
	}
}
/deep/ .van-tabs__line {
    background: #20b427;
	
}
</style>
