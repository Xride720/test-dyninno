<template>
  <div class="empty-layout">
    <nuxt />
  </div>
</template>
<script>
  export default {
    mounted() {
      const oldIsAuth = localStorage.getItem('isAuth');
      if (oldIsAuth) {
        this.$store.commit('auth/setIsAuth', oldIsAuth === '1');
        this.$router.push(oldIsAuth === '1' ? '/protected' : '/public');
      }
    }
  }
  </script>
<style scoped>
  body {
    margin: 0;
    background: #000;
  }
  .empty-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
  }
</style>