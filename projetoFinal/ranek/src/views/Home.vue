<template>
	<section>
		<h1> Compre ou venda</h1>
		<ProdutosBuscar/>
		<ProdutosLista/>
	</section>
</template>

<script>
	import ProdutosBuscar from '@/components/ProdutosBuscar.vue';
	import ProdutosLista from '@/components/ProdutosLista.vue';

	export default {
		name: 'Home',
		components: {
			ProdutosBuscar,
			ProdutosLista,
		}
	}
</script>

<style scoped>

	h1 {
		color: #87F;
		margin-top: 40px;
		font-size: 2rem;
		text-align: center;
	}
</style>
