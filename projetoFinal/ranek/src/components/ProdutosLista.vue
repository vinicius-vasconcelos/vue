<template>
    <section class="produtos-container">
        <transition mode="out-in">
            <div v-if="produtos && produtos.length" class="produtos" key="produtos">
                <div v-for="produto in produtos" :key="produto.id" class="produto">
                    <router-link :to="{name: 'Produto', params: {id: produto.id}}">
                        <img v-if="produto.foto" :src="produto.foto[0].src" :alt="produto.foto[0].titulo">
                        <p class="preco">{{produto.preco | numeroPreco}}</p>
                        <h2 class="titulo">{{produto.nome}}</h2>
                        <p>{{produto.descricao}}</p>
                    </router-link>
                </div>
                <ProdutosPaginar 
                    :produtosTotal="produtosTotal"
                    :produtosPorPagina="produtosPorPagina"
                />
            </div>
            <div v-else-if="produtos && produtos.length === 0" key="semResultados">
                <p class="sem-resultados">Busca sem resultados, procure outro termo</p>
            </div>
            <PaginaCarregando v-else key="carregando"/>
        </transition>
    </section>
</template>

<script>
    import { api } from '@/services.js'
    import { serialize } from '@/helpers.js'
    import ProdutosPaginar from '@/components/ProdutosPaginar.vue'

    export default {
        name: 'ProdutosLista',
        data() {
            return {
                produtos: null,
                produtosPorPagina: 4,
                produtosTotal: 0,
            }
        },
        components: {
            ProdutosPaginar
        },
        computed: {
            url() { 
                return `/produto?_limit=${this.produtosPorPagina}${serialize(this.$route.query)}`
            }
        },
        methods: {
            getProdutos() {
                this.produtos = null;

                window.setTimeout(() => {
                     api.get(this.url)
                    .then(resp => { 
                        this.produtosTotal = Number(resp.headers['x-total-count']);
                        this.produtos = resp.data
                    })
                }, 2000)

               
            }
        },
        watch: {
            url() { 
                this.getProdutos() 
            }
        },
        created() {
            this.getProdutos()
        }
    }
</script>

<style scoped>

    .produtos-container {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    .produtos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;
        margin: 30px;
    }

    .produto {
        box-shadow: 0 4px 8px rgba(30, 60, 90, .1);
        padding: 10px;
        background: #FFF;
        border-radius: 4px;
        transition: all .2s;
    }

    .produto:hover,
    .produto:focus {
        box-shadow: 0 6px 12px rgba(30, 60, 90, .2);
        transform: scale(1.1);
        position: relative;
        z-index: 1;
    }

    .produto img { border-radius: 4px; margin-bottom: 20px; }

    .titulo { margin-bottom: 10px; }

    .preco { color: #E80; font-weight: bold; }

    .sem-resultados { text-align: center; }

</style>