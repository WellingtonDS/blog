<template>
    <section>
        <h2>Endereço de envio</h2>
        <FormUser>
            <button @click.prevent="finalizarCompra" class="btn">Finalizar Compra</button>
        </FormUser>
    </section>
</template>

<script>
import SoldProductComponents from './SoldProductComponents'
export default SoldProductComponents
</script>

<style lang="scss" scoped>
@import './SoldProduct.scss';
</style>