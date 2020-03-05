<template>
    <form class="adicionar-produto">
        <input v-model="produto.nome" type="text" name="nome" id="nome" placeholder="Nome do produto...">
        <input v-model="produto.preco" type="number" name="preco" id="preco" placeholder="R$00,00">
        <input type="file" name="fotos" id="fotos" ref="fotos">
        <textarea v-model="produto.descricao" name="descricao" id="descricao" cols="30" rows="10" placeholder="Breve descrição..."></textarea>
       <input type="button" value="Adiciona Produto" @click.prevent="adicionarProduto" class="btn">
    </form>
</template>

<script>
    import { api } from '@/services.js';

    export default {
        name: 'ProdutoAdicionar',
        data() {
            return {
                produto: {
                    nome: '',
                    preco: '',
                    descricao: '',
                    fotos: null,
                }
            }
        },
        methods: {
            formatarProduto() {
                this.produto.usuario_id = this.$store.state.usuario.id
            },
            adicionarProduto() {
                this.formatarProduto();

                api.post('/produto', this.produto)
                    .then(() => this.$store.dispatch('getUsuarioProdutos'))
            }
        }
    }
</script>

<style scoped>
    .adicionar-produto {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        margin-bottom: 60px;
    }

</style>