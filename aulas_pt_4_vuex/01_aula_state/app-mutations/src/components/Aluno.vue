<template>
    <p>Aluno: {{aulasCompletas}}</p>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'aluno',
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['aulasCompletas'])
        }
    }
</script>

<style>

</style>