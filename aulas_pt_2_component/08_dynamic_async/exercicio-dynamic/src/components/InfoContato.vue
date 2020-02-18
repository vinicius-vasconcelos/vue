<template>
    <section>
        <h1 class="title">Contato</h1>
       
        <form action="">
            <label for="">Nome</label>
            <input type="text" name="" id=""  placeholder="Nome completo">
            <label for="">Email</label>
            <input type="text" name="" id="" placeholder="fulano@gmail.com">
            <label for="">Assunto</label>
            <input type="text" name="" id=""  placeholder="ex:Agradecimento">
            <label for="">Mensagem</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>

            <button>Enviar</button>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'InfoContato',
    }
</script>

<style scoped>
    section {
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-radius: 5px;
    }

    form {
        min-width: 400px;
        background-color:#FFF;
        display: flex;
        flex-direction: column;
        padding: 30px;
        box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, .15)
    }

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
        font-family: 'Quicksand', sans-serif;
        height: 50px;
        border: none;
        background-color: #007BFF;
        color: #FFF;
        border-radius: 5px;
        font-size: 1.5em;
        font-weight: bold
    }
</style>