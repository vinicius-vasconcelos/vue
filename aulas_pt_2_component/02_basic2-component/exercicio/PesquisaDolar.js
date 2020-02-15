export default {
    name: 'PesquisaDolar',
    data() {
        return {
            dolar: {},
            dol: 1,
        }
    },
    created() {
        this.fetchDolar();
    },
    filters: {
        maskDolar(valor) {
            return valor.toLocaleString('pt-br', { style: 'currency', currency: 'USD' })
        },
        maskReal(valor) {
            return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        }
    },
    methods: {
        fetchDolar() {
            fetch('https://api.exchangeratesapi.io/latest?base=USD')
                .then(r => r.json())
                .then(dols => this.dolar = dols)
        }
    },
    template: `
        <div style="boder: 2px solid #000">
            Dolar: <br>
            {{dol | maskDolar}} está R$ {{dolar.rates.BRL | maskReal}}
        </div>
    `
}