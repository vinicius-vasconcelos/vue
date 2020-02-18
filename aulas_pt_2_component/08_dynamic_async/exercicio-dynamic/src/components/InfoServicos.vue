<template>
    <section>
        <h1 class="title">Serviços</h1>
        <div class="card-group">
            <CardComponent v-for="i in servicos" :servico="i" :key="i" />
        </div>
    </section>
</template>

<script>
    import CardComponent from './CardComponent.vue';

    export default {
        name: 'InfoServicos',
        data() {
            return {
                servicos: ['Web Sites', 'SEO', 'Wordpress', 'Marketing',],
            }
        },
        components: {
            CardComponent,
        }
    }
</script>

<style scoped>
    section {
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    .card-group {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
</style>