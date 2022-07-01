<template>
  <div v-if="card.attributes">
    <h2 class="block text-center font-bold text-xl mt-5">
      {{ card.attributes.headline }}
    </h2>
    <div class="food-card mt-3">
      <div class="tw-table block border border-black">
        <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
          <div class="col col-span-12 md:col-span-3">Titel</div>
          <div class="col col-span-12 md:col-span-9 flex justify-between">
            <span>Gericht</span>
            <span>Preis</span>
          </div>
        </div>
        <div
          v-for="(day, index) in days"
          class="row grid grid-cols-12 px-2 py-2"
        >
          <div class="col col-span-12 md:col-span-3">
            <h2 class="font-bold">{{ day.title }}</h2>
          </div>
          <div class="col col-span-12 md:col-span-9">
            <ul>
              <li
                v-for="(item, i) in day.items"
                class="flex justify-between"
                :class="{
                  'mt-2': i > 0,
                }"
              >
                <span class="block">{{ item.attributes.name }}</span>
                <span class="block"
                  >{{ item.attributes.price.toFixed(2) }} €</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

let card = ref({});
let days = ref([]);
function load() {
  const that = this;
  fetch(
    "https://catalog.klotz-imbiss.de/api/card?populate=montag,dienstag,mittwoch,donnerstag,freitag,samstag,angebot"
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      card.value = json.data;
      days.value.push({
        title: "Angebot",
        items: json.data.attributes.angebot.data,
      });
      days.value.push({
        title: "Montag",
        items: json.data.attributes.montag.data,
      });
      days.value.push({
        title: "Dienstag",
        items: json.data.attributes.dienstag.data,
      });
      days.value.push({
        title: "Mittwoch",
        items: json.data.attributes.mittwoch.data,
      });
      days.value.push({
        title: "Donnerstag",
        items: json.data.attributes.donnerstag.data,
      });
      days.value.push({
        title: "Freitag",
        items: json.data.attributes.freitag.data,
      });
      days.value.push({
        title: "Samstag",
        items: json.data.attributes.samstag.data,
      });
    });
}

onMounted(() => {
  load();
});
</script>
