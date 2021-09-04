<script lang="ts">
	import { fade } from 'svelte/transition'
	export let visible = true
    import { createEventDispatcher } from 'svelte'
    // export let opacity : number
    // opacity = 0
    const dispatch = createEventDispatcher()
    // let container : HTMLDivElement
    function closeWindow(e : Event) { 
        // container.style.opacity = opacity.toString()
        // container.style.pointerEvents = 'none'
        if (e.target !== this) return;
        dispatch('exit') 
    }
</script>

{#if visible}
    <div class="main" on:click={closeWindow} transition:fade>
        <div class="login-page">
            <div class="form">
            <form class="login-form">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>login</button>
                <p class="message">Not registered? <a href="google.com">Create an account</a></p>
            </form>
            </div>
        </div>
    </div>    
{/if}

<style>
    .main { 
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        border-radius: 1rem;
        background: rgba(0,0,0,0.25);
        /* border: 2px solid blue; */
    }
    @import url(https://fonts.googleapis.com/css?family=Roboto:300);

    .login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
    }
    .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    /* padding: 45px; */
    padding: 45px 9px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
    .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    }
    .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    }
    .form button:hover,.form button:active,.form button:focus {
    background: #43A047;
    }
    .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
    }
    .form .message a {
    color: #4CAF50;
    text-decoration: none;
    }
    /* .login-form { 
        border: 2px solid red;
    } */
    
</style>