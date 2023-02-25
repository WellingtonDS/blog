<template>
    <section>
        <h2>Adicionar Produto</h2>
        <CreateProduct/>
        <h2>Seus Produtos</h2>
        <transition-group v-if="product_user" name="list" tag="ul">
            <li v-for="(product, index ) in product_user" :key="index">
                <ProductItem :product="product">
                    <p>{{product.description}}</p>
                    <button class="delete" @click.prevent="deletarProduto(product.id)"></button>
                </ProductItem>    
            </li>
        </transition-group>
    </section>

</template>

<script lang="js">

import ProductItem from "@/components/productItem/ProductItem.vue"
import {mapState, mapActions } from 'vuex';
import CreateProduct from '@/components/createProduct/CreateProduct.vue';
import { api } from "@/service/service";
export default {
    name: "ProductUser",
    components: {
        CreateProduct,
        ProductItem
    },

    computed: {
        ...mapState(["login","user","product_user"])
    },
    methods: {
        ...mapActions(["getProductUser"]),
        deletarProduto(id) {
        const confirmar = window.confirm("Deseja remover este produto?");
        if (confirmar) {
            api.delete(`/product/${id}`).then(() => {
                this.getProductUser();
            }).catch(error => {
                console.log(error.response)
            });   
        }
        }
    },

    watch: {
        login() {
            this.getProductUser();
        }
    },

    created() {
        if(this.login) {
            this.getProductUser();
        }
    }
}

</script>

<style lang="scss" scoped>

h2 {
    margin-bottom: 20px;   
}

.delete {
   position: absolute;
   top: 0;
   right: 0;
   background: url("../../assets/img/remove.svg") no-repeat center center;
   width: 24px;
   height: 24px;
   text-indent: -140px;
   cursor: pointer;
   overflow: hidden;
   border: none;
}
.list-enter, .list-leave-to {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
}
.list-enter-active, .list-enter-active {
    transition: all .3s;
}
</style>