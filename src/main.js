import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import { Tab, Tabs ,Icon} from 'vant';
import 'vant/lib/index.css';
export function createApp() {
	const app = createSSRApp(App);
	app.use(Tab);
	app.use(Tabs);
	app.use(Icon);
	return {
		app,
	};
}
