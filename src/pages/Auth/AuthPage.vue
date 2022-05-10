<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');

const submit = () => {
  console.log(email.value, password.value);
  router.push('/');
};
</script>

<template>
  <div class="authPage">
    <form class="authPage__form" @submit.prevent="submit">
      Введите почту
      <input placeholder="Почта" name="email" v-model="email">
      Введите пароль
      <input
        placeholder="Пароль"
        type="password"
        name="password"
        v-model="password"
      >
      <button type="submit">
        Войти
      </button>
      <router-link to="/sign-up">
        <button>
          Зарегистрироваться
        </button>
      </router-link>
    </form>
  </div>
</template>
