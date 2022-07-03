<template>
  <div class="vc-header flex justify-between mt-2 text-white">
    <span
      ><router-link to="/" class="font-bold text-xl ml-2"
        >www.klotz-imbiss.de</router-link
      ></span
    >
    <nav id="desktop" class="mt-2 hidden md:flex">
      <ul class="flex space-x-3">
        <li class="mt-2">
          <router-link to="/karte">Karte</router-link>
        </li>
        <li class="mt-2">
          <router-link to="/impressum">Impressum</router-link>
        </li>
        <li><button @click="router.push('/anfrage')" class="text-sm border border-white px-2 py-2">Anfrage stellen</button></li>
      </ul>
    </nav>
    <nav id="mobile" class="flex md:hidden mr-2">
      <button v-if="store.toggle">
        <fa icon="bars" @click="store.toggle = !store.toggle" />
      </button>
      <button v-else>
        <fa icon="times" @click="store.toggle = !store.toggle" />
      </button>
    </nav>
  </div>
</template>
<script setup>
import { useNavStore } from "@/stores/nav";
import {useRouter} from 'vue-router'

let router = useRouter();
let store = useNavStore();
</script>
