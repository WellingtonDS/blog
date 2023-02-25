<template>

     <form>
        <div class="user" v-if="mostrarDados">
            <label for="name">Nome</label>
            <input type="text" id="name" name="name" v-model="name">
            <label for="email">Email</label>
            <input type="email" id="emal" name="email" v-model="email">
            <label for="password">Senha</label>
            <input type="password" id="password" name="password" v-model="password">
        </div>
         <label for="code">Cep</label>
         <input type="text" id="code" name="code" v-model="code" @keyup="preencherCep" v-mask="'#####-###'">
         <label for="street">Rua</label>
         <input type="text" id="street" name="street" v-model="street">
         <label for="number">Número</label>
         <input type="text" id="number" name="number" v-model="number">
         <label for="district">Bairro</label>
         <input type="text" id="district" name="district" v-model="district">
         <label for="city">Cidade</label>
         <input type="text" id="city" name="city" v-model="city">
         <label for="state">Estado</label>
         <input type="text" id="state" name="state" v-model="state">
         <div class="button">
            <slot></slot>
         </div> 
     </form> 
    
</template>

<script lang="js">
import FormUserComponents from './FormUserComponents';
export default FormUserComponents
</script>

<style lang="scss" scoped>
@import './FormUser.scss';

</style>