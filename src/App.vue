<template>
  <v-app>
    <v-layout>
      <Header />
      <v-main>
        <IntegerForm />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import IntegerForm from "./components/IntegerForm.vue";
</script>
