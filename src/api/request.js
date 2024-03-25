import axios from "axios";
import axiosAdapterUniapp from 'axios-adapter-uniapp'
import {baseURL} from './baseUrl.js'
//1、利用axios对象的方法create,去创建一个axios实例
// 2、request就是axios，只不过稍微配置一下
const requests = axios.create({
    baseURL:baseURL,
	adapter: axiosAdapterUniapp,
    timeout:5000
})
// 请求拦截器：在请求之前，请求拦截器可以检测到，在发出去之前做一些事
requests.interceptors.request.use((config)=>{
    return config;
});
// 响应拦截器
requests.interceptors.response.use((res)=>{
    return res.data;
    },(error)=>{
		console.log(error);
        // 失败的回调函数
        return Promise.reject(new Error('faile'));
})
export default requests
