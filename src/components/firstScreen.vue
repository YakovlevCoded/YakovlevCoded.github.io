<template>
  <section class="main">
    <div class="circle"></div>
    <div class="print"
    :style="{
    backgroundImage: 'url(' + require('@/assets/images/print.png') + ')'
    }"></div>
    <div class="container">
      <h1 class="h1">Время <br>
      Печати</h1>
      <button class="btn dark-btn">Заказать печать</button>

    </div>

  </section>
</template>

<script>

  export default {
    name: 'firstScreen',
    components: {
    },
    data() {
      return {
        imgs: '', // Img Url , string or Array
        visible: false,
        index: 0 // default
      }
    },
    methods: {
      // showSingle() {
      //   this.imgs = 'http://via.placeholder.com/350x150'
      //   this.show()
      // },
      showMultiple() {
        this.imgs = ['https://s.fotorama.io/1.jpg', 'https://s.fotorama.io/2.jpg']
        this.index = 1 // index of imgList
        this.show()
      },
      show() {
        this.visible = true
      },
      handleHide() {
        this.visible = false
      }
    },
    props: {
      msg: String
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .main {
    padding-top: 120px;
    background-color: #fff;
    min-height: 100vh;
    color: $dark;
  }

  .container {
    z-index: 2;
    position: relative;
  }

  .circle {
    width: 100vh;
    height: 100vh;
    border-radius: 50%;
    background-color: $light;
    position: absolute;
    top: -35vw;
    left: -35vw;
    width: 85vw;
    height: 75vw;
    z-index: 0;
  }

  .h1 {
    color: $blue;
    font-size: 102px;
    margin: 0;
    font-weight: 400;
  }

  .btn {
    margin-top: 100px;
  }

  .print {
    position: absolute;
    bottom: -30px;
    right: 0px;
    height: 550px;
    width: 550px;
    background-size: cover;
  }




</style>
