<template>
	<view class="info_container">
		<view class="info_image">
			<button class="avatar_btn" type="default" open-type="chooseAvatar" hover-class="none" @chooseavatar="getAvatar">
				<!-- <uni-file-picker
					class="imageUploader"
					v-model="imageValue" 
					fileMediatype="image" 
					:limit="1"
					:del-icon="false"
					disable-preview
					mode:grid
					:image-styles="imageStyle"
					@select="select" 
					@progress="progress" 
					@success="success" 
					@fail="fail" 
				/> -->
				<!-- <uni-icons type="person-filled" size="30"></uni-icons> -->
				<image class="avatar" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fd059958d-19f7-46ce-b55b-bbb1928504f3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707639345&t=b373c5d56eb7df5f441cc5c42fd26971" mode="aspectFill"></image>
			</button>
		</view>
		<view class="info_msg">
			<!-- <uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" /> -->
			<uni-forms ref="form" :modelValue="formData" :rules="rules">
				<uni-forms-item label="姓名" name="name">
					<uni-easyinput type="nickname" v-model="formData.name" placeholder="请输入姓名"/>
				</uni-forms-item>
				<uni-forms-item label="邮箱" name="email">
					<uni-easyinput class="input" v-model="formData.email" type="text" placeholder="请输入邮箱" />
				</uni-forms-item>
			</uni-forms>
			<button type="primary" @click="submit">修改</button>
		</view>
	</view>
</template>

<script setup>
import { onReady } from '@dcloudio/uni-app';
import { ref } from 'vue';
import useUserStore from '../../store/user.js'
import useGlobalProperties from '@/hooks/globalVar'
const globalProperties = useGlobalProperties()
const userStore = useUserStore()
const imageValue = ref([])
const imageStyle = ref({
	"height": 100,	// 边框高度
	"width": 100,	// 边框宽度
	"border":{ // 如果为 Boolean 值，可以控制边框显示与否
		"radius":"50%" 		// 边框圆角，支持百分比
	}
})

const getAvatar = (e)=>{
	console.log(e.detail.avatarUrl);
	// const userImg = e.detail.avatarUrl
	// imageValue.value.push(userImg)
}

const formData = ref({
		name: '',
		email: ''
	})
// 获取上传状态
const rules = ref({
	// 对name字段进行必填验证
	name: {
		// name 字段的校验规则
		rules:[
			// 校验 name 不能为空
			{
				required: true,
				errorMessage: '请填写姓名',
			},
			// 对name字段进行长度验证
			{
				minLength: 1,
				maxLength: 8,
				errorMessage: '长度在 {minLength} 到 {maxLength} 个字符',
			}
		],
	},
	email: {
		rules:[
			{
				required: true,
				errorMessage: '请填写邮箱',
			},
			{
				format:'email',
				errorMessage: '邮箱格式错误',
			}
		],
	}
})
const select = (e)=>{
	console.log('选择文件：',e)
}
// // 获取上传进度
const progress = (e)=>{
	console.log('上传进度：',e)
}

// // 上传成功
const success = (e)=>{
	console.log('上传成功')
}
// // 上传失败
const fail = (e)=>{
	console.log('上传失败：',e)
}
const form = ref(null)
onReady(()=>{
	
})
const submit=()=> {
	form.value.validate().then(res=>{
			console.log('表单数据信息：', res);
		}).catch(err =>{
			console.log('表单错误信息：', err);
		})
}

</script>

<style lang="less" scoped>
.info_container{
	width: 100%;
	height: 100vh;
	.info_image{
		width: 100%;
		height: 250rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		.avatar_btn{
			width: 150rpx;
			height: 150rpx;
			overflow: hidden;
			background: rgba(194, 194, 194, 0.5);
			padding: 0 0;
			.avatar{
				width: 150rpx;
				height: 150rpx;
			}
			&::after{
				// border:none;
			}
			/deep/.uni-file-picker {
				overflow: visible;
				flex: 0 1 auto;
				width: 180rpx;
				height: 165rpx;
			}
		}
		
	}
	.info_msg{
		width: 93%;
		margin: 0 auto;
		height: 250rpx;
	}
}
</style>
