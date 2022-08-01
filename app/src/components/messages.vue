<template>
  <div class="mx-auto max-w-5xl">
    <ul>
      <li v-for="(message, index) in messages" :class="{
        'flex px-2 py-2': true,
        'bg-red-600 text-white': message.typ == 'info'
      }">
        <div class="icon mr-2">
          <fa v-if="message.typ == 'info'" icon="info" />
        </div>
        <div class="message">{{ message.message }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useMessagesStore } from "@/stores/messages.js";

let store = useMessagesStore();

let messages = computed(function () {
  return store.items;
});
</script>
