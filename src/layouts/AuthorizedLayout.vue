<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();

if (!localStorage.getItem('Authorization')) router.push('/auth');

const logout = () => {
  localStorage.removeItem('Authorization');
  router.push('/auth');
};
</script>

<template>
  <header>
    <Button @click="logout" class="mr-2 mb-2 p-button-danger">
      Выйти
    </Button>
  </header>

  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<style>
.authPage {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
}

.authPage__form {
  display: flex;
  flex-direction: column;
}

.authPage__button {
  width: 100%;
  margin-top: 16px;
}
</style>
