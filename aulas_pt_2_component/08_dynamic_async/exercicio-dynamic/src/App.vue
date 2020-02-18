<template>
	<div id="app">
		<MainHeader :currentPage.sync="currentPage"/>
		<MainMain :currentPage="currentPage"/>
	</div>
</template>

<script>
	import MainHeader from './components/MainHeader.vue';
	import MainMain from './components/MainMain.vue';

	export default {
		name: 'App',
		data() {
			return {
				currentPage: 'InfoSobre',
			}
		},
		components: {
			MainHeader,
			MainMain
		},
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
		font-family: 'Quicksand', sans-serif;
		font-size: 16px;
		background-color: #FCFCFC;
	}

	h1 {color: #2C2C2C}
	
	.title {
		font-size: 2.5em;
        margin-bottom: 30px
	}
</style>
