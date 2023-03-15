<script setup lang="ts">
import {ref} from 'vue'
const props = defineProps({
  msg: String
})

const count = ref(0);
const input = ref('')

function plus() {
  console.log(1)
  count.value++
}

</script>

<template>
  <h1>{{ props.msg }}</h1>

  <div class="card">
    <button type="button" @click=plus>add 1</button>
    <p>{{ count }}</p>
    <input v-model="input">
    <div>{{ input }}</div>
  </div>
</template>

<style scoped>
</style>
