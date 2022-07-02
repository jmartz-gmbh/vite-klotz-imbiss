import { defineStore } from "pinia";

export const useMessagesStore = defineStore("messages", {
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
