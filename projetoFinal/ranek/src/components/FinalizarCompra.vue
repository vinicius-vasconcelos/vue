<template>
   <section>
       <h2>Endereço de envio</h2>
       <UsuarioForm>
           <button @click.prevent="finalizarCompra" class="btn" >Finaliza Compra</button>
       </UsuarioForm>
   </section>
</template>

<script>
    import UsuarioForm from '@/components/UsuarioForm.vue'
    import { api } from '@/services.js'
    import { mapState } from 'vuex';

    export default {
        name: 'FinalizarCompra',
        props: ['produto'],
        components: {
            UsuarioForm,
        },
        computed: {
            ...mapState(['usuario']),
            compra() {
                return {
                    comprador_id: this.usuario.email,
                    vendedor_id: this.produto.usuario_id,
                    produto: this.produto,
                    endereco: {
                        cep: this.usuario.cep ,
                        rua: this.usuario.rua ,
                        numero: this.usuario.numero ,
                        bairro: this.usuario.bairro ,
                        cidade: this.usuario.cidade ,
                        esatdo: this.usuario.esatdo ,
                    }
                }
            }
        },
        methods: {
            criarTransacao() {
                return api.post(`transacao`, this.compra)
                    .then(() => this.$router.push({name: 'Compras'}))
            },
            async criarUsuario() {
                try {
                    await this.$store.dispatch('criarUsuario', this.$store.state.usuario)
                    await this.$store.dispatch('getUsuario', this.$store.state.usuario.email)
                    await this.criarTransacao();
                } catch(err) {
                    console.log(`Houve um erro na criação da transação: [ERROR: ${err}]`)
                }
            },
            finalizarCompra() {
                if(this.$store.state.login)
                    this.criarTransacao()
                else
                    this.criarUsuario();
            }
        }
    }
</script>

<style scoped>
    h2 { margin-top: 40px; margin-bottom: 20px; }
    
    .btn { background: #E80; }
</style>