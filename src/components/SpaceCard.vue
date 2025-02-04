
<template>
  <v-container class="spaceCard">
    <v-card class="mx-auto" width="600" rounded="lg">
      <v-card-title>{{cardTitle}}</v-card-title>
      <v-divider />

      <div class="pa-4">
        <v-sheet
          border="none"
          rounded="lg"
          width="100%"
          :elevation="0"
        />

        <canvas ref="canvas"></canvas>
        <!-- /**j'ai envi d'avoir ce canvas que je translate dans le v-sheet avec du css */ -->
      </div>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import {  SpacialEnvironment } from '@/libs/babylon/main';
import { onMounted, useTemplateRef } from 'vue';
const props = defineProps < { cardTitle?: String } > ()
const canvas = useTemplateRef<HTMLCanvasElement>("canvas")
let spaceEnvironment = undefined; 
onMounted(()=> spaceEnvironment = new SpacialEnvironment(canvas.value!))

</script>
<style lang="css" scoped>

.spaceCard {
  max-height: 400px;
  z-index: 2;
  height: max-content;
}
canvas {
  position:relative;
  transform: translateX(2em);
  z-index: 1;
  width: 500px;
  height: 250px;
}
</style>
