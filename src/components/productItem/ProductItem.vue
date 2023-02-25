<template>
    <div class="product" v-if="product">
        <router-link class="product-img" :to="{name: 'product', params: {id: product.id}}">
            <img v-if="product.photo" :src="product.photo[0].src" :alt="product.photo[0].title">
            <p> Ver Produto </p> 
        </router-link>
        <div class="info">
            <p class="price">{{product.price | numberPrice}}</p>
            <h2 class="title">{{product.name}}</h2>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="js">
import ProductItemComponents from "./ProductItemComponents"
export default  ProductItemComponents
</script>

<style lang="scss" scoped>
    @import "./ProductItem.scss";
</style>