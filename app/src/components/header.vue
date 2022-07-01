<template>
  <div class="vc-header flex justify-between mt-2 text-white">
    <span><router-link to="/" class="font-bold text-xl ml-2">www.klotz-imbiss.de</router-link></span>
    <nav class="mt-2">
      <ul class="flex space-x-3">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/karte">Karte</router-link>
        </li>
        <li>
          <router-link to="/impressum">Impressum</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
