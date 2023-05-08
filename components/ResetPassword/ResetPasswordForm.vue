<template>
  <section class="sm:w-10/12 md:w-6/12  xl:w-4/12 mx-auto rounded-lg shadow-lg bg-white">
    <form @submit.prevent="handleResetPassword" class="space-y-6 p-6 rounded-xl">
      <div class="space-y-3">
        <h1 class="text-center text-xl md:text-2xl font-black">
          Reset password
        </h1>
        <p class="text-center text-xs">
          Create your new password. Your new password must be different from the
          previous password.
        </p>
      </div>


      <div v-if="errorMessage.length"
        class="flex justify-center items-center rounded-lg border bg-red-200 border-red-500 px-3 py-2 p-2">
        <span class="text-xs text-center text-red-500 ">{{
          errorMessage }}</span>
      </div>

      <div class="space-y-3 w-full">
        <label class="text-gray-500 text-xs">New password*</label>
        <div>
          <input v-model="form.password" type="password" placeholder="Enter password"
            class="outline-none px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light text-xs" />
        </div>
      </div>

      <div class="space-y-3 w-full">
        <label class="text-gray-500 text-xs">Confirm password*</label>
        <div>
          <input v-model="form.password_confirm" type="password" placeholder="Confirm password"
            class="outline-none px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light text-xs" />
        </div>
      </div>

      <div>
        <button :class="[!isFormValid || processing ? 'cursor-not-allowed opacity-25' : '']"
          :disabled="!isFormValid || processing"
          class="text-white text-sm md:py-3 py-2.5 rounded-lg text-center w-full bg-green-500">
          {{ processing ? 'processing...' : 'Reset Password' }}
        </button>
      </div>

      <p @click="goBack" class="text-teal-500 text-center text-sm font-medium cursor-pointer">
        Cancel
      </p>

      <hr />
      <p class="text-center text-gray-400 text-sm">
        Don't have an account ?
        <nuxt-link to="/sign-up" class="text-teal-500"> Sign Up </nuxt-link>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ResetPasswordForm',
  data() {
    return {
      processing: false,
      errorMessage: '',
      form: {
        password: '',
        password_confirm: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return !!(this.form.password.length && this.form.password_confirm.length)
    }
  },
  watch: {
    'form.password'(val) {
      if (val) {
        this.errorMessage = ''
      }
    },
    'form.password_confirm'(val) {
      if (val) {
        this.errorMessage = ''
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    handleResetPassword() {
      this.processing = true
      if (this.form.password !== this.form.password_confirm) {
        this.errorMessage = 'Passwords do not match.'
        return
      }
      this.$axios.post('https://medinize-apis.onrender.com/reset-password/', this.form).then((res) => {
        this.$toast.success('Pasword reset was successful')
        this.$router.push('/sign-in')
      }).catch(() => {
        this.errorMessage = 'Something went wrong. Please try again!'
        this.$emit('reset-success');
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
