<script setup lang="ts">
import {ref} from 'vue'
import {useStore} from "vuex";
const props = defineProps({
  msg: String
})

const count = ref(0);
const input = ref('')
const store = useStore()

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

  <h1>Use Vuex</h1>
  <button type="button" @click="store.commit('countAdd')">add 1</button>
  <p>{{ store.state.count }}</p>
</template>

<style scoped>
</style>
