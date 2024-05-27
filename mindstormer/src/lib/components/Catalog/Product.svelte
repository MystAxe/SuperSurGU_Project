<script lang="ts">
  import type { IProduct } from "../../database/products.ts";

  export let gallery: string;
  export let title: string;
  export let descr: string;
  export let price: number;

  import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
  function onChange() {
    dispatch('showModal')
  }
</script>

<div class="product slide-right">
  <div class="product__image-wrapper">
    <img class="product__image" src={gallery} alt="" />
  </div>
  <div class="product__info">
    <div class="product__title">{title}</div>
    <hr />
    <div class="product__descr">
      {descr}
    </div>
    <div class="product__buy">
      <div class="product__price">{price} ₽</div>
      <a class="product__buy-btn" on:click={onChange}><span>Купить</span></a>
    </div>
  </div>
</div>

<style>
  .product {
    margin-bottom: 4%;
    align-self: center;
    padding: 0;
    font-size: 20px;
    border-radius: 25px;
    background-color: #fff;
    width: 47%;
    height: auto;
    padding: 5px;
  }

  .product:nth-child(even) {
    transform: translateY(20%);
  }

  .product__image {
    width: 100%;
    height: auto;
    border-radius: 5px;
    border-radius: 20px;
  }

  .product__info {
    padding: 20px;
  }

  .product__title {
    font-size: 28px;
    display: block;
    margin-bottom: 10px;
  }

  .product__descr {
    margin-bottom: 20px;
  }

  .product__buy {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
    font-size: 24px;
  }

  .product__buy-btn {
    font-size: 24px;
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

  .product__buy-btn span {
    position: relative;
    z-index: 10;
  }
  .product__buy-btn::before {
    content: "";
    background-color: #000;
    border-radius: 4px;
    height: 46px;
    width: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .product__buy-btn span,
  .product__buy-btn::before {
    transition: all 0.3s;
  }
  .product__buy-btn:hover span {
    color: #fff;
  }
  .product__buy-btn:hover::before {
    width: 100%;
  }

  .slide-right:nth-child(odd) {
    animation: slide-right 1s ease both;
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(-100px);
      transform: translateY(20%);
      transform: translateX(-100px);
      transform: translate(-100px, 20%);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      transform: translateY(0);
    }
  }

  .slide-right:nth-child(even) {
    animation: slide-left 1s ease both;
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      transform: translateY(20%);
    }
  }
</style>
