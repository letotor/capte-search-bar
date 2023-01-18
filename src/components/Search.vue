<template>
  <div class="search-barre">
    <input
      type="text"
      class="search-input"
      v-model="searchTerm"
      placeholder="Search for a product"
    />

    <div>
      <span v-if="isError" class="error"></span>
      <span
        v-else
        class="loader"
        :style="!isLoading ? { visibility: 'hidden' } : { visibility: 'visible' }"
      ></span>
    </div>

    <div
      v-if="dataProducts.products.length > 0 && searchTerm.length > 0"
      class="search-results"
      :style="{ height: `${heightResult}` }"
    >
      <ul class="search-results-list">
        <li v-for="product in dataProducts.products.slice(0, 30)">
          <p>{{ product.title }} - {{ product.price }}$</p>
          <div :style="{ fontSize: '0.7rem' }">{{ product.description }}</div>
          <span class="categorie" :class="product.category">{{ product.category }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, computed } from "vue";
import debounce from "lodash/debounce";
import Product from "../interfaces/product.interface";

const searchTerm = ref("");
let dataProducts = reactive<{
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}>({ products: [], total: 0, skip: 0, limit: 0 });

const isLoading = ref(false);
const isError = ref(false);
const isResultHidden = ref(true);

const debouncedSearch = debounce(async () => {
  if (searchTerm.value == "") {
    dataProducts = { products: [], total: 0, skip: 0, limit: 0 };
    return;
  }
  isError.value = false;
  isLoading.value = true;
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchTerm.value}`
    );
    if (response.status == 200) {
      dataProducts = await response.json();
      console.log(dataProducts);
    } else {
      dataProducts = { products: [], total: 0, skip: 0, limit: 0 };
    }
    // user case server error
    if (response.status == 500) {
      isError.value = true;
    }
  } catch (error) {
    console.log(error);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
}, 1000);

const heightResult = computed(() => {
  if (dataProducts.products.length > 0 && searchTerm.value.length > 0) {
    if (dataProducts.products.length == 1) {
      return "140px";
    }
    if (dataProducts.products.length == 2) {
      return "230px";
    }
    if (dataProducts.products.length == 3) {
      return "375px";
    }
    if (dataProducts.products.length > 3) {
      return "450px";
    }
  }
});

watch(searchTerm, debouncedSearch);
</script>

<style scoped lang="scss">
.menu-barre {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: var(--bg-primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 5rem;
  position: sticky;
  top: 0;
  z-index: 1;

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 100%;
      object-fit: cover;
      height: 3rem;
    }
    .logo-text {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--bg-secondary);
    }
  }
  .search-barre {
    display: flex;
    flex-direction: row no-wrap;
    gap: 1rem;
    align-items: center;

    .search-input {
      width: 100%;
      height: 3rem;
      border: none;
      border-radius: 0.5rem;
      padding: 0 1rem;
      font-size: 1.2rem;
      outline: none;
      border: 0px solid var(--bg-secondary);
    }
  }

  .loader {
    visibility: hidden;
    align-items: middle;
    width: 32px;
    height: 32px;
    padding: 10px;
    border: 6px solid #fff;
    border-bottom-color: var(--bg-secondary);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .error {
    //visibility: hidden;
    align-items: middle;
    width: 32px;
    height: 32px;
    padding: 10px;
    border: 6px solid #fff;
    border-color: red;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: light 1s linear infinite;
    @keyframes light {
      0% {
        border-color: red;
      }
      50% {
        border-color: #fff;
      }
      100% {
        border-color: red;
      }
    }
  }
}

.search-results {
  position: absolute;
  right: 78px;
  top: 32px;
  width: 287px;

  //height: 400px;
  border: 1px solid var(--bg-secondary);
  border-top: none;
  border-radius: 0.5rem;
  background: var(--bg-secondary);
  gap: 1rem;
  margin: 2rem 0;
  z-index: 99;
  overflow-y: scroll;
  overflow-x: hidden;
  inset-block-end: 20px;

  /* Global */
  &::-webkit-scrollbar {
    width: 16px;
  }
  /* Fond */
  &::-webkit-scrollbar-track {
    position: relative;
    box-shadow: inset -5px 0 0 1px #7433bf, inset -9px 0 0 1px #7433bf;
  }
  /* Ascenseur */
  &::-webkit-scrollbar-thumb {
    background: #c983e1;
    border-radius: 8px;
    border-top: 1px white solid;
    box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.45),
      inset 0 0 5px 2px rgba(255, 255, 255, 0.4);
  }
  /*Angle*/
  &::-webkit-scrollbar-corner {
    background: #c983e1;
  }

  /* Boutons */
  &::-webkit-scrollbar-button:single-button {
    display: block;
    border-style: solid;
    height: 20px;
    width: 16px;
  }
  /* Haut */
  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    border-width: 0 8px 12px 8px;
    border-color: transparent transparent #c983e1 transparent;
  }
  &::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
    border-color: transparent transparent #c983e1 transparent;
  }
  /* Bas */
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    border-width: 12px 8px 0 8px;
    border-color: #c983e1 transparent transparent transparent;
  }
  &::-webkit-scrollbar-button:single-button:vertical:increment:hover {
    border-color: #c983e1 transparent transparent transparent;
  }

  .search-results-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;

    li {
      position: relative;
      opacity: 1;
      padding: 1rem;
      border-radius: 0.5rem;
      background-color: white;
      color: var(--bg-primary);
      font-size: 1.2rem;
      font-weight: 600;
      border-bottom: 1px solid var(--bg-primary);
      &:hover {
        cursor: pointer;
        background-color: var(--bg-secondary);
        color: white;
        border: 1px solid white;
      }
    }
    .categorie {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--bg-primary);
      //border: 1px solid var(--bg-primary);
      border-radius: 3px;
      padding: 0.1rem;
      margin: 0.1rem 0.2rem;
      background-color: var(--bg-test);
      opacity: 0.6;
      color: white;
      &.groceries {
        background-color: rgb(255, 183, 0);
      }
      &.smartphones {
        background-color: blue;
      }
      &.laptops {
        background-color: rgb(157, 0, 255);
      }
      &.fragrances {
        background-color: rgb(157, 0, 255);
      }
      &.skincare {
        background-color: rgb(0, 200, 255);
      }
      &.home-decoration {
        background-color: rgb(0, 255, 102);
      }
      &.furniture {
        background-color: rgb(255, 102, 0);
      }
      &.tops {
        background-color: rgb(255, 217, 0);
      }
      &.womens-dresse {
        background-color: rgb(255, 157, 0);
      }
      &.lighting {
        background-color: rgb(255, 0, 102);
      }
      &.automotive {
        background-color: rgb(255, 0, 225);
      }
      &.sunglasses {
        background-color: rgb(145, 255, 0);
      }
    }
  }
}
</style>
