<template>
   <section>
       <UsuarioForm>
           <button @click.prevent="atualizarUsuario" class="btn">Atualizar</button>
       </UsuarioForm>
   </section>
</template>

<script>
    import UsuarioForm from '@/components/UsuarioForm.vue';
    import { api } from '@/services.js';

    export default {
        name: 'UsuarioEditar',
        components: {
            UsuarioForm
        },
        methods: {
            atualizarUsuario() {
                api.put(`/usuario/${this.$store.state.usuario.id}`, this.$store.state.usuario)
                    .then(() => {
                        this.$store.dispatch('getUsuario')
                        this.$router.push({name: 'Usuario'})
                    })
                    .catch(err => console.log(`Erro ao atualizar usuário !!! [ERROR: ${err}]`))
            }
        }
    }
</script>

<style scoped>

</style>