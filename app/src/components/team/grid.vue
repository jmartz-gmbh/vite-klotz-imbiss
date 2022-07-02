<template>
  <div class="grid grid-cols-6 gap-2 gap-y-3">
    <div
      v-for="(item, index) in items"
      class="col-span-6 md:col-span-2 text-center"
    >
      <img
        src="https://avatars.githubusercontent.com/u/20771653?v=4"
        alt=""
        class="rounded-full mx-auto w-16"
      />
      <h2 class="font-bold text-sm mt-2">Jonathan Martz</h2>
      <p class="text-xs">Türsteher</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let items = ref([]);
items.value.push({})
items.value.push({})
items.value.push({})
items.value.push({})
items.value.push({})
items.value.push({})
</script>

<style lang="less" scoped></style>
