<template>
  <div class="vp-home">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-3 text-center">
        <h2 class="font-bold text-xl mt-24">Herzlich Willkommen</h2>
        <p class="mb-16">auf der neuen Webseite vom Imbiss Klotz.</p>
      </div>
      <div class="col-span-6 md:col-span-3 text-center">
        <p class="mt-10 mb-3">Unser Team steht immer bereit für Fragen.</p>
        <team-grid></team-grid>
      </div>
      <div class="col-span-6 text-center">
        <p class="border-[#00A884] border py-5 px-2">Bei Bestellungen und anderen Fragen stehen wir unter 02261 12345 zu
        Verfügung.</p>
      </div>
      <product-grid></product-grid>
    </div>
  </div>
</template>

<script>
import TeamGrid from "@/components/team/grid.vue";
import ProductGrid from "@/components/product/grid.vue";

export default {
  name: "Homepage",
  components: {
    TeamGrid,
    ProductGrid,
  },
};
</script>
