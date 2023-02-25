<template>
    <section class="login">
      <h1>Login</h1>
      <form>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="login.email">
        <label for="password">Senha</label>
        <input type="password" name="password" id="password" v-model="login.senha">
        <button class="btn" @click.prevent="logar">Logar</button>
      </form>
      <p class="perdeu">
        <a href="/" target="_blank">Perdeu a senha? Clique aqui. 😓</a>
      </p>
      <CreateLogin/>
    </section>
  </template>
  
  <script lang="js">
  import CreateLogin from "@/components/login/Login.vue";
  
  export default {
    name: "LoginView",
    components: {
      CreateLogin
    },

    data() {
      return {
        login: {
          email: "",
          password: ""
        }
      };
    },

    methods: {
      logar() {
        this.$store.dispatch("getUser", this.login.email);
        this.$router.push({name: "usuario"});
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .login {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  h1 {
    text-align: center;
    font-size: 2rem;
    margin-top: 40px;
    color: #87f;
  }
  
  form {
    display: grid;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .perdeu {
    text-align: center;
    margin: 20px auto 0 auto;
  }
  
  .perdeu a:hover {
    color: #87f;
    text-decoration: underline;
    text-decoration: none;
  }
  </style>
  