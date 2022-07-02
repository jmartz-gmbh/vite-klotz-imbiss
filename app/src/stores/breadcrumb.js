import { defineStore } from "pinia";

export const useBreadcrumb = defineStore("breadcrumb", {
  state() {
    return {
      items: [],
    };
  },
  actions: {
    add: function (state) {
      this.items.push(state);
    },
  },
});
