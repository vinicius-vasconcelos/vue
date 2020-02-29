<template>
    <div>
        <p>Curso</p>
        <Aula/>
        <input type="text" placeholder="usuário..." v-model='novoUser'>
        <button @click="handleClick">Alterar Usuário</button>
        <button @click="COMPLETAR_AULA">Completar aula</button>
    </div>
</template>

<script>
    import Aula from '@/components/Aula.vue'
    import { mapMutations } from 'vuex'

    export default {
        name: 'curso',
        data() {
            return {
                novoUser: null,
            }
        },
        components: {
            Aula
        },
        methods: {
            ...mapMutations(['CHANGE_USER', 'COMPLETAR_AULA']),
            handleClick() {
                this.CHANGE_USER({
                    user: this.novoUser,
                    totalAula: this.totalAula,
                })
            }
        }
    }
</script>

<style>

</style>