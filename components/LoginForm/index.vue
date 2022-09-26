<template>
  <form class="login-form" @submit.prevent="handleAuth">
    <p class="title">Authorization</p>
    <input v-model.lazy="email" placeholder="Enter E-mail" type="email">
    <input v-model.lazy="password" type="password" placeholder="Enter password">
    <button type="submit" class="default-btn">
      <span v-if="!loading">Sign in</span>
      <span v-else>Loading...</span>
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { authStore } from '~/store';

import { PropsType } from './models';
import './styles.scss';


export default defineComponent<PropsType>({
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      loading: false
    };
  },
  methods: {
    async handleAuth() {
      if (!this.email || !this.password) {
        return;
      }
      this.loading = true;
      const result = await authStore.auth(this);
      this.loading = false;
      this.$router.push(result ? '/protected' : '/public');
      localStorage.setItem('isAuth', result ? '1' : '0');
    }
  }
})
</script>