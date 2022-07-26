<template>
  <IntegerForm :key="reloadKey" :integer="integer" />
  <MainPageResult v-if="integer !== ''" :key="reloadKey" :integer="integer" />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import IntegerForm from "./IntegerForm.vue";
import MainPageResult from "./MainPageResult.vue";
import validateInteger from "./validateInteger";

const integer = ref("");

// MainPageResult をリフレッシュさせるための key
const reloadKey = ref(0);

// クエリパラメータの読み取り
const route = useRoute();
function readQueryParameter(): void {
  const queryInteger = route.query.integer;
  if (
    typeof queryInteger === "string" &&
    validateInteger(queryInteger) === true
  ) {
    integer.value = queryInteger;
    ++reloadKey.value;
  }
}
watch([route], readQueryParameter, { immediate: true });
</script>
