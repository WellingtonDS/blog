<template> 
    <section>
        <div v-if="compras">
            <h2>Compras</h2>
            <div class="produtos-wraper" v-for="(compra, index) in compras" :key="index">
                <ProductItem v-if="compra.product" :product="compra.product">
                    <p class="vendedor">
                        <span>Vendedor:</span>
                        {{compra.vendedor_id}}
                    </p>
                </ProductItem>
            </div>
        </div>
    </section>
</template>

<script>
import { api } from '@/service/service';
import {mapState} from 'vuex';
import ProductItem from "@/components/productItem/ProductItem.vue";
export default {
    components: {
        ProductItem
    }, 

    computed: {
        ...mapState(["user", "login"])
    },

    data() {
        return {
            compras: null
        }
    },

    methods: {
        getCompras() {
            console.log("aqui", this.compras); 
            api.get(`/transacao?comprador_id=${this.user.id}`).then(response => {
                this.compras = response.data;
            })
        }
    },

    watch: {
        login() {
            this.getCompras();
        }
    },

    created() {
        if(this.login) {
            this.getCompras();
        }
    }
}
</script>

<style lang="scss" scoped>

.produdo-wraper {
    margin-bottom: 40px;
}

.vendedor span {
    color: #e80;
}

h2 {
    margin-bottom: 20px;
}
</style>