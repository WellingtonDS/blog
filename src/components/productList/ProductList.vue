<template>      
    <section class="products-container">
        <transition mode="out-in">
        <div v-if="products && products.length" class="products"  key="products">
            <div class="product" v-for="(product, index) in products" :key="index" name="product">
                <router-link :to="{name: 'product', params: {id: product.id}}">
                    <img v-if="product.photos" src="produtct.photos[0].src" alt="product.photos[0].title">
                    <p class="price">{{product.price}}</p>
                    <h2 class="title">{{product.name}}</h2>
                    <p class="description"> {{product.desciption}}</p>
                    <p class="description"> {{product.user_id}}</p>
                </router-link>
            </div>
        <ProductsPaginate :productsTotal="productsTotal"  :productsPerPage="productsPerPage"/>
        </div>
        <div v-else-if="products && products.length === 0" key="no-result">
            <p class="no-result">Busca sem resultado. Tente buscar por outro termo.</p>
        </div>
            <LoadingPaginate key="loading" v-else/>

    </transition>
    </section>
</template>

<script lang="js">
import ProductListComponent from "./ProductListComponents"

export default ProductListComponent
</script>

<style lang="scss" scoped>
    @import './ProductList.scss';
</style>