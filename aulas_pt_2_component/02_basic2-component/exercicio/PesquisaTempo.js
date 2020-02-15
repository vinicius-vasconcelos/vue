export default {
    name: 'PesquisaTempo',
    data() {
        return {
            tempo: {}
        }
    },
    created() {
        this.fetchTempo();
    },
    methods: {
        fetchTempo() {
            fetch('https://www.metaweather.com/api/location/455827/')
                .then(r => r.json())
                .then(temp => this.tempo = temp);
        }
    },
    template: `
        <div style="boder: 2px solid #000">
            São Paulo <br>
            Temperatura maxima: {{tempo.consolidated_weather[0].max_temp}} <br>
            Temperatura minima: {{tempo.consolidated_weather[0].min_temp}} <br>
        </div>
    `
}