<template>
  <v-container>
    <v-row>
      <v-form class="w-100">
        <v-text-field
          style="width: min(100%, 500px)"
          v-model="integer"
          label="1 以上 1e18 以下の整数"
        ></v-text-field>
      </v-form>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
let integer: BigInt = BigInt(1);
</script>
