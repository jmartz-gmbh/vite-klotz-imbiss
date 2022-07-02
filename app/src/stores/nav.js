import { defineStore } from "pinia";

export const useNavStore = defineStore('navigation', {
    state(){
        return {
            toggle: false
        }
    }
});