<template>
    <section class="usuario">
        <nav class="sidenav">
            <ul>
                <li><router-link :to="{name: 'Usuario'}" >Produtos</router-link></li>                
                <li><router-link :to="{name: 'Compras'}" >Compras</router-link></li>                
                <li><router-link :to="{name: 'Vendas'}" >Vendas</router-link></li>                
                <li><router-link :to="{name: 'Usuario-editar'}" >Editar</router-link></li>                
                <li><button @click.prevent="deslogar">Deslogar</button></li>
            </ul>
        </nav>

        <transition mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
    export default {
        name: 'Usuario',
        methods: {
            deslogar() {
                this.$store.dispatch('deslogarUsuario')
                this.$router.push('/login')  
            }
        }
    }
</script>

<style scoped>
    .usuario {
        display: grid;
        grid-template-columns: minmax(140px, 200px) 1fr;
        max-width: 900px;
        margin: 40px auto;
        grid-gap: 30px;
        padding: 20px;
    }

    .sidenav a,
    .sidenav button {
       padding: 10px;
       display: block; 
       background: #F4F7FC;
       margin-bottom: 10px;
       border-radius: 4px;
    }

    .sidenav a.router-link-exact-active,
    .sidenav a:hover,
    .sidenav button:hover {
        background: #87F;
        color: #FFF;
    }

    .sidenav button {
        border: none;
        width: 100%;
        font-size: 1rem;
        text-align: left;
        font-family: 'Avenir', Helvetica, Arial, sans-serif; 
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {
        .usuario {
            grid-template-columns: 1fr;
            margin: 0 auto;
        }
    }

</style>