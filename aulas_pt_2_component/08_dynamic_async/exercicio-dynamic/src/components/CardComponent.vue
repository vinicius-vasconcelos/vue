<template>

    <div class="card-item">
        <h2>{{servico}}</h2>

        <div class="img">
            <img src="../assets/logo.png" alt="logo">
        </div>

        <div class="footer">
            <button>Saiba Mais</button>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'CardComponent',
        data() {
            return {
                title: 'title',
            }
        },
        props:['servico'],
    }
</script>

<style scoped>
    .card-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        text-align: center;
        background-color: #FFF;
        box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, .15);
        margin-bottom: 30px;
        transition: all .3s ease-in-out
    }

    .card-item:hover,
    .card-item:focus {
         box-shadow: 15px 15px 3px 0px rgba(0, 0, 0, .15);
    }

    .card-item h2 {
        width: 100%;
        border-bottom: 2px solid #ECECEC;
        padding: 20px 30px;
    }
    .card-item .img { margin: 10px 30px; }

    .card-item .footer {
        width: 100%;
        background-color: #2C2C2C;
        padding: 20px 30px;
    }

    .card-item .footer button {
        width: 85%;
        font-family: 'Quicksand', sans-serif;
        padding: 15px;
        border: none;
        background-color: #ECECEC;
        color: #2C2C2C;
        border-radius: 5px;
        font-size: 1em;
        font-weight: bold;
        cursor: pointer;
        transition: all .3s ease-in-out
    }

    .card-item .footer button:hover, 
    .card-item .footer button:focus {
        opacity: .75;
    }

</style>