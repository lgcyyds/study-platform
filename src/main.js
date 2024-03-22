import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import {
	createPinia
} from 'pinia'
import {
	baseURL
} from './api/baseUrl.js'
const pinia = createPinia()
export function createApp() {
	const app = createSSRApp(App);
	app.use(pinia);
	app.config.globalProperties.$baseURL = baseURL
	return {
		app,
	};
}