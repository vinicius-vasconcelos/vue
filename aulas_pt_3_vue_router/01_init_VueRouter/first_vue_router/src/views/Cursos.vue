<template>
   <div>
       <h1>{{curso}}</h1>
        <p>Estes são os cursos</p>
        <router-link to="/cursos/html">HTML</router-link>
        <router-link to="/cursos/css">CSS</router-link>
        <router-link to="/cursos/javascript">JAVASCRIPT</router-link>
   </div>
</template>

<script>
    export default {
        name: 'Cursos',
        data() {
            return {      
            }
        },
        props: ['curso'],
        beforeRouteUpdate(to, from, next) {
            console.log('router atualizado');
            next();
        }
    }
</script>

<style>

</style>