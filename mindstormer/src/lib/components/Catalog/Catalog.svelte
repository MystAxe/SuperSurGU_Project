<script>
  // @ts-ignore
  import { api } from "$lib/database/products.ts";
  import Modal from "$lib/components/Popup.svelte";
  let showModal = false;
  import Product from "$lib/components/Catalog/Product.svelte";
  $: products = api.getProducts();

  function onChange() {
    showModal = true;
  }

  function sortingUp() {
    products.items.sort(function (a, b) {
      return a.price - b.price;
    });
    products = products;
  }

  function sortingDown() {
    products.items.sort(function (a, b) {
      return b.price - a.price;
    });
    products = products;
  }
</script>

<section class="products">
  <div class="container">
    <h3 class="products__header">Готовые изделия</h3>
    <div class="products__sorting">
      <button class="button" on:click={sortingUp}><span>Отсортировать по возрастанию цены</span></button>
      <button class="button" on:click={sortingDown}><span>Отсортировать по убыванию цены</span></button>
    </div>
    <div class="products__inner">
      {#each products.items as product}
        {#key product.article}
          <Product
            gallery={product.gallery}
            price={product.price}
            title={product.title}
            descr={product.descr}
            on:showModal={onChange}
          />
        {/key}
      {/each}
    </div>
  </div>
</section>

<Modal bind:showModal>
  <img class="modal__image" src="tglink3.jpg" alt="" />
  <div class="modal__decsription">
    Перед оформлением заказа рекомендую прочитать <a
      class="modal__tofaq"
      href="faq">инструкцию</a
    >. Чтобы оформить заказ, можете перейти в телеграм с помощью QR-кода или по
    ссылке ниже.
  </div>
  <a class="modal__tglink" href="https://t.me/MystAxe">https://t.me/MystAxe</a>
</Modal>

<style>
  .products__sorting {
    margin-top: 20px;
    text-align: center;
  }

  .button {
    font-size: 20px;
    border: #000 solid 1px;
    border-radius: 5px;
    padding: 5px 10px 7px;
    text-decoration: none;
    color: #000;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
  }

  .button span {
    position: relative;
    z-index: 5;
  }
  .button::before {
    content: "";
    background-color: #000;
    border-radius: 4px;
    height: 42px;
    width: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .button span,
  .button::before {
    transition: all 0.3s;
  }
  .button:hover span {
    color: #fff;
  }
  .button:hover::before {
    width: 100%;
  }

  .products__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
  }

  .products__header {
    font-size: 40px;
    font-weight: 500;
    margin: auto;
    text-align: center;
    margin-top: 50px;
  }

  .modal__image {
    width: 100%;
    height: auto;
  }

  .modal__decsription {
    margin-bottom: 10px;
  }

  .modal__tofaq,
  .modal__tglink {
    color: #000;
    transition: 0.1s ease all;
  }

  .modal__tofaq:hover,
  .modal__tglink:hover {
    color: #666;
  }

  .modal__tglink {
    color: #000;
    text-decoration: none;
    font-size: 20px;
  }
</style>
