<template>
    <section>
        <div v-if="produto" class="produto">
            <ul v-if="produto.fotos" class="fotos">
                <li v-for="(foto, index) in produto.fotos" :key="index">
                    <img :src="foto.src" :alt="foto.titulo">
                </li>
            </ul>

            <div class="info">
                <h1>{{produto.nome}}</h1>
                <p class="preco">{{produto.preco | numeroPreco}}</p>
                <p class="descricao">{{produto.descricao}}</p>

                <transition v-if="produto.vendido === 'false'" mode="out-in">
                    <button v-if="!finalizar" @click="finalizar = true" class="btn">Comprar</button>
                    <FinalizarCompra v-else :produto="produto" />
                </transition>
                <button v-else  class="btn" disabled>Vendido</button>
            </div>
        </div>

        <PaginaCarregando v-else/>
    </section>
</template>

<script>
    import FinalizarCompra from '@/components/FinalizarCompra.vue';
    import { api } from '@/services.js'

    export default {
        name: 'Produto',
        data() {
            return {
                produto: null,
                finalizar: false,
            }
        },
        props:['id'],
        components: {
            FinalizarCompra
        },
        methods: {
            getProduto() {
                api.get(`/produto/${this.id}`)
                    .then( resp => this.produto = resp.data)
            }
        },
        created() {
            this.getProduto()
        }
    }
</script>

<style scoped>
    .produto { 
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        max-width: 900px;
        padding: 60px 20px;
        margin: 0 auto; 
    }

    .preco {
        color: #E80;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 40px; 
    }

    .descricao { font-size: 1.2rem; }

    .btn { width: 200px; margin-top: 60px; border: none; }
</style>