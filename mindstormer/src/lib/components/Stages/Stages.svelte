<script>
</script>

<div class="stages">
    <div class="container">
        <h3 class="stage__header">Этапы создания эпоксидных изделий</h3>
        <div class="stage__inner">
            <div class="stage__half stage__image-wrapper">
                <img class="stage__image" src="stages\zalivka.png" alt="" />
            </div>
            <div class="stage__half stage__text">
                <span class="stage__title">Замешивание и заливка</span>
                Первым делом происходит процесс
                <span class="bold">замешивания</span>
                смеси с добавлением смолы и отвердителя. Соединяясь, они
                образуют прозрачное вещество, затвердевающее через некоторое
                время - от 12 до 72 часов. Его используют для
                <span class="bold">заливки</span> форм, ламинирования или склеивания
                различных деталей и предметов. Застывшая эпоксидная смола устойчива
                к воздействию воды и температур.
            </div>
        </div>
        <div class="stage__inner stage__reverse">
            <div class="stage__half stage__text text-left">
                <span class="stage__title">Затвердевание и шлифовка</span>
                На данном этапе работы эпоксидную смолу оставляют в форме до
                <span class="bold">затвердевания</span>. Таким образом изделию
                придается форма и необходимая жесткость. Если требуется, после
                затвердевания фигура <span class="bold">шлифуется</span> и доводится
                до нужной формы, которую мы увидим в итоговом результате.
            </div>
            <div class="stage__half stage__image-wrapper">
                <img
                    class="stage__image image-right"
                    src="stages\shlif.jpg"
                    alt=""
                />
            </div>
        </div>
        <div class="stage__inner">
            <div class="stage__half stage__image-wrapper">
                <img class="stage__image" src="stages\furn.jpg" alt="" />
            </div>
            <div class="stage__half stage__text">
                <span class="stage__title">Добавление фурнитуры</span>
                Остаётся только то, без чего не получится ни один аксессуар -
                <span class="bold">фурнитуру</span>. Это различные подвески,
                крепления для сережек, застежки для браслетов и т.д. На ваш
                выбор при <span class="bold">индивидуальном</span> заказе будет предложен
                весь ассортимент возможной фурнитуры
            </div>
        </div>
    </div>
</div>

<style>
    .stages {
        margin-top: 120px;
    }
    .stage__inner {
        display: flex;
        margin-top: 150px;
    }
    .stage__header {
        font-size: 40px;
        font-weight: 500;
        margin: auto;
        text-align: center;
        margin-bottom: -75px;
    }
    .stage__half {
        width: 50%;
    }
    .stage__title {
        font-size: 32px;
        display: block;
        margin-bottom: 10px;
    }
    .stage__reverse .stage__image-wrapper {
        width: 500px;
    }
    .stage__image-wrapper {
        position: relative;
    }
    .stage__image {
        width: 500px;
        height: 500px;
        position: absolute;
        margin-left: unset;
        margin-top: 50px;
        z-index: -1;
        left: 150px;
        border-radius: 25px;
    }
    .stage__text {
        align-self: center;
        padding: 50px;
        font-size: 20px;
        border-radius: 25px;
        background-color: #fff;
        width: 400px;
        height: 400px;
        margin-right: 75px;
    }
    .image-right {
        left: -75px;
    }
    .text-left {
        margin-left: 150px;
        margin-right: 0;
    }
</style>
