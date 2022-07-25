<template>
  <template v-if="integer !== 0n">
    <v-divider class="my-5" />
    <span
      v-html="toKatex(`n = ${integer}`)"
      class="text-h4 font-weight-regular"
    />
  </template>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from "@vue/reactivity";
import toKatex from "./toKatex";

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
</script>
