<template>
  <div v-if="integer !== 0n">
    {{ integer }}
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from "@vue/reactivity";

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
