<template>
    <section class="partners">
        <div class="container">
            <h2 class="h2">Наши партненры</h2>
            <div class="partners-gallery">
                <div class="partners-gallery__row">
                    <img src="../assets/partners/1.jpg" alt="анюта">
                    <img src="../assets/partners/2.jpg" alt="про город">
                    <img src="../assets/partners/3.jpg" alt="сотовый рай">
                    <img src="../assets/partners/4.jpg" alt="абрис">
                    <img src="../assets/partners/5.jpg" alt="hevel">
                    <img src="../assets/partners/17.jpg" alt="hevel">
                </div>
                <div class="partners-gallery__row">
                    <img src="../assets/partners/6.jpg" alt="графика">
                    <img src="../assets/partners/7.jpg" alt="гимназия №5">
                    <img src="../assets/partners/8.jpg" alt="алтис">
                    <img src="../assets/partners/9.jpg" alt="Чебоксары-лада">
                    <img src="../assets/partners/10.jpg" alt="Промсвязьбанк">
                    <img src="../assets/partners/11.jpg" alt="Твоя реклама">
                </div>
                <div class="partners-gallery__row">
                    <img src="../assets/partners/12.jpg" alt="Антей фотосервис">
                    <img src="../assets/partners/13.jpg" alt="Училище олимпийского резерва">
                    <img src="../assets/partners/14.jpg" alt="эстет">
                    <img src="../assets/partners/15.jpg" alt="geona">
                    <img src="../assets/partners/16.jpg" alt="anta">
                </div>
            </div>
        </div>

    </section>
</template>

<script>

    export default {
        name: 'partners',
        components: {},
        data() {
            return {}
        },
        props: {
            msg: String
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .partners {
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

    .partners-gallery {
        display: flex;
        flex-direction: column;
        &__row {
            display: flex;
            padding-bottom: 20px;
            padding-top: 20px;
            img {
                max-width: 16.67%;
                padding: 15px;
                filter: grayscale(100%);
                transition: 0.2s;
                &:hover {
                    filter: grayscale(0);
                }
            }
        }
    }



</style>
