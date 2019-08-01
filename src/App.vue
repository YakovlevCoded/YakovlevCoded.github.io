<template>
  <transition name="fade" appear>
    <div id="app">

      <navigation />
      <firstScreen />
      <about />
    </div>
  </transition>
</template>

<script>
  import navigation from './components/navigation.vue'
  import firstScreen from './components/firstScreen.vue'
  import about from './components/about.vue'

  export default {
    name: 'app',
    components: {
      firstScreen,
      navigation,
      about
    }
  }

</script>

<style lang='scss'>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active до версии 2.1.8 */
    {
    opacity: 0;
  }

</style>
