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
      :disabled="!isValid"
      @click="submit"
      >調べる</v-btn
    >
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef, Ref, ref } from "vue";

const integer: Ref<string> = ref("");

function validateInteger(v: string) {
  return (
    /^([1-9][0-9]{0,17}|10{18})$/.test(v) ||
    "1 以上 1,000,000,000,000,000,000 以下の整数を入力してください"
  );
}

const isValid: ComputedRef<boolean> = computed(
  () => validateInteger(integer.value) === true
);

function submit(): void {
  if (isValid.value) {
    alert(integer.value);
  }
}
</script>
