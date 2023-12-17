import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import { Tab, Tabs } from 'vant';
import 'vant/lib/index.css';
export function createApp() {
	const app = createSSRApp(App);
	app.use(Tab);
	app.use(Tabs);
	return {
		app,
	};
}
