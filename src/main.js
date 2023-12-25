import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import { Tab, Tabs ,Icon,Button,Tag,DropdownMenu, DropdownItem } from 'vant';
import 'vant/lib/index.css';
export function createApp() {
	const app = createSSRApp(App);
	app.use(Tab);
	app.use(Tabs);
	app.use(Icon);
	app.use(Button);
	app.use(Tag );
	app.use(DropdownMenu);
	app.use(DropdownItem);
	return {
		app,
	};
}
