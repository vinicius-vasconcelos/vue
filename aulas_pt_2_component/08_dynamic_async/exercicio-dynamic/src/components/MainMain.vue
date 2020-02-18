<template>
    <main>
        <keep-alive>
            <component :is="this.currentPage"></component>
        </keep-alive>
    </main>
</template>

<script>
    /*
        Utilizando carregamentos async
    */
    export default {
        name: 'MainMain',
        props:['currentPage'],
        components: {
            InfoSobre: () => import('./InfoSobre.vue'),
            InfoServicos: () => import('./InfoServicos.vue'),
            InfoContato: () => import('./InfoContato.vue'),
        }
    }
</script>

<style>

</style>