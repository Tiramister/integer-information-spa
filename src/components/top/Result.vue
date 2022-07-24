<template>
  <template v-if="integer !== 0n">
    <v-row class="my-5">
      <v-divider />
    </v-row>
    <v-row>
      <v-col>
        <span v-html="nEqual" class="text-h4 font-weight-regular" />
      </v-col>
    </v-row>
  </template>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from "@vue/reactivity";
import katex from "katex";

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

const nEqual: ComputedRef<string> = computed(() => {
  return katex.renderToString(`n = ${integer.value}`, { output: "html" });
});
</script>
