<template>
  <section class="main">
    <div class="circle"></div>
    <!--<div class="print"-->
    <!--:style="{-->
    <!--backgroundImage: 'url(' + require('@/assets/images/print.png') + ')'-->
    <!--}"></div>-->
    <div class="container">
      <!--<h1 class="h1">Время <br>-->
      <!--Печати</h1>-->
      <button class="btn grad-btn" @click="showModal">Заказать</button>
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
      },
      showModal () {
        this.$modal.show('modal');
      },
      hideModal () {
        this.$modal.hide('modal');
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
    box-shadow:4px 9px 13px 1px rgba(0,0,0,0.09);
    -webkit-box-shadow:4px 9px 13px 1px rgba(0,0,0,0.09);
    -moz-box-shadow:4px 9px 13px 1px rgba(0,0,0,0.09)
  }

  .container {
    z-index: 2;
    position: relative;
  }

  .circle {
    width: 100vh;
    height: calc(100vh - 120px);
    position: absolute;
    top: 120px;
    left: -2px;
    background-repeat: no-repeat;
    z-index: 0;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill-rule='evenodd' clip-rule='evenodd' image-rendering='optimizeQuality' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' viewBox='0 0 8331 9032'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='8294.07' x2='44.178' y1='4806.75' y2='5818.45' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%234994d0'/%3E%3Cstop offset='1' stop-color='%23e61078'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' x1='4113.11' x2='625.044' y1='4362.4' y2='8184.32' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%234994d0'/%3E%3Cstop offset='.722' stop-color='%239752a4'/%3E%3Cstop offset='1' stop-color='%23e61078'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='7.056' x2='6427.92' y1='4527.3' y2='4527.3' gradientUnits='userSpaceOnUse' xlink:href='%23a'/%3E%3C/defs%3E%3Cpath fill='url(%23a)' fill-opacity='.769' d='M7 9012l5830 20 2494-3500L7 1593z'/%3E%3Cpath fill='%2383c9f0' fill-opacity='.71' d='M1340 9032h4497l2401-1606L7 2990z'/%3E%3Cpath fill='%232e92d0' fill-opacity='.71' d='M7 9029h4496l2401-1606L12 0z'/%3E%3Cpath fill='url(%23b)' fill-opacity='.769' d='M7 9029h4324l2097-3067L7 26z'/%3E%3Cpath fill='%23fefefe' fill-opacity='.71' d='M7 9029l3532-5 983-830L11 2742 9 6146z'/%3E%3Cpath fill='url(%23c)' fill-opacity='.769' d='M7 9029h3434l1297-1890L0 3518z'/%3E%3C/svg%3E");
  }

  .h1 {
    color: $blue;
    font-size: 102px;
    margin: 0;
    font-weight: 400;
  }

  .btn {
    position: absolute;
    right: 6vw;
    top: 30vh;
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
