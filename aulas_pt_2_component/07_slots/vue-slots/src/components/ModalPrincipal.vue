<template>
    <div id="modal">
        <slot name="headerModal"></slot>
        <slot name="mainModal" :user="user"></slot>
        <slot name="footerModal"></slot>
    </div>
</template>

<script>
export default {
    name: 'ModalPrincipal',
    data() {
        return{
            user:{
                nome: 'vinicius'
            }
        }
    }
}
</script>

<style>

</style>