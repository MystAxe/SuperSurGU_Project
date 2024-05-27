<section class="accordion">
  <div class="container">
    <h3 class="accordion__header">Часто задаваемые вопросы</h3>
    <div class="accordion__inner">
      <div class="tab">
        <input type="checkbox" name="accordion-1" id="cb1" checked />
        <label for="cb1" class="tab__label">Как осуществляется покупка?</label>
        <div class="tab__content">
          <p>
            1. В каталоге нужно выбрать заинтересовавший вас товар и нажать
            кнопку "купить" <br />
            2. Далее вы связываетесь со мной через ссылку на телеграм или QR-код
            <br />
            3. Мы договариваемся об оплате, доставке и ваших пожеланиях к заказу
            <br />
            4. Вы оплачиваете товар <br />
            5. В зависимости от способа получения изделие попадает в ваши руки!
          </p>
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" name="accordion-2" id="cb2" />
        <label for="cb2" class="tab__label"
          >Какими средствами оплаты можно пользоваться?</label
        >
        <div class="tab__content">
          <p>
            Наличный расчет, перевод на банковскую карту через любой банк, СБП
          </p>
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" name="accordion-3" id="cb3" />
        <label for="cb3" class="tab__label"
          >Можно ли заказать изделия, не представленные в каталоге?</label
        >
        <div class="tab__content">
          <p>Конечно! Укажите в личных сообщениях свои пожелания :)</p>
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" name="accordion-4" id="cb4" />
        <label for="cb4" class="tab__label"
          >Меня не устроило изделие. Что делать?</label
        >
        <div class="tab__content">
          <p>
            Свяжитесь со мной и мы обсудим детали процесса возврата или найдём
            другое решение.
          </p>
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" name="accordion-5" id="cb5" />
        <label for="cb5" class="tab__label">Условия возврата</label>
        <div class="tab__content">
          <p>
            Вы можете вернуть товар в течение 2-ух недель с момента покупки при
            сохранении товарного вида изделия, наличии документа об оплате и
            неповрежденной упаковки. Также возможен возврат в случае покупки
            бракованного товара(для уточнения условий свяжитесь с продавцом)
          </p>
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" name="accordion-6" id="cb6" />
        <label for="cb6" class="tab__label">Как связаться с продавцом?</label>
        <div class="tab__content">
          <p>
            Связаться со мной можно по данным ссылкам:
            <br />
            <a class="tab__link" href="https://t.me/MystAxe"
              >https://t.me/MystAxe</a
            >
            <br />
            <a class="tab__link" href="https://vk.com/mystaxe"
              >https://vk.com/mystaxe</a
            >
          </p>
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" name="accordion-7" id="cb7" />
        <label for="cb7" class="tab__label">Местоположение магазина</label>
        <div class="tab__content">
          <p>
            Ханты-Мансийский автономный округ, Сургут, ул. Энергетиков, д. 22,
            628408
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .accordion {
    margin-top: 50px;
  }

  .accordion__header {
    font-size: 40px;
    font-weight: 500;
    margin: auto;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }

  .tab input {
    position: absolute;
    opacity: 0;
    z-index: -1;
    display: none;
  }
  .tab__content {
    max-height: 0;
    overflow: hidden;
    transition: all 0.35s ease;
  }
  .tab input:checked ~ .tab__content {
    max-height: 250px;
  }

  .accordion__inner {
    color: var(--theme);
    /* border: 2px solid; */
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .tab {
    background-color: #fff;
    margin-top: 10px;
    border-radius: 25px;
    font-size: 20px;
  }

  .tab__label {
    display: flex;
    color: #000;
    background-color: #fff;
    cursor: pointer;
    justify-content: space-between;
    padding: 1rem;
    font-size: 24px;
    border-radius: 25px;
    border-bottom: 2px #eee solid;
  }
  .tab__label::after {
    content: "\276F";
    width: 1em;
    height: 1em;
    text-align: center;
    transform: rotate(90deg);
    transition: all 0.25s;
  }
  .tab input:checked + .tab__label::after {
    transform: rotate(270deg) translateY(-11px);
  }

  .tab__content p {
    margin: 0;
    padding: 20px 25px;
  }

  .tab__link {
    color: #000;
  }

  .tab input:checked ~ .tab__label {
    border-bottom: 2px solid #eee;
    border-radius: 25px 25px 0 0;
  }

  .tab input:checked ~ .tab__content {
  }
</style>
