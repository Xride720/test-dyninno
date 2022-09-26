<template>
  <section class="protected-section custom-scroll">
    <ul class="users-list">
      <li v-for="user of users" class="users-list-item">
        <div class="avatar"><img :src="user.picture.medium" alt="logo"></div>
        <div class="user-info">
          <div class="user-info-name">
            {{user.name.title}}
            {{user.name.first}}
            {{user.name.last}}
          </div>
          <div class="user-info-dateofbirth">Datebirth: {{new Date(user.dob.date).toLocaleDateString()}}; Age {{user.dob.age}};</div>
          <div class="user-info-contact">Email: {{user.email}} ; Phone: {{user.phone}} ;</div>
          <div class="user-info-location">
            Address: {{user.location.country}},
            {{user.location.city}},
            {{user.location.street.name}},
            {{user.location.street.number}}
          </div>
        </div>
      </li>
      <button @click="moreUsers" v-if="!!users.length" class="default-btn">Load more...</button>
    </ul>
    <span v-if="usersLoading" class="loader"></span>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usersStore } from '~/store';
import { PropsType } from './models';
import './styles.scss';

export default defineComponent<PropsType>({
  data() {
    return {}
  },
  computed: {
    users() {
      return usersStore.users;
    },
    usersLoading() {
      return usersStore.loading;
    }
  },
  methods: {
    moreUsers() {
      this.$store.dispatch('users/getUsers', 15);
    }
  },
  created() {
    !usersStore.users.length && this.$store.dispatch('users/getUsers', 15);
  },
  destroyed() {
    this.$store.dispatch('users/resetUsers');
  },
  middleware: ['auth']
})
</script>