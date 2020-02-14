const vm = new Vue({
    el: '#app',
    data: {
        produtos: [],
        produto: 'false'
    },
    filters: {
        maskPrice(valor) { return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
    },
    methods: {
        fetchProdutos() {
            fetch('./api/produtos.json')
                .then(r => r.json())
                .then(prods => this.produtos = prods);
        },
        fetchProduto(id) {
            fetch(`./api/produtos/${id}/dados.json`)
                .then(r => r.json())
                .then(prod => this.produto = prod)
        }
    },
    created() {
        this.fetchProdutos();
    }
})