import { defineStore } from "pinia";

export const useBreadcrumbStore = defineStore("breadcrumb", {
  state() {
    return {
      items: [],
    };
  },
  actions: {
    add: function (data) {
      this.items.push(data);
    },
    reset: function () {
      this.items = [
        {
          link: "/",
          label: "Home",
        },
      ];
    },
  },
});
