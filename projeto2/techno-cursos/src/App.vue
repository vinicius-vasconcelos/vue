<template>
	<div id="app">
		<TheHeader/>
		<router-view class="container"></router-view>
	</div>
</template>

<script>
	import TheHeader from '@/components/TheHeader.vue'
	
	export default {
		components: {
			TheHeader
		}	
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body {
		width: 100%;
		height: 100%;
	}

	body {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		color: #234;
	}

	ul { list-style: none; }

	a { 
		font-weight: bold;
		text-decoration: none;
		color: #234;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px
	}
</style>
