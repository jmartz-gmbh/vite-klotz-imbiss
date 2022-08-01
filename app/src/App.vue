<template>
  <div class="app">
    <header class="mx-auto max-w-5xl px-2 py-2">
      <header-general></header-general>
    </header>
    <messages></messages>
    <main class="mx-auto max-w-5xl bg-white px-2 py-2 mt-2 min-h-screen">
      <breadcrumb></breadcrumb>
      <router-view></router-view>
    </main>
    <footer class="mx-auto max-w-5xl px-2 py-2 mt-2">
      <footer-general></footer-general>
    </footer>
  </div>
</template>
<script>
import header from "@/components/header.vue";
import footer from "@/components/footer.vue";
import messages from "@/components/messages.vue";
import breadcrumb from "@/components/breadcrumb.vue";
import { useMessagesStore } from "@/stores/messages.js";
import { useBreadcrumbStore } from "@/stores/breadcrumb.js";
import "./tailwind.css";

export default {
  name: "App",
  components: {
    "header-general": header,
    "footer-general": footer,
    messages,
    breadcrumb,
  },
  mounted() {
    let store = useMessagesStore();
    store.add({
      typ: "info",
      message: "Dies ist nicht die offizielle Webseit der vom Imbiss Klotz.",
    });
  },
  watch: {
    $route: function () {
      let store = useBreadcrumbStore();
      window.scrollTo({ top: 0, behavior: "smooth" });
      store.reset();
    },
  },
};
</script>

<style lang="less">
.app {
  background: linear-gradient(-45deg, #ee7752, #e73c7e);
  background-size: auto;
}
</style>
