<template> 
    <section>
        <div v-if="vendas">
            <h2>Vendas</h2>
            <div class="produtos-wraper" v-for="(venda, index) in vendas" :key="index">
                <ProductItem v-if="venda.product" :product="venda.product">
                    <p class="vendedor">
                        <span>Comprador:</span>
                        {{venda.comprador_id}}
                    </p>
                </ProductItem>
                <div class="entrega" >
                    <h3>Entrega:</h3>
                    <ul v-if="venda.endereco" >
                        <li v-for="(value, key)  in venda.endereco" :key="key">
                            {{key}}:  {{value}}
                        </li>
                    </ul>
                </div>
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
            vendas: null
        }
    },

    methods: {
        getVendas() {
            console.log("aqui", this.vendas); 
            api.get(`/transacao?vendedor_id=${this.user.id}`).then(response => {
                this.vendas = response.data;
            })
        }
    },

    watch: {
        login() {
            this.getVendas();
        }
    },

    created() {
        if(this.login) {
            this.getVendas();
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

.entrega {
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr;
    grid-gap: 20px;
    margin-bottom: 60px;
}

h3 {
    justify-self: end;
    margin: 0;
}
</style>