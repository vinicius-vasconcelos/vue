<template>
    <div>
		<div v-if="loading">
			<PageLoading/>
		</div>
		<transition>
			<div v-if="api" class="conteudo">
				<div>
					<h1>Sobre a {{api.titulo}}</h1>
					<p>{{api.descricao}}</p>

					<router-link to="/cursos" tag="button" class="btn-cursos">Cursos</router-link>

					<div>
						<h2>Avaliações</h2>
						<ul class="lista-avaliacao">
							<li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
								<p><strong class="avaliacao-nome">{{avaliacao.nome}}</strong></p>
								<p>{{avaliacao.descricao}}</p>
							</li>
						</ul>
					</div>
				</div>

				<img src="@/assets/aprender.png" alt="Aprenda Web Designer">

			</div>
		</transition>
    </div>
</template>

<script>

	import fetchData from '@/mixins/fetchData.js'

	export default {
		name: 'Home',
		mixins: [fetchData],
		created() {
			this.fetchData('/home');
		}
	}
</script>

<style >
	.btn-cursos {
		border: none;
		background: #4B8;
		border-radius: 4px;
		color: #FFF;
		cursor: pointer;
		padding: 15px 40px;
		font-size: 1rem;
		margin-top: 10px;
		margin-bottom: 40px;
		box-shadow: 0 4px 2px rgba(0, 0, 0, .1);
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}

	.avaliacao-nome { font-size: 1.2rem }
	.lista-avaliacao li { margin-bottom: 40px; }
</style>
