<template>
    <div>
        <p>Curso de javascript</p>
        <Aulas />
    </div>
</template>

<script>
    import Aulas from '@/components/Aulas.vue'

    export default {
        name: 'curso',
        data() {
            return {
                
            }
        },
        components: {
			Aulas,
		}
    }
</script>

<style>

</style>