<template>
    <div>
        <div v-if="loading">
			<PageLoading/>
		</div>
        <transition>
            <div v-if="api">
                <h1>{{api.titulo}}</h1>
                <p>{{api.descricao}}</p>
                <ul>
                    <li>
                        <strong>Email: </strong> {{api.contato.email}}
                    </li>
                     <li>
                        <strong>Telefone: </strong> {{api.contato.telefone}}
                    </li>
                     <li>
                        <strong>Endereço: </strong> {{api.contato.endereco}}
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>

    import fetchData from '@/mixins/fetchData.js';

    export default {
        name: 'contato',
        mixins: [fetchData],
        created() {
            this.fetchData('/contato');
        }

    }
</script>

<style>

</style>