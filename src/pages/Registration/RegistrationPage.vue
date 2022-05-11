<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';

import Users from '~/api/users';

const router = useRouter();

const nickname = ref('');
const email = ref('');
const password = ref('');
const repeatPassword = ref('');

const submit = () => {
  Users.signUp(nickname.value, email.value, password.value)
    .then(({data}) => {
      localStorage.setItem('Authorization', data.token);
      router.push('/');
    });
};
</script>

<template>
  <Card class="authPage p-card-body">
    <template #content>
      <form class="authPage__form" @submit.prevent="submit">
        Введите имя
        <InputText
          placeholder="Имя"
          name="name"
          v-model="nickname"
        />
        Введите почту
        <InputText
          placeholder="Почта"
          name="email"
          v-model="email"
        />
        Введите пароль
        <InputPassword
          placeholder="Пароль"
          type="password"
          name="password"
          v-model="password"
        />
        Повторите пароль
        <InputPassword
          placeholder="Пароль"
          type="password"
          v-model="repeatPassword"
        />
        <Button
          type="submit"
          class="mr-2 mb-2 p-button-success"
          :disabled="password !== repeatPassword || password.length < 8"
        >
          Зарегистрироваться
        </Button>
        <router-link style="text-decoration: none" to="/auth">
          <Button>
            Авторизоваться
          </Button>
        </router-link>
      </form>
    </template>
  </Card>
</template>
