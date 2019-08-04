<template>
    <section id="contacts" class="contacts">
        <div class="container">
            <h2 class="h2">Контакты</h2>
            <div class="description">
                «РЕЗИДЕНТ ПРИНТ» <br>
                Прямая УФ-печать в Чебоксарах
            </div>
            <div class="adress">Наш адресс: г. Чебоксары, Президентский б-р, д. 11</div>
            <div class="phone"><a class="link" href="tel:88352624245" data-rel="external">8 (8352) 62-42-45 </a><br>
                <a class="link" href="tel:89623213049" data-rel="external">8 (962) 321-30-49</a>
            </div>
            <div class="mail">
                <a class="link" href="mailto:info@chebprint.ru">info@chebprint.ru</a>
                <br>
                <a class="link" href="mailto:chebprint@yandex.ru">chebprint@yandex.ru</a>
            </div>
            <div class="socials">
                <a href="https://www.instagram.com/rezidentprint/" target="_blank"><div class="insta"></div></a>
                <a href="https://vk.com/club135755779" target="_blank"><div class="vk"></div></a>
                <a href="https://www.facebook.com/people/%D0%A0%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%82-%D0%9F%D1%80%D0%B8%D0%BD%D1%82/100016215182325" target="_blank"><div class="fb"></div></a>
            </div>
            <div class="map-wrap">
                <iframe src="https://yandex.ru/map-widget/v1/-/CGqlUL2~" width="100%" height="100%" frameborder="0"
                        allowfullscreen="true"></iframe>
            </div>
        </div>

    </section>
</template>

