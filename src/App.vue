<template>
  <v-app>
    <v-layout>
      <TheHeader />
      <v-main>
        <v-container class="mt-5">
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
</script>
