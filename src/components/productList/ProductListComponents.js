import { api } from '@/service/service';
import { serialize } from '@/helpers/Helpers';
import ProductsPaginate from '@/components/productspagination/ProductsPaginate.vue';

export default {
    name: "ProductList",
    components: {
        ProductsPaginate
    },

    data () {
        return {
            products: null,
            productsPerPage: 20,
            productsTotal: 0
        }
    },

    computed: {
        url() {
            const query = serialize(this.$route.query);
            
            return `/product?_limit=${this.productsPerPage}${query}`;
        }
    },

    methods: {
        getProducts () {
            this.products = null;
            window.setTimeout(() => {
                api.get(this.url).then(response => {
                    this.productsTotal = Number(response.headers["x-total-count"]);
                    this.products = response.data;
                });
            }, 1500);
        }
    },

    watch: {
        url() {
            this.getProducts();
        }
    },

    created() {
        this.getProducts();
    }
}