<template>
  <div v-if="product.attributes" class="card">
    <img
      v-if="product.attributes.media.data"
      :src="
        'https://catalog.klotz-imbiss.de' +
        product.attributes.media.data[0].attributes.url
      "
      alt=""
    />
    <div class="flex justify-between">
      <h2 class="text-sm px-2 py-2">{{ product.attributes.name }}</h2>
      <span class="px-2 py-2">{{ product.attributes.price.toFixed(2) }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

let props = defineProps(["identifier"]);

let product = ref({});

let load = function () {
  fetch(
    "https://catalog.klotz-imbiss.de/api/products/" +
      props.identifier +
      "?populate=media"
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      product.value = json.data;
    });
};

onMounted(function () {
  load();
});
</script>
