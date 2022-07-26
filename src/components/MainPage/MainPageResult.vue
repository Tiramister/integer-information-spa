<template>
  <v-divider class="my-5" />
  <span v-html="tex(`n = ${integer}`)" class="text-h4 font-weight-regular" />

  <v-row class="mt-5 text-h6">
    <v-col cols="3">項目</v-col>
    <v-col cols="9">結果</v-col>
  </v-row>

  <template v-for="result in results">
    <template v-if="result.displayed">
      <v-divider class="my-2" />
      <v-row>
        <v-col cols="3">{{ result.title }}</v-col>
        <v-col cols="9" v-html="tex(result.result)" />
      </v-row>
    </template>
  </template>
</template>

<script setup lang="ts">
import { tex, factorsToString } from "./renderMath";
import factorize from "../../logics/factorize";
import { previousPrime, nextPrime } from "../../logics/adjacentPrime";
import countDivisors from "../../logics/countDivisors";
import totient from "../../logics/totient";

// パラメータから整数を受け取る
const props = defineProps({
  integer: {
    type: String,
    required: true,
  },
});
const n = BigInt(props.integer);

const results = [
  {
    title: "素因数分解",
    result: `n = ${factorsToString(factorize(n))}`,
    displayed: true,
  },
  {
    title: "前の素数",
    result: `${previousPrime(n)}`,
    displayed: previousPrime(n) !== undefined,
  },
  {
    title: "次の素数",
    result: `${nextPrime(n)}`,
    displayed: true,
  },
  {
    title: "約数の個数",
    result: `d(n) = ${countDivisors(n)}`,
    displayed: true,
  },
  {
    title: "トーシェント関数",
    result: `\\varphi(n) = ${totient(n)}`,
    displayed: true,
  },
];
</script>
