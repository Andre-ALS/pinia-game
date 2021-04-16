<template>
  <div class="card" :style="cardStyleColor">
    <div class="card__dark">
      {{ title }}
      <div class="card__dark-team" :style="cardStyleDarkTeam">
        time {{ cardTitle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  ColorTeam,
  ColorText,
  ColorPrimary,
  ColorSecundary,
} from "@/constants/card";

export default defineComponent({
  computed: {
    cardStyleColor(): string {
      return `background: linear-gradient(to bottom right, ${
        ColorPrimary[this.team]
      }, ${ColorSecundary[this.team]});`;
    },
    cardStyleDarkTeam(): string {
      return `color: ${ColorSecundary[this.team]}`;
    },
    cardTitle(): string {
      return `${ColorText[this.team]}`;
    },
  },
  name: "Card",
  props: {
    title: {
      required: true,
      type: String,
    },
    team: {
      required: true,
      type: String as () => ColorTeam,
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  margin: 5px;
  padding: 5px;
  min-width: 210px;
  max-width: 210px;
  cursor: pointer;
  border-radius: 15px;
  flex-grow: 1;
  font-size: 24px;
  color: white;
  opacity: 0.9;
}

.card:hover {
  opacity: 1;
  font-weight: bold;
  background: white;
}

.card__dark {
  margin-top: 40px;
  height: 80px;
  padding: 10px 20px;
  text-align: left;
  border-radius: 0 0 10px 10px;
  background: #1d1e26;
}

.card__dark-team {
  margin-top: 20px;
  font-size: 14px;
  padding: 5px;
  width: fit-content;
  background: black;
}
</style>
