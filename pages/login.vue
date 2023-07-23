<template>
  <main>
    <sign-in></sign-in>
  </main>
</template>

<script>
import SignIn from '@/components/Signin.vue'
export default {
  components: {
    SignIn
  },
  mounted() {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : '';
    if (!this.user) {
      return
    } else {
      this.$router.push('dashboard');
    }
    this.setPageData();
  },
}
</script>
