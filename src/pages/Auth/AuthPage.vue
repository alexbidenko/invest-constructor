<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';

import Users from '~/api/users';

const router = useRouter();

const email = ref('');
const password = ref('');

const submit = () => {
  Users.signIn(email.value, password.value)
    .then(({data}) => {
      localStorage.setItem('Authorization', data.token);
      router.push('/');
    });
};
</script>

<template>
  <Card class="authPage">
    <template #content>
      <form class="authPage__form" @submit.prevent="submit">
        Введите почту
        <InputText placeholder="Почта" name="email" v-model="email" />
        Введите пароль
        <InputPassword
          placeholder="Пароль"
          type="password"
          name="password"
          v-model="password"
        />
        <Button
          label="Войти"
          class="mr-2 mb-2 p-button-success"
          type="submit"
        />
        <router-link style="text-decoration: none" to="/sign-up">
          <Button
            class="mr-2 mb-2"
            style="text-decoration: none"
          >
            Зарегистрироваться
          </Button>
        </router-link>
      </form>
    </template>
  </Card>
</template>
