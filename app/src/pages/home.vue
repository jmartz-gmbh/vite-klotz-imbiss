<template>
  <div class="vp-home">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-3 text-center">
        <h2 class="font-bold text-xl mt-24">Herzlich Willkommen</h2>
        <p class="mb-10">auf der neuen Webseite vom Imbiss Klotz.</p>
        <h2 class="mt-5 font-bold">Öffnungszeiten:</h2>
        <p class="mb-5">Montag-Samstag: 10:30 - 21:30</p>
      </div>
      <div class="col-span-6 md:col-span-3 text-center mb-5">
        <p class="mt-5 mb-3">Unser Team steht immer bereit für Fragen.</p>
        <team-grid></team-grid>
      </div>
      <div class="col-span-6 text-center">
        <p class="bg-[#00A884] text-white py-5 px-2">
          Bei Bestellungen und anderen Fragen stehen wir unter 02261 12345 zu
          Verfügung. <br />
          Ab sofort nehmen wir Bestellungen auch im Vorraus per Whatsapp (0174
          123456789) entgegen. <br />
        </p>
      </div>
      <div class="col-span-6">
        <product-grid></product-grid>
      </div>
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
