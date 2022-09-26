<template>
  <section class="navbar">
    <ul>
      <li v-for="link of links" class="navbar-item">
        <nuxt-link v-if="link.path !== '/'" :to="link.path" exact active-class="active" @click.prevent="() => redirect(link.path)">{{link.title}}</nuxt-link>
        <a v-else @click.prevent="logout">{{link.title}}</a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { authStore } from '~/store';
import { NavbarLinks } from './constants';

import { PropsType } from './models';

import './styles.scss';

export default defineComponent<PropsType>({
  name: 'Navbar',
  data() {
    return {
      isAuth: authStore.isAuth
    }
  },
  computed: {
    links() {
      return NavbarLinks.filter(({ path }) => path !== '/protected' || authStore.isAuth )
    } 
  },
  methods: {
    logout() {
      localStorage.removeItem('isAuth');
      this.$store.commit('auth/setIsAuth', null);
      this.$router.push('/');
    }
  }
})
</script>