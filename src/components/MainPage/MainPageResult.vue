<template>
  <template v-if="integer !== 0n">
    <v-divider class="my-5" />
    <span
      v-html="renderString(`n = ${integer}`)"
      class="text-h4 font-weight-regular"
    />

    <v-table fixed-header density="comfortable" class="mt-5 mx-n4">
      <thead class="text-subtitle-1">
        <tr>
          <th class="w-25">項目</th>
          <th class="w-75">結果</th>
        </tr>
      </thead>
      <tbody class="text-body-1">
        <tr>
          <td>素因数分解</td>
          <td v-html="renderFactors(factorize(integer))" />
        </tr>
        <tr v-if="prevPrime !== undefined">
          <td>前の素数</td>
          <td v-html="renderInteger(prevPrime)" />
        </tr>
        <tr>
          <td>次の素数</td>
          <td v-html="renderInteger(nextPrime(integer))" />
        </tr>
        <tr>
          <td>約数の個数</td>
          <td v-html="renderInteger(countDivisors(integer))" />
        </tr>
        <tr>
          <td>トーシェント関数</td>
          <td v-html="renderInteger(totient(integer))" />
        </tr>
      </tbody>
    </v-table>
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
