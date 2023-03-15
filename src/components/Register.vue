<template>
  <section class="register">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </section>
</template>

<script setup>
import {ref} from "vue";
import {request} from "@/axios/interceptors.ts";
const username = ref('');
const password = ref('');
const onSubmit = (values) => {
  request.post("/users",values).then((res) => {
    console.log(res)
  })
  console.log('submit', values);
};
</script>

<style scoped lang="scss">
.register {
  margin: auto;
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
