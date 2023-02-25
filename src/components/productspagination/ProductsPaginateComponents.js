export default {
    name: "ProductPaginate",
    props: {
        productsPerPage: {
            type: Number,
            default: 1
        }, 

        productsTotal: {
            type: Number,
            default: 1
        }
    },

    methods: {
        query(paginate) {
            return{
                ...this.$route.query,
                _page: paginate
            }
        }
    },

    computed: {
        paginates() {
            const current = Number(this.$route.query._page);
            const range = 10;
            const offset = Math.ceil(range / 2);
            const total = this.paginateTotal;
            const pageArrays = [];

            for (let index = 1; index <= total; index++) {
                pageArrays.push(index);
            }

            pageArrays.splice(0, current - offset);
            pageArrays.splice(range, total);
            
            return pageArrays;
        },

        paginateTotal() {
            const total = this.productsTotal / this.productsPerPage;
            return (total !== Infinity) ? Math.ceil(total) : 0;
        }
    }
}