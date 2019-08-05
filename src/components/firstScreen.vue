<template>
  <section class="main">
    <div class="circle"></div>
    <!--<div class="print"-->
    <!--:style="{-->
    <!--backgroundImage: 'url(' + require('@/assets/images/print.png') + ')'-->
    <!--}"></div>-->
    <div class="container">
      <h1><span class="pink">УФ-печать</span> <br> в Чебоксарах</h1>
      <!--<h1 class="h1">Время <br>-->
      <!--Печати</h1>-->
      <button class="btn black-grad-btn" @click="showModal">Заказать</button>
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
  h1 {
    font-family: Helvetica, sans-serif;
    position: absolute;
    font-size: 72px;
    right: 0;
  }
  .main {
    padding-top: 120px;
    background-color: #fff;
    min-height: calc(80vh + 120px);
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
    height: 80vh;
    width: 60vw;
    position: absolute;
    top: 120px;
    left: -2px;
    background-repeat: no-repeat;
    z-index: 0;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='699' height='465' fill-rule='evenodd' clip-rule='evenodd' image-rendering='optimizeQuality' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' version='1' viewBox='0 0 18490 12298'%3E%3Cdefs%3E%3Cstyle%3E .fil0,.fil1,.fil3{fill:%2300d0ff;fill-opacity:.709804}.fil0,.fil3{fill:%23c825de}.fil3{fill:%23fff} %3C/style%3E%3ClinearGradient id='id0' x1='1773' x2='10469' y1='6131' y2='6131' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%234994d0'/%3E%3Cstop offset='0' stop-color='%23008cff'/%3E%3Cstop offset='1' stop-color='%23ff007b'/%3E%3C/linearGradient%3E%3ClinearGradient id='id1' x1='3790' x2='17122' y1='6857' y2='6857' gradientUnits='userSpaceOnUse' xlink:href='%23id0'/%3E%3ClinearGradient id='id2' x1='5271' x2='2171' y1='6966' y2='12017' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230088f7'/%3E%3Cstop offset='1' stop-color='%237f44b9'/%3E%3Cstop offset='1' stop-color='%23ff007b'/%3E%3C/linearGradient%3E%3ClinearGradient id='id3' x1='12953' x2='327' y1='6454' y2='8275' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230ff'/%3E%3Cstop offset='1' stop-color='%23ff007b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='Слой_x0020_1'%3E%3Cg id='_696699496'%3E%3Cpath d='M11595 12251l3644 47 3251-2175-9538-5350z' class='fil0'/%3E%3Cpath d='M8018 12235l6164 37 2778-1859-5951-6332z' class='fil1'/%3E%3Cpath fill='url(%23id1)' d='M5766 12182l8380 99 2976-3941L4615 1432l-825 3859z'/%3E%3Cpath d='M7500 12231l5172 33-4625-3191z' class='fil3'/%3E%3Cpath fill='url(%23id3)' d='M1773 12205l7895 26 3378-4740L234 2497z'/%3E%3Cpath d='M3579 12231h6089l3251-2175L1773 4049z' class='fil0'/%3E%3Cpath d='M1773 12227h6089l3252-2175L1781 0z' class='fil1'/%3E%3Cpath fill='url(%23id0)' d='M1773 12227h5856l2840-4154-6571-3909L1773 35z'/%3E%3Cpath d='M1773 12227h2207l986-2067L0 3829z' class='fil3'/%3E%3Cpath fill='url(%23id2)' d='M1773 12227h4651l794-1516L224 6756z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: contain;
    background-position-y: bottom;
    background-position-x: left;
  }

  .h1 {
    color: $blue;
    font-size: 102px;
    margin: 0;
    font-weight: 400;
  }

  .btn {
    position: absolute;
    right: 0;
    top: 45vh;
  }

  .print {
    position: absolute;
    bottom: -30px;
    right: 0px;
    height: 550px;
    width: 550px;
    background-size: cover;
  }
  @media screen and (min-width: 901px) and (max-width: 1170px) {
    h1 {
      top: 100px;
      right: 150px;
    }
    .btn {
      top: 40vh;
      right: 150px;
    }
  }

  @media screen and (max-width: 900px) {
    h1 {
      right: auto;
      left: 25px;
    }
  }

  @media screen and (max-width: 767px) {
    .btn {
      min-width: 270px;
      max-width: 270px;
      right: calc(50% - 135px);
      top: 120px;
    }
    h1 {
      left: 25px;
      font-size: 32px;
      top: -20px;
    }
  }



</style>
