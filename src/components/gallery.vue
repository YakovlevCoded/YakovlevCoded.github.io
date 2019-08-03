<template>
    <section class="gallery">
        <div class="container">

            <h2 class="h2">Наша продукция</h2>

            <div class="about-grid">
                <swiper :options="swiperOption" ref="mySwiper">

                    <!-- slides -->
                    <swiper-slide v-for="(item, index) in images" v-bind:key="index">
                        <div class="slider__image" :style="{ backgroundImage: `url(${styles(item)})`}"></div>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>

            </div>

        </div>

    </section>
</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: 'gallery',
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                images: [
                    {src: "1.jpg"},
                    {src: '2.jpg'},
                    {src: '3.jpg'},
                    {src: '4.jpg'},
                    {src: '5.jpg'},
                    {src: '6.jpg'},
                    {src: '7.jpg'},
                    {src: '8.jpg'},
                    {src: '9.jpg'},
                    {src: '10.jpg'},
                    {src: '11.jpg'},
                    {src: '12.jpg'},
                    {src: '13.jpg'},
                    {src: '14.jpg'},
                    {src: '15.jpg'},
                    {src: '16.jpg'},
                    {src: '17.jpg'},
                    {src: '18.jpg'},
                    {src: '19.jpg'},
                    {src: '20.jpg'},
                    {src: '21.jpg'},
                    {src: '22.jpg'},
                    {src: '23.jpg'},
                    {src: '24.jpg'},
                    {src: '25.jpg'},
                    {src: '26.jpg'},
                    {src: '27.jpg'},
                    {src: '28.jpg'},
                    {src: '29.jpg'},
                    {src: '30.jpg'},
                    {src: '31.jpg'},
                ],
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
        methods: {
            styles(item) {
                return require(`@/assets/slider/${item.src}`)
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .gallery {
        min-height: 100vh;
        padding-top: 90px;
        padding-bottom: 90px;
        box-shadow:4px 9px 13px 1px rgba(0,0,0,0.09);
        -webkit-box-shadow:4px 9px 13px 1px rgba(0,0,0,0.09);
        -moz-box-shadow:4px 9px 13px 1px rgba(0,0,0,0.09)
    }

    .h2 {
        font-weight: normal;
        font-size: 38px;
        margin: 40px auto 40px;
        display: flex;
        justify-content: center;
    }


    .about-grid {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: wrap;
        margin: 0 -15px;
        padding: 5px 0;

        &__item {
            padding: 15px;
            width: 25%;
            transform: matrix(1, 0, 0, 1, 0, 0);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;

            h3 {
                margin-top: 0;
                margin-bottom: 0;
                min-height: 60px;
            }
        }
    }

    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .slider {
        &__image {
            height: 500px;
            width: 100%;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: 50%;
        }
    }



</style>
