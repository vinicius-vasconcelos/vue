<template>
	<div id="app">
		<ModalPrinipal>
			<template v-slot:headerModal> <p>header slot</p></template>
			<template #mainModal="{user}"> <p>{{user.nome}}</p></template>
			<template #footerModal> <p>footer slot</p></template>
		</ModalPrinipal>
	</div>
</template>

<script>
	import ModalPrinipal from './components/ModalPrincipal.vue'

	export default {
		name: 'App',
		components: {
			ModalPrinipal
		}
	}
</script>

<style>
</style>
