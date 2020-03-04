<template>
    <form action="">
        <input v-model="nome" type="text" name="nome" id="nome" placeholder="Nome completo...">
        <input v-model="email" type="email" name="email" id="email" placeholder="fulano@gmail.com">
        <input v-model="senha" type="password" name="senha" id="senha" placeholder="********">
        <input v-model="cep" @keyup="preencherCep" type="text" name="cep" id="cep" placeholder="00000-000">
        <input v-model="rua" type="text" name="rua" id="rua" placeholder="Nome da rua...">
        <input v-model="numero" type="text" name="numero" id="numero" placeholder="000A">
        <input v-model="bairro" type="text" name="bairro" id="bairro" placeholder="Nome do bairro...">
        <input v-model="cidade" type="text" name="" id="cidade" placeholder="Nome da cidade...">
        <input v-model="estado" type="text" name="estado" id="estado" placeholder="Nome do estado...">

        <div class="button">
            <slot></slot>
        </div>
    </form>
</template>

<script>
    import { mapFields } from '@/helpers.js'
    import { getCep } from '@/services.js'

    export default {
        name: 'UsuarioForm',
        computed: {
            ...mapFields({
                fields: ['nome', 'email', 'senha', 'cep', 'rua', 'numero', 'bairro', 'cidade', 'estado'],
                base: 'usuario',
                mutation: 'UPDATE_USUARIO'
            })
        },
        methods: {
            preencherCep() {
                this.rua = '...'
                this.bairro = '...'
                this.estado = '...'
                this.cidade = '...'

                const cep = this.cep.replace(/\D/g, '')
                if(cep.length == 8)
                    getCep(cep)
                        .then(resp => {
                            this.rua = resp.data.logradouro
                            this.bairro = resp.data.bairro
                            this.estado = resp.data.uf
                            this.cidade = resp.data.localidade
                        })
            }
        }
    }
</script>

<style scoped>
    form {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center
    }

    .button { margin-top: 10px }
</style>