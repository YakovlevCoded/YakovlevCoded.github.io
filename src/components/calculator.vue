<template>
    <section id="calculator" class="calc">
        <div class="container">
            <h2 class="h2">Онлайн калькулятор УФ печати</h2>
            <div class="calculator">
                <div class="caclulator__column">
                    <p>Выберете материал</p>
                    <v-select v-model="selected" :options="['Металл','Акрилл', 'Пластик', 'Искусственный камин', 'Мой материал', 'Дерево', 'Оракал', 'Пвх', 'ПЭТ', 'Вспененный картон', 'Текстиль']"></v-select>
                </div>
                <!--<div class="caclulator__column">-->
                    <!--<p>Выберете еденицы измерения</p>-->
                    <!--<v-select v-model="units" :options="['мм','см', 'м']"></v-select>-->
                <!--</div>-->
                <div class="caclulator__column">
                    <p>Укажите длинну ({{ units }})</p>
                    <input v-model="width" placeholder="Длинна">
                </div>
                <div class="caclulator__column">
                    <p>Укажите ширину ({{ units }})</p>
                    <input v-model="height" placeholder="Ширина">
                </div>
            </div>
            <div class="result">
                <p>Ваша площадь: {{ area.toFixed( 2 ) }} {{units}}<sup>2</sup></p>
                <p>Итоговая цена: <span>{{ price.toFixed( 0 ) }}</span> руб</p>
                <button class="btn small-grad-btn" @click="showModal">Заказать</button>
            </div>
        </div>

    </section>
</template>

<script>
    import vSelect from 'vue-select'

    export default {
        name: 'calculator',
        components: {
            'v-select': vSelect
        },
        data() {
            return {
                selected: 'Металл',
                units: 'м',
                width : '',
                height : ''
            }
        },
        methods: {
            showModal () {
                this.$modal.show('modal');
            },
            hideModal () {
                this.$modal.hide('modal');
            }
        },
        computed: {
            area: function () {
               return this.width * this.height || 0;
            },
            price: function () {
                let price = 0;
                let rate = 1000;
                let koef = 0;
                let material = 1;
                // if (this.units == 'мм') {
                //     rate = 1
                // } else if (this.units == 'см') {
                //     rate = 10
                // } else {
                //     rate = 1000
                // }
                if (this.selected !== 'Пвх') {
                    material = 0.3;
                }

                let currentArea = this.area*rate*rate;

                if (currentArea <= 1000000 && currentArea > 0) {
                    koef = 9000;
                } else
                    if (currentArea > 1000000 && currentArea <= 2000000 && currentArea > 0) {
                        koef = 8000;
                    } else
                    if (currentArea > 2000000 && currentArea <= 5000000 && currentArea > 0) {
                        koef = 6500;
                    } else
                        if (currentArea > 5000000 && currentArea > 0) {
                            koef = 5000;
                        }
                price = koef * currentArea/1000000 * material;
                return price
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .calc {
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

    .calculator {
        display: flex;
        justify-content: space-around;
        .caclulator__column {
            width: 25%;
            padding: 0 10px;
        }
        input {
            width: 100%;
            height: 36px;
            font-family: inherit;
            color: #000;
            font-size: 14px;
            padding: 0 10px 4px;
            background: none;
            border: 1px solid rgba(60, 60, 60, 0.26);
            border-radius: 4px;
        }
    }
    .result {
        margin-top: 20px;
        margin-left: 50px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        p {padding: 10px;
            padding-right: 20px;
            margin-bottom: 0;
            font-size: 22px;}
    }

    @media screen and (max-width: 767px) {
        .result {
            margin-left: 0;
        }
    }


</style>
