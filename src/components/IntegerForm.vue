<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form class="w-100">
          <v-text-field
            style="width: min(100%, 500px)"
            v-model="integer"
            :rules="[validateInteger]"
            label="1 以上 1e18 以下の整数"
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

let integer: Ref<BigInt> = ref(BigInt(1));
const validateInteger = (v: any) =>
  /^([1-9][0-9]{0,17}|10{18})$/.test(v) ||
  "1 以上 1e18 以下の整数を入力してください";
</script>
