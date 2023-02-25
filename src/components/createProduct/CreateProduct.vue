<template>

<div>
    <form class="add-product">
        <label for="name">Nome</label>
        <input id="name" name="name" type="text" v-model="product.name">
        <label for="price">Preço (R$)</label>
        <input id="price" name="price" type="number" v-model="product.price">
        <label for="photo">Foto</label>
        <input id="photo" name="photo" type="file" ref="photos" on-change="adicionarProduto()">
        <label for="description">Descrição</label>
        <textarea name="description" id="description" v-model="product.description"></textarea>
        <input class="btn" type="button" value="Adicionar Produto" @click.prevent="adicionarProduto">
    </form>
</div>
    
</template>

<script lang="js">
import CreateProductComponents from './CreateProductComponents'
export default CreateProductComponents
</script>

<style lang="scss" scoped>
    
@import './CreateProduct.scss';
</style>