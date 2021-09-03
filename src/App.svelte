<script lang="ts">

	import Login from "./popups/Login.svelte"

	export let thingyTitle : string
	type CurrentPopup = 'login' | undefined
	let currentPopup : CurrentPopup
	console.log('fosfd')
	function setPopup(type : CurrentPopup) {
		return function() {
			currentPopup = type
		}
	}
</script>

<main>
	<h1>{thingyTitle}</h1>
	<p>
		<button on:click={setPopup('login')}>Login</button>
		or view
		<a href="https://svelte.dev/tutorial">things</a>.
		<br>// searchbar?
		{#if currentPopup === 'login'}
			<Login on:exit={setPopup(undefined)}/>
		{/if}
	</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>