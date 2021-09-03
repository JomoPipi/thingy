import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		thingyTitle: 'thingy'
	}
});

export default app;