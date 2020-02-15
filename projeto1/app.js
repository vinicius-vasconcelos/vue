const vm = new Vue({
    el: '#app',
    data: {
        produtos: [],
        produto: false,
        carrinho: [],
        carrinhoAtivo: false,
        mensagemAlerta: 'Item adicionado',
        alertaAtivo: false,
    },
    filters: { maskPrice(valor) { return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) } },
    created() {
        this.fetchProdutos();
        this.checkLocalStorage();
        this.router();
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
        },
        openModal(id) {
            this.fetchProduto(id);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        closeModal({ target, currentTarget }) { if (target === currentTarget) this.produto = false; },
        closeLitlleCar({ target, currentTarget }) { if (target === currentTarget) this.carrinhoAtivo = false; },
        addItem() {
            this.produto.estoque--;
            const { id, nome, preco } = this.produto;
            this.carrinho.push({ id, nome, preco });
            this.alerta(`${nome} foi adicionado ao carrinho.`)
        },
        removeItem(index) { this.carrinho.splice(index, 1) },
        checkLocalStorage() { if (window.localStorage.carrinho) this.carrinho = JSON.parse(window.localStorage.carrinho) },
        alerta(msg) {
            this.mensagemAlerta = msg;
            this.alertaAtivo = true;
            setTimeout(() => { this.alertaAtivo = false }, 1500)
        },
        router() {
            const hash = document.location.hash;

            if (hash)
                this.fetchProduto(hash.replace('#', ''))
        },
        stockComp() {
            let itens = this.carrinho.filter(({ id }) => id === this.produto.id);
            this.produto.estoque -= itens.length;
        }
    },
    computed: {
        carrinhoTotal() {
            let total = 0;
            if (this.carrinho.length)
                this.carrinho.forEach(element => total += element.preco);
            return total;
        }
    },
    watch: {
        produto() {
            document.timeline = this.produto.nome || "Techno";
            const hash = `#${this.produto.id}` || "";
            history.pushState(null, null, hash);

            if (this.produto)
                this.stockComp();
        },
        carrinho() { if (this.carrinho.length > 0) window.localStorage.carrinho = JSON.stringify(this.carrinho) }
    }

})