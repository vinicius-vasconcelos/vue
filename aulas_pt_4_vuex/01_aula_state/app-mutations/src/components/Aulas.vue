<template>
    <div>
        <p>Aulas</p>
        <ul>
            <li v-for="aula in aulas" :key="aula.nome">
                <p>{{aula.nome}} | {{aula.duracao}}</p>
                <button @click="completarAula(aula)">Completar aula</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex'

    export default {
        name: 'aulas',
        data() {
            return {
                aulas: [
                    {
                        nome: 'HTML & CSS',
                        duracao: 15
                    },
                    {
                        nome: 'Javascript',
                        duracao: 30
                    },
                    {
                        nome: 'UX Designer',
                        duracao: 20
                    }
                ]
            }
        },
        methods: {
            ...mapMutations(['COMPLETAR_AULA']),
            ...mapActions(['completarAula']),
            /*handleClick(aula) {
                this.$store.dispatch('completarAula', aula)
            }*/
        }
    }
</script>

<style>

</style>