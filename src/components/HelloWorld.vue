<script setup lang="ts">
import {ref} from 'vue'
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const props = defineProps({
  msg: String
})

const count = ref(0);
const input = ref('')
const store = useStore()
const router = useRouter()

function plus() {
  console.log(1)
  count.value++
}

function linkToRegister() {
  router.push('register')
}

</script>

<template>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
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

  <van-button type="primary" @click="linkToRegister">注册</van-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
