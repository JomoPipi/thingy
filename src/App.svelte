<script lang="ts">
	import { CONSTANTS } from "./constants"
	import Login from "./popups/Login.svelte"

	import { initializeApp } from 'firebase/app';
	import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
	// Follow this pattern to import other Firebase services
	// import { } from 'firebase/<service>';


	const firebaseConfig = {
		apiKey: "AIzaSyAKZ6X183yKdX9sBxbyd0EymvadU-jhYzA",
		authDomain: "nunithingy.firebaseapp.com",
		projectId: "nunithingy",
		storageBucket: "nunithingy.appspot.com",
		messagingSenderId: "506935203178",
		appId: "1:506935203178:web:497417a5737b2f1ca78113",
		measurementId: "G-DVRG6NZQS3"
	};

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	console.log('db =',db)

	async function getCities(db) {
		const citiesCol = collection(db, 'cities');
		// const citySnapshot = await getDocs(citiesCol);
		// const cityList = citySnapshot.docs.map(doc => doc.data());
		console.log('cc =', citiesCol)
		// console.log('cs =',citySnapshot)
		// console.log('cl =',cityList)
		// return cityList;
	}
	console.log('yooo')
	getCities(db)
	
	import { GoogleAuthProvider } from "firebase/auth";

	const provider = new GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
	
	import { getAuth, signInWithRedirect } from "firebase/auth";

	const auth = getAuth();
	signInWithRedirect(auth, provider);
	// continue here:
	// /https://firebase.google.com/docs/auth/web/google-signin#web-version-9
	
	
	
	
	export let thingyTitle : string

	type CurrentPopup = 'login' | undefined
	let currentPopup : CurrentPopup
	console.log('fosfd', CONSTANTS.noop())
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