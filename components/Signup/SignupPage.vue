<template>
  <section class="sm:w-10/12 md:w-6/12  xl:w-4/12 mx-auto rounded-lg shadow-lg bg-white">
    <form class="md:space-y-3 space-y-1 pt-6 pb-6 px-6 md:p-10 rounded-xl" @submit.prevent="handleSignup">
      <div class="space-y-3">
        <h1 class="text-center text-lg md:text-xl font-black">
          Create an account
        </h1>
        <p class="text-center text-xs">
          Gain access to<span class="text-teal-500">
            affordable and quality health services</span>
        </p>
      </div>

      <div v-if="errorMessage.length"
        class="flex justify-center items-center rounded-lg border bg-red-200 border-red-500 px-3 py-2 p-2">
        <span class="text-xs text-center text-red-500 ">{{
          errorMessage }}</span>
      </div>

      <div class="md:flex justify-between items-center md:space-x-6 space-y-3 md:space-y-0">
        <div class="space-y-2 w-full">
          <label class="text-gray-500 text-xs">First name *</label>
          <div>
            <input v-model="form.first_name" type="text" placeholder="Enter first name"
              class="outline-none px-3 py-3 bg-gray-100 text-xs border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light">
          </div>
        </div>

        <div class="space-y-2 w-full">
          <label class="text-gray-500 text-xs">Last name *</label>
          <div>
            <input v-model="form.last_name" type="text" placeholder="Enter last name"
              class="outline-none px-3 py-3 bg-gray-100 text-xs border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light">
          </div>
        </div>
      </div>

      <div class="space-y-2 w-full">
        <label class="text-gray-500 text-xs">Date of birth *</label>
        <div>
          <input v-model="form.dob" type="date" placeholder="Enter last name"
            class="outline-none px-3 py-3 bg-gray-100 text-xs border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light">
        </div>
        <!-- <div>
          {{ form.dob }}
          <vc-date-picker v-model="form.dob" no-cap placeholder="select dob" :min-date="new Date()" title-position="left"
            is-required color="teal" />
        </div> -->
      </div>

      <div class="space-y-2 w-full">
        <label class="text-gray-500 text-xs">Email *</label>
        <div>
          <input v-model="form.email" type="email" placeholder="Enter email address"
            class="outline-none px-3 py-3 bg-gray-100 text-xs border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light">
        </div>
      </div>

      <div class="space-y-2 w-full">
        <label class="text-gray-500 text-xs">Phone number</label>
        <div>
          <input v-model="form.phone" type="tel" placeholder="Enter phone number"
            class="outline-none px-3 py-3 bg-gray-100 text-xs border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light">
        </div>
      </div>

      <div class="space-y-2 w-full">
        <label class="text-gray-500 text-xs">Password</label>
        <div>
          <input v-model="form.password" type="password" placeholder="Enter password"
            class="outline-none px-3 py-3 bg-gray-100 text-xs border-gray-50 border-none focus:border-green-500 rounded-md w-full">
        </div>
      </div>

      <div class="pt-6">
        <button :class="[!isFormValid || processing ? 'cursor-not-allowed opacity-25' : '']"
          :disabled="!isFormValid || processing"
          class="text-white text-sm md:py-3 py-2.5 rounded-lg text-center w-full bg-green-500">
          {{ processing ? "Processsing..." : " Sign Up" }}
        </button>
      </div>
      <!-- <vc-date-picker :min-date="new Date()" title-position="left" is-required color="teal" /> -->

      <p class="text-center text-xs text-gray-500 w-11/12 py-2 mx-auto">
        By clicking "Sign up", you agree to Medinize’s
        <nuxt-link to="#" class="text-green-500">
          Terms of Use
        </nuxt-link>
        and acknowledge you have read the
        <nuxt-link to="#" class="text-green-500">
          Privacy Policy.
        </nuxt-link>
      </p>

      <hr>
      <p class="text-center text-gray-400 text-sm">
        Already have an account ?
        <nuxt-link to="/" class="text-green-700">
          Sign In
        </nuxt-link>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: 'SignupPage',
  data() {
    return {
      processing: false,
      errorMessage: '',
      form: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        dob: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return !!(this.form?.first_name?.length &&
        this.form?.last_name?.length &&
        this.form?.email?.length &&
        this.form?.phone?.length &&
        this.form?.dob?.length &&
        this.form?.password?.length)
    }
  },
  methods: {
    handleSignup() {
      this.processing = true
      this.$axios
        .post('https://medinize-apis.onrender.com/signup/', this.form)
        .then((res) => {
          this.$emit('signupSuccess')
          if (process.client) {
            localStorage.setItem('currentUser', JSON.stringify(res.data))
          }
        })
        .catch(() => {
          this.errorMessage = 'Something went wrong. Please try again!'
          this.$router.push('/')
          // this.$emit('signupSuccess')
        })
        .finally(() => {
          this.processing = false
        })
    }
  }
}
</script>
