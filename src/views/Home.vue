<template>
  <div class="home">
    <Card
      v-for="({ team, title }, index) in cards()"
      :key="index"
      class="home__cards"
      :title="title"
      :team="team"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";
import { ColorTeam } from "@/constants/card";

const OCCUPATIONS: string[] = [
  "Bombeiro",
  "Garçom",
  "Chef",
  "Arquiteto",
  "Carpinteiro",
  "Youtuber",
  "Encanador",
  "Engenheiro",
  "Jornalista",
  "Farmacêutico",
  "Caixa",
  "Agricultor",
  "Atleta",
  "Construtor",
  "Dentista",
  "Cirurgião",
  "Ator",
  "Taxista",
  "Jardineiro",
  "Padeiro",
  "Médico",
];

const MATRIZ_SIZE = 20;
const ITEMS_PER_TEAM = 5;

interface CardItem {
  readonly team: ColorTeam;
  readonly title: string;
}

export default defineComponent({
  components: {
    Card,
  },
  data() {
    return {
      ColorTeam,
    };
  },
  methods: {
    cards(): CardItem[] {
      const createItemsArray = (
        occupations: string[],
        size: number,
        random: number
      ) => occupations.sort(() => Math.random() - random).slice(0, size);

      const occupations = createItemsArray(OCCUPATIONS, MATRIZ_SIZE, 0.5);
      const firstTeam = createItemsArray(OCCUPATIONS, ITEMS_PER_TEAM, 0.4);

      const differenceSets = occupations.filter((x) => !firstTeam.includes(x));
      const secondTeam = createItemsArray(differenceSets, ITEMS_PER_TEAM, 0.3);

      return occupations.map((occu) => {
        let team;
        if (firstTeam.includes(occu)) {
          team = ColorTeam.BLUE;
        } else if (secondTeam.includes(occu)) {
          team = ColorTeam.PURPLE;
        } else {
          team = ColorTeam.GREY;
        }
        return {
          team,
          title: occu,
        };
      });
    },
  },
  name: "Home",
});
</script>

<style lang="scss" scoped>
.home {
  background-color: #2a2c37;
  display: flex;
  flex-wrap: wrap;
  max-width: 1150px;
}
</style>
