<template>
  <div>
    <Navbar />

    <main>
      <div class="container">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  components: {
    Navbar
  },
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
</style>