<template>
  <div id="app">
    <Header/>
    <main id="main">
      <transition mode="out-in">
        <router-view/>
      </transition>
    </main>
    <Footer/>
  </div>
</template>

<script>
import App from './App';
export default App
</script>

<style lang="scss">
@import './App.scss';

</style>