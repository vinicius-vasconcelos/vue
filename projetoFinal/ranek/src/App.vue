<template>
	<div id="app">
		<TheHeader/>
		<main><router-view></router-view></main>
		<TheFooter/>
	</div>
</template>

<script>
	import TheHeader from '@/components/TheHeader.vue'
	import	TheFooter from '@/components/TheFooter.vue'

	export default {
		name: 'App',
		components: {
			TheHeader,
			TheFooter,
		}
	}
</script>

<style>
	* { box-sizing: border-box; }

	body, ul, li, h1, h2, p { margin: 0; padding: 0; }

	img { max-width: 100%; display: block; }

	ul { list-style: none; }

	body {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		color: #345;
		background: url('./assets/pattern.svg') repeat top;
	}

	a { color: #345; text-decoration: none; }

	.btn {
		display: block;
		padding: 10px 30px;
		background: #87F;
		border-radius: 4px;
		color: #FFF;
		text-align: center;
		font-size: 1rem;
		box-shadow: 0 4px 8px rgba(30, 60, 90, .2);
		transition: all .3s;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		cursor: pointer;
	}

	.btn:hover,
	.btn:focus { background: #65D; transform: scale(1.1); }

	#app { 
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main { flex: 1; }

	input,
	textarea {
		border-radius: 4px;
		border: 1px solid #FFF;
		padding: 15px;
		box-shadow: 0 4px 8px rgba(30, 60, 90, .1);
		transition: all .3s;
		font-size: 1rem;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		margin-bottom: 15px
	}

	input:hover,
	input:focus,
	textarea:hover,
	textarea:focus {
		outline: none;
		box-shadow: 0 6px 12px rgba(30, 60, 90, .2);
		border-color: #87F;
	}

</style>
