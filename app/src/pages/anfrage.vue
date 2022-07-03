<template>
  <div>
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6 md:col-span-2">
        <h2></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum
          suscipit perspiciatis cum qui sunt dolore? Ducimus amet fugiat sint
          cumque quod? Commodi reprehenderit nulla ullam cum accusantium quam
          accusamus.
        </p>
      </div>
      <div class="col-span-6 md:col-span-4">
        <div class="form bg-gray-600 px-2 py-2">
          <div class="form-group flex justify-between mt-2">
            <label class="mt-2 text-white">Name</label>
            <input type="text" v-model="form.name" class="px-2 py-2 w-3/4" />
          </div>
          <div class="form-group flex justify-between mt-2">
            <label class="mt-2 text-white">Email</label>
            <input type="email" v-model="form.email" class="px-2 py-2 w-3/4" />
          </div>
          <div class="form-group flex justify-between mt-2">
            <label class="mt-2 text-white">Nachricht</label>
            <textarea v-model="form.message" rows="10" class="w-3/4"></textarea>
          </div>
          <div class="buttons text-right mt-2">
            <button
              @click="send"
              class="border border-white px-2 py-2 text-white font-bold"
            >
              abschicken
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useBreadcrumbStore } from "@/stores/breadcrumb";
import { useMessagesStore } from "@/stores/messages.js";

let store = useBreadcrumbStore();

let form = ref({
  name: "",
  email: "",
  message: "",
});

onMounted(function () {
  store.add({
    link: "/anfrage",
    label: "Anfrage",
  });
});

let send = function () {
  fetch("https://contact.klotz-imbiss.de/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      if (!json.error) {
        form.value.name = "";
        form.value.email = "";
        form.value.message = "";

        let messages = useMessagesStore();
        messages.add({
          typ: "info",
          message: "Anfrage wurde entgegen genommen",
        });
      }
    });
};
</script>
