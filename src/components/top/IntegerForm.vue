<template>
  <div class="d-flex ma-10">
    <v-form ref="form" style="width: min(100%, 500px)" @submit.prevent="submit">
      <v-text-field
        v-model="integer"
        :rules="[validateInteger]"
        label="1 以上 1,000,000,000,000,000,000 以下の整数"
        variant="outlined"
        density="compact"
      />
    </v-form>
    <v-btn
      class="ml-5"
      color="primary"
      flat
      :disabled="validateInteger(integer) !== true"
      @click="submit"
      >調べる</v-btn
    >
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from "vue";
import { useRouter } from "vue-router";
import validateInteger from "./validateInteger";

const integer: Ref<string> = ref("");

// 親からクエリパラメータを受け取る
const props = defineProps({
  integer: String,
});
watch([props], () => {
  if (props.integer !== undefined) {
    integer.value = props.integer;
  }
});

// ルーティング
const router = useRouter();
function submit(): void {
  router.push({ name: "top", query: { integer: integer.value } });
}
</script>
