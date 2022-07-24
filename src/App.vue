<template>
  <v-app>
    <v-layout>
      <Header />
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
</script>
