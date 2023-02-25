<template>
    <section>
      <h2>Crie a Sua Conta</h2>
      <transition mode="out-in">
        <button v-if="!create" class="btn" @click="create = true">Criar Conta</button>
        <FormUser v-else>
          <button class="btn btn-form" @click.prevent="createUser">Criar Usuário</button>
        </FormUser>  
      </transition>

    </section>
  </template>
  
  <script lang="js">
 import LoginComponent from './LoginComponents'
 export default LoginComponent
  </script>
  
  <style lang="scss" scoped>
  @import './Login.scss';

  </style>
  