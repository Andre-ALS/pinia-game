import { defineStore } from "pinia";

interface MainCounter {
  counter: number;
}

export const useStore = defineStore({
  id: "counter",
  state: (): MainCounter => ({
    counter: 0,
  }),
  getters: {
    getCounter(): number {
      return this.counter;
    },
    doubleCountPlusOne() {
      return this.getCounter * 2 + 1;
    },
  },
  actions: {
    resetCounter() {
      this.counter = 0;
    },
    incrementCounter() {
      this.counter++;
    },
  },
});
