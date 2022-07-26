<template>
  <v-form class="d-flex flex-wrap" ref="form" @submit.prevent="submit">
    <v-text-field
      class="flex-grow-0 mr-5"
      style="width: min(100%, 400px)"
      v-model="integer"
      :rules="[validateInteger]"
      label="1 以上 1,000,000,000,000,000,000 以下の整数"
      variant="outlined"
      density="compact"
    />
    <v-btn
      color="primary"
      flat
      :disabled="validateInteger(integer) !== true"
      @click="submit"
      >調べる</v-btn
    >
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import validateInteger from "./validateInteger";

// 親からクエリパラメータを受け取る
const props = defineProps({
  integer: {
    type: String,
    required: true,
  },
});
const integer = ref(props.integer);

// ルーティング
const router = useRouter();
function submit(): void {
  router.push({ name: "MainPage", query: { integer: integer.value } });
}
</script>
