import PesquisaDolar from './PesquisaDolar.js';

export default {
    name: 'PesquisaGit',
    data() {
        return {
            repositorio: {}
        }
    },
    created() {
        this.fetchGit();
    },
    methods: {
        fetchGit() {
            fetch('https://api.github.com/users/vinicius-vasconcelos')
                .then(r => r.json())
                .then(rep => this.repositorio = rep)
        }
    },
    components: {
        PesquisaDolar
    },
    template: `
    <div style="boder: 2px solid #000">
        {{repositorio.login}}: <br>
        Tipo: {{repositorio.type}} <br>
        Cidade: {{repositorio.location}}
        
        <hr>

        <pesquisa-dolar></pesquisa-dolar>
    </div>
    `

}