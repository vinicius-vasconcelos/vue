import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/services.js'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		login: false,
		usuario: {
			id: '',
			nome: '',
			email: '',
			senha: '',
			cep: '',
			rua: '',
			numero: '',
			bairro: '',
			cidade: '',
			estado: '',
		},
		usuarioProdutos: null
	},
	mutations: {
		UPDATE_LOGIN(state, payload) {
			state.login = payload
		},
		UPDATE_USUARIO(state, payload) {
			state.usuario = Object.assign(state.usuario, payload)
		},
		UPDATE_USUARIO_PRODUTOS(state, payload) {
			state.usuarioProdutos = payload
		},
		ADD_USUARIO_PRODUTOS(state, payload) {
			state.usuarioProdutos.unshift(payload)
		}
	},
	actions: {
		getUsuarioProdutos(context) {
			api.get(`/produto?usuario_id=${context.state.usuario.id}`)
				.then(resp => context.commit('UPDATE_USUARIO_PRODUTOS', resp.data))
		},
		getUsuario(context, payload) {
			return api.get(`/usuario/${payload}`)
				.then(resp => {
					context.commit('UPDATE_USUARIO', resp.data)
					context.commit('UPDATE_LOGIN', true)
				})
		},
		criarUsuario(context, payload) {
			context.commit('UPDATE_USUARIO', {id: payload.email})
			return api.post('/usuario', payload)
		},
		deslogarUsuario(context) {
			context.commit('UPDATE_USUARIO', {
				id: '',
				nome: '',
				email: '',
				senha: '',
				cep: '',
				rua: '',
				numero: '',
				bairro: '',
				cidade: '',
				estado: '',
			})
			context.commit('UPDATE_LOGIN', false)
		}
	}
})
