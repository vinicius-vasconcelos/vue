<template>
    <transition name="modal">
        <section v-show="modalLoginAtivo" @click="dimiss">
            <form action="">
                <h1 class="title">Bem Vindo</h1>

                <label for="">Email</label>
                <input type="text" placeholder="fulano@gmail.com">
                
                <label for="">Senha</label>
                <input type="passqord" placeholder="*********">

                <div class="btns">
                    <button>Entrar</button>
                    <button class="cancel" @click.prevent="dimiss">Cancelar</button>
                </div>
            </form>
        </section>
    </transition>
</template>

<script>
    export default {
        name: 'ModalLogin',
        props:['modalLoginAtivo'],
        data() {
            return {
                modalAtivo: this.modalLoginAtivo
            }
        },
        methods: {
            dimiss({target, currentTarget}) {
                if(target === currentTarget) {
                    this.modalAtivo = false;
                    this.$emit('update:modalLoginAtivo', this.modalAtivo)
                   
                } 
            }
        }
    }
</script>

<style scoped>
    section {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .9);
        overflow-y: scroll; 
    }

    form {
        max-width: 400px;
        background-color:#FFF;
        margin: 150px auto;
        display: flex;
        flex-direction: column;
        padding: 30px;
        box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, .15);
        border-radius: 5px;
    }

    form h1 { text-align: center;}

    label {
        color: #2C2C2C
    }

    input, textarea {
        font-family: 'Quicksand', sans-serif;
        width: 100%;
        height: 3em;
        margin: 10px auto;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #ECECEC;
    }

    textarea { height: 10em;}

    button {
        flex: 1 0 150px;
        font-family: 'Quicksand', sans-serif;
        height: 50px;
        border: none;
        background-color: #007BFF;
        color: #FFF;
        border-radius: 5px;
        font-size: 1.5em;
        font-weight: bold;
        margin: 10px;
        cursor: pointer;
    }

    .cancel {
        background-color: #DC3545;
    }

    .btns {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .modal-enter,
    .modal-leave-to { opacity: 0; }

    .modal-enter-active,
    .modal-leave-active { transition: opacity .3s; animation: slide .3s; }

    .modal-leave-to { animation: slide .3s reverse; }


    @keyframes slide {
        from { transform: translate3d(0, -500px, 0);}
        to { transform: translate3d(0, 0px, 0); }
    }

</style>