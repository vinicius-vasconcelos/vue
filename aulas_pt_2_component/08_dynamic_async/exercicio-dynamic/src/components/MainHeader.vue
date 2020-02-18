<template>
    <header>
        <div class="container">
            <h1><a href="#">logo</a></h1>
            <ul class="menu">
                <li class="menu-item"><a href="#sobre" @click="page('InfoSobre')">Sobre</a></li>
                <li class="menu-item"><a href="#servicos" @click="page('InfoServicos')">Serviços</a></li>
                <li class="menu-item"><a href="#contato" @click="page('InfoContato')">Contato</a></li>
                <li class="menu-item login">
                    <a  href="#login" @click.prevent="modalLoginAtivo=true" >login</a>
                </li>
            </ul>
        </div>

        <ModalLogin :modalLoginAtivo.sync="modalLoginAtivo"/>
    </header>
    
</template>

<script>
export default {
    name: 'MainHeader',
    props:['currentPage'],
    data() {
        return {
            actualPage: this.currentPage,
            modalLoginAtivo: false,
        }
    },
    methods: {
        page(page) {
            this.actualPage = page;
            this.$emit('update:currentPage', this.actualPage)  
        },
    },
    components: {
        ModalLogin: () => import('./ModalLogin.vue')
    },
}
</script>

<style scoped>
    a { text-decoration: none; color: #9F9F9F}

    ul {list-style: none;}

    header {
        width: 100%;
        background-color: #2C2C2C;
    }

    .container {
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .menu-item a {
        display: block;
        padding: 10px 30px;
    }

    .menu-item + .menu-item { border-left: 2px solid #9F9F9F;}
    .menu-item.login { border-left:none; }

    .login a { color: #FFF; font-weight: bold}
    .login {
        background-color: #007BFF;
        border-radius: 5px;
        color: #FFF;
    }

</style>