<template>
	<div id="app">
		<!--Destrói e recria componente toda vez que o estado muda -->
		<component :is="componenteAtivo"></component>

		<button @click="componenteAtivo='AulaDownload'">Download</button>
		<button @click="componenteAtivo='AulaDescricao'">Descricao</button>

		<keep-alive>
			<!--Apenas muda o v-show do component -->
			<component :is="componenteAtivo"></component>
		</keep-alive>
	</div>
</template>

<script>
	import AulaDescricao from './components/AulaDescricao.vue';
	import AulaDownload from './components/AulaDownload.vue';

	export default {
		name: 'App',
		components: {
			AulaDescricao,
			AulaDownload
		},
		data() {
			return {
				componenteAtivo: 'AulaDescricao'
			}
		}
	}
</script>

<style>
</style>
