<template>
  <transition name="fade" appear>
    <div id="app">

      <navigation />
      <firstScreen />
      <about />
      <gallery />
      <calculator />
      <partners />
      <contacts />
      <footar />
      <modal />

    </div>
  </transition>
</template>

<script>
  import navigation from './components/navigation.vue'
  import firstScreen from './components/firstScreen.vue'
  import about from './components/about.vue'
  import gallery from './components/gallery.vue'
  import calculator from './components/calculator.vue'
  import partners from './components/partners.vue'
  import contacts from './components/contacts.vue'
  import footar from './components/footar.vue'
  import modal from './components/modal.vue'

  export default {
    name: 'app',
    components: {
      firstScreen,
      navigation,
      about,
      gallery,
      calculator,
      partners,
      contacts,
      footar,
      modal
    },
    methods: {
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
    transition: opacity 1.5s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active до версии 2.1.8 */
    {
    opacity: 0;
  }

</style>
