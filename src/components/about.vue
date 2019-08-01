<template>
    <section class="about">
        <div class="container">
            <h2 class="h2">Наши преимущества УФ печати в Чебоксарах</h2>
            <p class="description">Тут может быть какое то описание, а может и не быть lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloremque iste natus nemo quam sunt. tempora ut voluptates. Expedita illo, nulla.</p>
            <div class="about-grid">

                <div class="about-grid__item">
                    <a class="gallery-card">
                        <div class="gallery-card__img">
                            <img class="img-fluid" src="https://isometric.online/wp-content/uploads/2019/07/Data_analysis_SVG.svg" alt="Workspace 2">
                        </div>
                        <h3 class="gallery-card__title">Лучшее качество печати</h3>
                    </a>
                </div>

                <div class="about-grid__item">
                    <a class="gallery-card">
                        <div class="gallery-card__img">
                            <img class="img-fluid" src="https://isometric.online/wp-content/uploads/2019/07/Degital_marketing_SVG.svg" alt="Workspace 2">
                        </div>
                        <h3 class="gallery-card__title">Понятный онлайн калькулятор</h3>
                    </a>
                </div>

                <div class="about-grid__item">
                    <a class="gallery-card">
                    <div class="gallery-card__img">
                        <img class="img-fluid" src="https://isometric.online/wp-content/uploads/2019/07/Chat_SVG.svg" alt="nice price">
                    </div>
                    <h3 class="gallery-card__title">Мгновенная обратная связь</h3>
                </a>
                </div>

                <div class="about-grid__item">
                    <a class="gallery-card">
                        <div class="gallery-card__img">
                            <img class="img-fluid" src="https://isometric.online/wp-content/uploads/2019/07/Social_media_adv_SVG.svg" alt="Workspace 2">
                        </div>
                        <h3 class="gallery-card__title">Мы есть в соцсетях</h3>
                    </a>
                </div>

                <div class="about-grid__item">
                    <a class="gallery-card">
                        <div class="gallery-card__img">
                            <img class="img-fluid" src="https://isometric.online/wp-content/uploads/2019/07/Online_banking_SVG.svg" alt="Workspace 2">
                        </div>
                        <h3 class="gallery-card__title">Онлайн платежи</h3>
                    </a>
                </div>

                <div class="about-grid__item">
                    <a class="gallery-card">
                        <div class="gallery-card__img">
                            <img class="img-fluid" src="https://isometric.online/wp-content/uploads/2019/07/Creative_process_SVG.svg" alt="Workspace 2">
                        </div>
                        <h3 class="gallery-card__title">Креативные решения</h3>
                    </a>
                </div>

                <div class="about-grid__item">
                    <a class="gallery-card">
                        <div class="gallery-card__img">
                            <img class="img-fluid" src="https://isometric.online/wp-content/uploads/2019/07/Analytics_SVG.svg" alt="Workspace 2">
                        </div>
                        <h3 class="gallery-card__title">Анализ рынка</h3>
                    </a>
                </div>

            </div>
        </div>

    </section>
</template>

<script>

    export default {
        name: 'about',
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
    .about {
        min-height: 100vh;
        padding-top: 90px;
    }
    .h2 {
        font-weight: normal;
        font-size: 32px;
    }
    .description {
        max-width: 75%;
        padding-bottom: 30px;
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
        }
    }
    .gallery-card {
        cursor: pointer;
        display: block;
        width: 100%;
        margin: 0 auto;
        padding: 1.875em 1.875em 0.875em;
        background: #FFFFFF;
        box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        text-align: center;
        transition: all 0.4s ease-in-out;
        &:hover {
            transform: translateY(-15px);
        }
    }
    .gallery-card__img {
        height: 210px;
        max-width: 210px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto 10px;
    }
    .img-fluid {
        display: block;
        max-width: 100%;
        height: auto;
    }
    .gallery-card__title {
        /*font-weight: 400;*/
        color: #666666;
        /*font-size: 0.875rem;*/
        word-wrap: break-word;
        overflow-wrap: break-word;
        max-width: 100%;
    }
</style>
