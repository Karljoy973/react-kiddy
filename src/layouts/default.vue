<template>
  <KiddyHeader/>
  <v-main>
    <router-view />
  </v-main>

  <AppFooter />
</template>

<script lang="ts" setup>
  import KiddyHeader from '@/components/KiddyHeader.vue';
</script>
