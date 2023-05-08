<template>
  <div class="bg-black bg-opacity-25">
    <div class="background w-full h-full bg-blend-overlay bg-opacity-50 bg-gray-400 pt-10 rounded-lg px-3 md:px-0">
      <section class="sm:w-10/12 md:w-6/12  xl:w-4/12 mx-auto rounded-lg shadow-lg bg-white select-none">
        <form class="space-y-6 p-6 py-10 rounded-xl" @submit.prevent="handleLogin">
          <div class="space-y-3">
            <h1 class="text-center text-lg md:text-xl font-black">
              Sign In 🥰
            </h1>
            <p class="text-center text-xs xl:text-sm">
              Enjoy
              <span class="text-teal-500">
                affordable and quality health services</span>
            </p>
          </div>

          <div v-if="errorMessage.length"
            class="flex justify-center items-center rounded-lg border bg-red-200 border-red-500 px-3 py-2 p-2">
            <span class="text-xs text-center text-red-500 ">{{
              errorMessage }}</span>
          </div>

          <div class="space-y-2 w-full">
            <label class="text-gray-500 text-sm">Email Address</label>
            <div>
              <input v-model="form.email" type="text" placeholder="Enter Email Address"
                class="outline-none px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light text-sm">
            </div>
          </div>

          <div class="space-y-2 w-full">
            <label class="text-gray-500 text-sm">Password</label>
            <div class="relative">
              <input v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="Password"
                class="outline-none px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full text-sm">
              <p :class="[showPassword ? 'text-red-500' : 'text-green-500']" @click="togglePasswordVisibility"
                class="cursor-pointer text-sm inline-block absolute right-3 top-4">{{
                  showPassword ? '😑' : '😊' }}</p>
            </div>
          </div>

          <div class="flex justify-end items-end">
            <nuxt-link to="/forgot-password" class="text-teal-500 text-sm font-medium">
              Forgot password ?
            </nuxt-link>
          </div>
          <div>
            <button :class="[!isFormValid || processing ? 'cursor-not-allowed opacity-25' : '']"
              :disabled="!isFormValid || processing"
              class="text-white text-sm md:py-3 py-2.5 rounded-lg text-center w-full bg-green-500">
              {{ processing ? 'processing...' : ' Sign In' }}
            </button>
          </div>

          <hr>
          <p class="text-center text-gray-400 text-sm">
            Don't have an account ?
            <nuxt-link to="/sign-up" class="text-teal-500">
              Sign Up
            </nuxt-link>
          </p>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  data() {
    return {
      processing: false,
      showPassword: false,
      errorMessage: '',
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return !!(this.form.email.length && this.form.password.length)
    }
  },
  watch: {
    'form.email'(val) {
      if (val) {
        this.errorMessage = ''
      }
    },
    'form.password'(val) {
      if (val) {
        this.errorMessage = ''
      }
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    handleLogin() {
      this.processing = true
      this.$axios.post('https://medinize-apis.onrender.com/login/', this.form).then((res) => {
        this.$toast.success('Login was successful')
        if (process.client) {
          localStorage.setItem('user', JSON.stringify(res.data))
        }
        this.$router.push('/dashboard')
      }).catch(() => {
        this.$router.push('/dashboard')
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
  object-position: center;
  object-fit: contain;
  width: 100vw;
}
</style>
