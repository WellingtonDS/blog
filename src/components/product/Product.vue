<template>
    <form >
        <input type="text" name="busca" id="busca" v-model="busca"  placeholder="Buscar...">
        <input type="submit" id="lupa" value="buscar" @click.prevent="buscarProduto">
    </form>
</template>

<script lang="js">
import ProductComponent from './ProductComponents'
export default ProductComponent
</script>

<style lang="scss" scoped>
@import './Product.scss';
</style>