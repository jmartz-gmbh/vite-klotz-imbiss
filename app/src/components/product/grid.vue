<template>
  <div>
    <h2 class="mt-5 font-bold text-xl">Angebote</h2>
    <div class="grid grid-cols-6 mt-2 gap-2">
      <div
        v-for="(product, index) in products"
        class="col-span-6 md:col-span-2"
      >
        <product-card :identifier="product.id"></product-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductCard from '@/components/product/card.vue';

let products = ref([]);

let load = function () {
  fetch("https://catalog.klotz-imbiss.de/api/categories/1?populate=products")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      products.value = json.data.attributes.products.data;
    });
};

onMounted(function () {
  load();
});
</script>
