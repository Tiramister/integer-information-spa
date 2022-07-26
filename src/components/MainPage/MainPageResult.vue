<template>
  <template v-if="integer !== 0n">
    <v-divider class="my-5" />
    <span
      v-html="renderString(`n = ${integer}`)"
      class="text-h4 font-weight-regular"
    />

    <v-row class="mt-5 text-h6">
      <v-col cols="3">項目</v-col>
      <v-col cols="9">結果</v-col>
    </v-row>
    <v-divider class="my-2" />
    <v-row>
      <v-col cols="3">素因数分解</v-col>
      <v-col cols="9" v-html="renderFactors(factorize(integer))" />
    </v-row>
    <v-divider class="my-2" />
    <v-row v-if="prevPrime !== undefined">
      <v-col cols="3">前の素数</v-col>
      <v-col cols="9" v-html="renderInteger(prevPrime)" />
    </v-row>
    <v-divider class="my-2" />
    <v-row>
      <v-col cols="3">次の素数</v-col>
      <v-col cols="9" v-html="renderInteger(nextPrime(integer))" />
    </v-row>
    <v-divider class="my-2" />
    <v-row>
      <v-col cols="3">約数の個数</v-col>
      <v-col cols="9" v-html="renderInteger(countDivisors(integer))" />
    </v-row>
    <v-divider class="my-2" />
    <v-row>
      <v-col cols="3">トーシェント関数</v-col>
      <v-col cols="9" v-html="renderInteger(totient(integer))" />
    </v-row>
  </template>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from "@vue/reactivity";
import { renderString, renderInteger, renderFactors } from "./renderMath";
import { factorize } from "../../logics/factorize";
import { previousPrime, nextPrime } from "../../logics/adjacentPrime";
import countDivisors from "../../logics/countDivisors";
import totient from "../../logics/totient";

// パラメータから整数を受け取る
const props = defineProps({
  integer: String,
});
const integer: ComputedRef<bigint> = computed(() => {
  if (props.integer === undefined) {
    return BigInt(0);
  } else {
    return BigInt(props.integer);
  }
});
const prevPrime: ComputedRef<bigint | undefined> = computed(() =>
  previousPrime(integer.value)
);
</script>
