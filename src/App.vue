<template>
  <v-app>
    <v-layout>
      <Header />
      <v-main>
        <v-container class="mt-5">
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
</script>
