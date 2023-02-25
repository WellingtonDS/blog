<template>
    <div>
        <ul v-if="paginateTotal > 1">
            <router-link class="emogi" :to="{query: query(1)}"> 👈 </router-link>
            <li v-for="paginate in paginates" :key="paginate">
                <router-link :to="{query: query(paginate)}">{{paginate}}</router-link>
            </li>
            <router-link :to="{query: query(paginateTotal)}"> 👉 </router-link>
        </ul>
    </div>
</template>

<script lang="js">
import ProductsPaginateComponent from './ProductsPaginateComponents'
export default ProductsPaginateComponent
</script>

<style lang="scss" scoped>
@import './ProductsPaginate.scss'
</style>