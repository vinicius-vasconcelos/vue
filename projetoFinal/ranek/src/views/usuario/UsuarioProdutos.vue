<template>
   <section>
       <h2>Adicionar Produto</h2>
       <ProdutoAdicionar/>
       <h2>Seus Produtos</h2>

        <transition-group v-if="usuarioProdutos" name="list" tag="ul">
            <li v-for="(produto, index) in usuarioProdutos" :key="index">
                <ProdutoItem :produto="produto">
                    <p>{{produto.descricao}}</p>
                    <button @click="deletarProduto(produto.id)" class="deletar">Deletar</button>
                </ProdutoItem>
            </li>
        </transition-group>
   </section>
</template>

<script>
    import ProdutoAdicionar from '@/components/ProdutoAdicionar.vue'
    import ProdutoItem from '@/components/ProdutoItem.vue';
    import { mapState, mapActions } from 'vuex';
    import { api } from '@/services.js';

    export default {
        name: 'UsuarioProdutos',
        components: {
            ProdutoAdicionar,
            ProdutoItem
        },
        computed: {
            ...mapState(['login', 'usuario', 'usuarioProdutos'])
        },
        methods: {
            ...mapActions(['getUsuarioProdutos']),
            deletarProduto(id) {
                if(window.confirm('Deseja remover este produto ?'))
                    api.delete(`/produto/${id}`)
                        .then(() => this.getUsuarioProdutos())
                        .catch(err => console.log(`Erro ao deletar !!! [ERROR: ${err}]`))
            }
        },
        watch: {
            login() { this.getUsuarioProdutos() }
        },
        created() {
            if(this.login)
                this.getUsuarioProdutos()
        }
    }
</script>

<style scoped>
    h2 { margin-bottom: 20px; }

    .list-enter,
    .list-leave-to { opacity: 0; transform: translate3d(20px, 0, 0) }

    .list-enter-active,
    .list-leave-active { transition: all .3s }

    .deletar { 
        position: absolute;
        top: 0;
        right: 0;
        background: url('../../assets/remove.svg') no-repeat center center;
        width: 24px;
        height: 24px;
        text-indent: -140px;
        overflow: hidden;
        cursor: pointer;
        border: none;
    }
</style>