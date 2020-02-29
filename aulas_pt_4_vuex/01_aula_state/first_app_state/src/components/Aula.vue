<template>
    <div>
        <p>Aula {{totalAulas}}, esse é o usuário: {{user}} </p>
        <p>Aula completas === {{aulasCompletas}}</p>
        <p>{{nome}}</p>
        <button @click="mostrarConsole">Mostrar no console</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Aula',
        data() {
            return {
                totalAulas: 25,
                nome: 'andré'
            }
        },
        methods: {
            mostrarConsole() {
                console.log(this.$store.state.user)
            }
        },
        /*computed: {
            user() {
                return this.$store.state.user
            },
            aulasCompletas() {
                return this.$store.state.aulasCompletas
            }
        }*/
        /*computed: mapState(['user', 'aulasCompletas'])*/
        computed: {
            ...mapState(['user', 'aulasCompletas']),
            nomeMaiusculo() { return this.nome.toUpperCase }
        }
    }
</script>

<style>

</style>