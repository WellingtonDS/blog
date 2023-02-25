export default {
    name: "Product",
    data() {
        return {
            busca: ""
        }
    },

    methods: {
        buscarProduto() {
            this.$router.push({query: {q: this.busca}})
        }
    },
}

