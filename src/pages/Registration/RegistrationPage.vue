<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();


const nickname = ref('');
const email = ref('');
const password = ref('');
const repeatPassword = ref('');

const submit = () => {
  console.log(nickname.value, email.value, password.value);
  router.push('/');
};
</script>

<template>
  <div class="authPage">
    <form class="authPage__form" @submit.prevent="submit">
      Введите имя
      <input placeholder="Имя" name="email" v-model="nickname">
      Введите почту
      <input placeholder="Почта" name="email" v-model="email">
      Введите пароль
      <input
        placeholder="Пароль"
        type="password"
        name="password"
        v-model="password"
      >
      Повторите пароль
      <input
        placeholder="Пароль"
        type="password"
        name="password"
        v-model="repeatPassword"
      >
      <button type="submit" :disabled="password !== repeatPassword || password.length < 8">
        Зарегистрироваться
      </button>
      <router-link to="/auth">
        <button>
          Авторизоваться
        </button>
      </router-link>
    </form>
  </div>
</template>
