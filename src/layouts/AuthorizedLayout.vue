<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<style>
.authPage {
  height: 100%;
  display: flex;
  align-items: center;
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
