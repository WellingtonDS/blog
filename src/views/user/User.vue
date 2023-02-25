<template>
  <section class="user">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'usuario'}" >Produtos</router-link>
        </li>
        <li>
          <router-link :to="{name: 'compras'}" >Compras</router-link>
        </li>
        <li>
          <router-link :to="{name: 'vendas'}" >Vendas</router-link>
        </li>
        <li>
          <router-link :to="{name: 'editar'}" >Editar</router-link>
        </li>
        <li>
          <button @click="closeUser">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "UserView",
  methods: {
    closeUser() {
      this.$store.dispatch("closeUser");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>

.user{
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 500px) {
  .user{
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
}

.sidenav a {
  display: block;
  padding: 10px;
  background:#f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
}

.sidenav a.router-link-exact-active, .sidenav a:hover, .sidenav button:hover{
  background: #87f;
  color: white;
}

.sidenav button {
  border: none;
  widows: 100%;
  font-size: 1rem;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  border-radius: 4px;
}

</style>
