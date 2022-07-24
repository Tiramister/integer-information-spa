<template>
  <IntegerForm :queryInteger="integer" />
  <Result :integer="integer" />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import IntegerForm from "./IntegerForm.vue";
import Result from "./Result.vue";
import validateInteger from "./validateInteger";

const integer = ref("0");

// クエリパラメータの読み取り
const route = useRoute();
function readQueryParameter(): void {
  const queryInteger = route.query.integer;
  if (
    typeof queryInteger === "string" &&
    validateInteger(queryInteger) === true
  ) {
    integer.value = queryInteger;
  }
}

watch([route], readQueryParameter, { immediate: true });
</script>
