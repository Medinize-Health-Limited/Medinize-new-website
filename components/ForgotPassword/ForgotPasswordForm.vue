<template>
  <section class="sm:w-10/12 md:w-6/12  xl:w-4/12  mx-auto rounded-lg shadow-lg bg-white">
    <form class="space-y-6 p-6 rounded-xl" @submit.prevent="handleForgotPassword">
      <div class="space-y-3">
        <h1 class="text-center text-xl font-black">
          Forgot password?
        </h1>
        <p class="text-center md:w-9/12 mx-auto text-xs">
          Enter the email address you used when you joined and we’ll send you a
          link to reset your password.
        </p>
      </div>

      <div v-if="errorMessage.length"
        class="flex justify-center items-center rounded-lg border bg-red-200 border-red-500 px-3 py-2 p-2">
        <span class="text-xs text-center text-red-500 ">{{
          errorMessage }}</span>
      </div>

      <div class="space-y-3 w-full">
        <label class="text-gray-500 text-xs md:text-sm">Email*</label>
        <div>
          <input v-model="form.email" type="email" placeholder="Enter email address"
            class="outline-none px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light text-sm">
        </div>
      </div>

      <div>
        <button :class="[!isFormValid || processing ? 'cursor-not-allowed opacity-25' : '']"
          :disabled="!isFormValid || processing"
          class="text-white text-sm md:py-3 py-2.5 rounded-lg text-center w-full bg-green-500">
          {{ processing ? 'processing...' : 'Send Reset Link' }}
        </button>
      </div>

      <p class="text-teal-500 text-center text-sm font-medium cursor-pointer" @click="goBack">
        Cancel
      </p>

      <hr>
      <p class="text-center text-gray-400 text-sm">
        Don't have an account ?
        <nuxt-link to="/sign-up" class="text-teal-500">
          Sign Up
        </nuxt-link>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ForgotPasswordForm',
  data() {
    return {
      processing: false,
      errorMessage: '',
      form: {
        email: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return !!(this.form.email.length)
    }
  },
  watch: {
    'form.email'(val) {
      if (val) {
        this.errorMessage = ''
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    handleForgotPassword() {
      this.processing = true
      this.$axios.post('https://medinize-apis.onrender.com/forgot-password/', this.form).then((res) => {
        this.$toast.success('Login was successful')
        this.$router.push('/email-sent')
      }).catch(() => {
        this.errorMessage = 'Something went wrong. Please try again!'
      }).finally(() => {
        this.processing = false
      })
    }
  }
}
</script>

<style scoped>
.background {
  background-image: url("./assets/img/landing.svg");
  height: 100vh;
  width: 100vw;
}
</style>