<script>

    export default {
        name: 'contacts',
        components: {},
        data() {
            return {}
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .contacts {
        padding-top: 90px;
        padding-bottom: 90px;
        box-shadow: 4px 9px 13px 1px rgba(0, 0, 0, 0.09);
        -webkit-box-shadow: 4px 9px 13px 1px rgba(0, 0, 0, 0.09);
        -moz-box-shadow: 4px 9px 13px 1px rgba(0, 0, 0, 0.09)
    }

    .h2 {
        font-weight: normal;
        font-size: 38px;
        margin: 40px auto 40px;
        display: flex;
        justify-content: center;
    }

    .description {
        font-size: 24px;
        padding-bottom: 30px;
    }

    .adress {
        font-size: 22px;
        padding-bottom: 20px;
    }
    .map-wrap {
        height: 600px;
        width: 100%;
        margin-top: 60px;
    }

    .link {
        cursor: pointer;
        display: inline-block;
        position: relative;
        text-decoration: none;
        color: $dark;
        font-size: 18px;
        padding: 10px 0;
        &:hover {
            &::after {
                transform: scaleX(1);
            }
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            bottom: 5px;
            background-color: $dark;
            height: 1px;
            transform: scaleX(0);
            transform-origin: left center;
            transition: transform 0.3s;
        }
    }

    .phone {
        position: relative;
        padding-left: 35px;
        &::before {
            position: absolute;
            content: '';
            display: block;
            width: 20px;
            height: 20px;
            left: 0;
            top: 10px;
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 512 512'%3E%3Cpath d='M499 395l-104-69c-13-9-31-6-41 6l-30 39c-4 5-11 7-16 4l-6-3c-19-11-43-24-90-71s-61-72-71-91l-4-6c-3-5-1-12 4-16l39-30c12-10 15-28 6-41L117 13C108 0 90-4 76 4L33 30C20 38 10 51 5 67c-15 56-4 155 141 299 115 115 201 146 259 146 14 0 27-2 41-5 15-4 28-14 36-28l26-43c8-14 4-32-9-41zm-6 32l-26 43c-6 10-15 17-26 20-52 15-144 3-283-136S7 124 22 71c3-11 10-20 20-26l43-26c6-4 14-2 18 4l37 56 32 48c4 5 2 13-3 17l-39 30c-12 9-15 26-8 39l3 5c11 20 25 45 74 95 50 49 75 63 95 74l5 3c13 7 30 4 39-8l30-39c4-5 12-7 17-3l104 69c6 4 8 12 4 18zM290 85c80 0 145 65 145 145a9 9 0 1 0 17 0c0-89-72-162-162-162a9 9 0 1 0 0 17z'/%3E%3Cpath d='M290 137c52 0 94 42 94 93a9 9 0 0 0 17 0c0-61-50-110-111-110a9 9 0 1 0 0 17z'/%3E%3Cpath d='M290 188c24 0 43 19 43 42a9 9 0 0 0 17 0c0-33-27-59-60-59a9 9 0 1 0 0 17z'/%3E%3C/svg%3E");
            -webkit-background-size: cover;
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
        }
    }

    .mail {
        padding-left: 35px;
        position: relative;
        &::before {
            position: absolute;
            content: '';
            display: block;
            width: 20px;
            height: 20px;
            left: 0;
            top: 10px;
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 512 512'%3E%3Cpath d='M512 196v-2l-1-1-1-2-1-1v-1l-82-63V60c0-14-12-26-26-26h-92L272 5c-10-7-22-7-32 0l-37 29h-92c-14 0-26 12-26 26v66L3 189v1l-1 1-1 2-1 1v292c0 6 2 11 5 15v1c5 6 13 10 21 10h460c8 0 16-4 21-10v-1c3-4 5-9 5-15V196zM251 19c3-3 7-3 10 0l20 15h-50l20-15zM28 495l223-173c3-3 7-3 10 0l223 173H28zm467-13L272 308c-10-7-22-7-32 0L17 482V209l140 109a9 9 0 1 0 10-14L25 194l60-47v66a9 9 0 0 0 17 0V60c0-5 4-9 9-9h290c5 0 9 4 9 9v153a9 9 0 1 0 17 0v-66l60 47-143 111a9 9 0 1 0 11 13l140-109v273z'/%3E%3Cpath d='M358 205v-34a102 102 0 1 0-102 102 9 9 0 1 0 0-17 85 85 0 1 1 85-85v34a17 17 0 1 1-34 0v-34a9 9 0 1 0-17 0 34 34 0 1 1-34-34 9 9 0 1 0 0-18 51 51 0 1 0 34 89 34 34 0 0 0 68-3z'/%3E%3C/svg%3E");
            -webkit-background-size: cover;
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
        }
    }
    .socials {
        padding-top: 25px;
        padding-left: 25px;
        display: flex;
        align-items: center;
    }
    .insta, .vk, .fb {
        margin: 0 12px;
        cursor: pointer;
        width: 30px;
        height: 30px;
        background-position: 50%;
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .insta {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 512 512'%3E%3Cpath d='M352 0H160C72 0 0 72 0 160v192c0 88 72 160 160 160h192c88 0 160-72 160-160V160C512 72 440 0 352 0zm112 352c0 62-50 112-112 112H160c-62 0-112-50-112-112V160C48 98 98 48 160 48h192c62 0 112 50 112 112v192z'/%3E%3Cpath d='M256 128a128 128 0 1 0 0 256 128 128 0 0 0 0-256zm0 208a80 80 0 1 1 0-160 80 80 0 0 1 0 160z'/%3E%3Ccircle cx='394' cy='118' r='17'/%3E%3C/svg%3E");
        &:hover {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 551 551'%3E%3ClinearGradient id='a' x1='276' x2='276' y1='5' y2='550' gradientTransform='matrix(1 0 0 -1 0 554)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23e09b3d'/%3E%3Cstop offset='0' stop-color='%23c74c4d'/%3E%3Cstop offset='1' stop-color='%23c21975'/%3E%3Cstop offset='1' stop-color='%237024c4'/%3E%3C/linearGradient%3E%3Cpath fill='url(%23a)' d='M387 0H164C74 0 0 74 0 164v223c0 90 74 164 164 164h223c90 0 164-74 164-164V164C551 74 477 0 387 0zm109 387c0 60-49 109-109 109H164c-60 0-109-49-109-109V164c0-60 49-109 109-109h223c60 0 109 49 109 109v223z'/%3E%3ClinearGradient id='b' x1='276' x2='276' y1='5' y2='550' gradientTransform='matrix(1 0 0 -1 0 554)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23e09b3d'/%3E%3Cstop offset='0' stop-color='%23c74c4d'/%3E%3Cstop offset='1' stop-color='%23c21975'/%3E%3Cstop offset='1' stop-color='%237024c4'/%3E%3C/linearGradient%3E%3Cpath fill='url(%23b)' d='M276 133a143 143 0 1 0 0 285 143 143 0 0 0 0-285zm0 230a87 87 0 1 1 0-175 87 87 0 0 1 0 175z'/%3E%3ClinearGradient id='c' x1='418' x2='418' y1='5' y2='550' gradientTransform='matrix(1 0 0 -1 0 554)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23e09b3d'/%3E%3Cstop offset='0' stop-color='%23c74c4d'/%3E%3Cstop offset='1' stop-color='%23c21975'/%3E%3Cstop offset='1' stop-color='%237024c4'/%3E%3C/linearGradient%3E%3Ccircle cx='418' cy='134' r='34' fill='url(%23c)'/%3E%3C/svg%3E");
        }
    }
    .vk {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 304 304'%3E%3Cpath fill-rule='evenodd' d='M262 176c10 9 21 19 30 30 4 4 8 9 10 15 5 8 1 17-6 17h-45c-11 1-20-4-28-11l-18-20-8-7c-6-4-11-3-14 4-4 6-5 13-5 20 0 11-4 14-14 14-23 1-44-2-64-14-17-9-31-24-42-39-23-32-41-66-56-101-4-8-1-12 7-12h44c6 0 9 4 12 9 8 19 17 38 29 55l11 12c5 3 9 2 12-4l2-11c1-13 2-27 0-40-2-8-6-14-15-15-4-1-3-3-1-5 3-4 7-7 13-7h51c7 2 9 5 10 13v56c0 3 2 12 7 14 5 1 8-2 10-5 12-13 21-28 29-43l9-21c2-6 5-8 11-8h53c8 2 10 5 7 13-4 12-11 23-19 33l-24 33c-8 11-7 16 2 25zm0 0' clip-rule='evenodd'/%3E%3C/svg%3E");
        &:hover {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 512 512'%3E%3Cpath fill='%23436eab' d='M441 295c17 17 35 33 50 51 7 8 13 16 18 26 7 13 0 28-12 29h-74c-19 1-35-7-48-20l-29-32-14-12c-10-7-19-5-25 6s-7 23-8 35c0 17-6 22-23 23-38 1-74-4-107-23-29-17-52-41-72-68-38-52-68-109-94-168-6-13-2-21 13-21h73c10 0 16 6 20 15 13 33 29 64 49 92 6 8 11 15 19 21 9 6 15 4 19-6 3-6 4-13 5-19 2-23 2-45-1-68-3-14-10-23-24-25-8-2-6-4-3-8 6-8 12-12 23-12h84c13 3 16 9 18 22v94c0 5 3 20 12 24 8 2 12-4 17-9 20-21 35-46 47-73l16-35c3-9 9-13 19-13h88c14 3 18 9 13 22-6 21-19 38-32 56l-41 56c-13 17-12 25 4 40z'/%3E%3C/svg%3E");
        }
    }
    .fb {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' version='1'%3E%3Cpath d='M90 15c0-8-7-15-15-15H15C7 0 0 7 0 15v60c0 8 7 15 15 15h30V56H34V41h11v-6c0-10 8-19 17-19h12v15H62c-1 0-3 2-3 4v6h15v15H59v34h16c8 0 15-7 15-15V15z'/%3E%3C/svg%3E");
        &:hover {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 409 409'%3E%3Cpath fill='%23475993' d='M354 0H55C25 0 0 25 0 55v299c0 30 25 55 55 55h147l1-146h-38c-5 0-9-4-9-9v-47c0-5 4-9 8-9h38v-46c0-53 33-81 80-81h38c5 0 9 4 9 9v39c0 5-4 9-9 9h-23c-26 0-31 12-31 30v40h56c6 0 10 4 9 10l-5 47c-1 4-5 8-9 8h-51v146h88c30 0 55-25 55-55V55c0-30-25-55-55-55z'/%3E%3C/svg%3E");
        }
    }
</style>
