<template>
  <section class="sm:w-10/12 md:w-6/12  xl:w-4/12 mx-auto rounded-lg shadow-lg bg-white mt-20">
    <form @submit.prevent="handleEmailVerification" class="space-y-8 p-6  rounded-xl">
      <div class="space-y-3">
        <h1 class="text-center text-lg md:text-xl font-black text-gray-600">
          Confirm Email
        </h1>
        <p class="text-center text-sm">
          Enter the verification code sent to your email
        </p>
      </div>

      <p class="text-center text-sm font-light text-gray-400">Enter Code</p>

      <div class="flex items-center justify-between space-x-3 w-10/12 mx-auto">
        <input required maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="password" v-model="form.verification_code1" />
        <input required maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="password" v-model="form.verification_code2" />
        <input required maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="password" v-model="form.verification_code3" />
        <input required maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="password" v-model="form.verification_code4" />
        <input required maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="password" v-model="form.verification_code5" />
        <input required maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="password" v-model="form.verification_code6" />
      </div>


      <div class="w-10/12 mx-auto">
        <button
        :class="[!isFormValid || processing ? 'cursor-not-allowed opacity-25' : '']"
          :disabled="!isFormValid || processing"
          class="text-white text-sm md:py-3 py-2.5 rounded-lg text-center w-full bg-green-500">
          {{ processing ? 'processing...' : ' Confirm' }}
        </button>
      </div>

      <hr />
      <p class="text-center text-gray-400 text-sm">
        Didn’t get a code?
        <nuxt-link to="#" class="text-green-700"> Resend code </nuxt-link>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: 'EmailVerification',
  data() {
    return {
      processing: false,
      errorMessage: '',
      form: {
        verification_code1: '',
        verification_code2: '',
        verification_code3: '',
        verification_code4: '',
        verification_code5: '',
        verification_code6: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return !!(this.form.verification_code1.length && this.form.verification_code2.length && this.form.verification_code3.length && this.form.verification_code4.length && this.form.verification_code5.length && this.form.verification_code6.length)
    }
  },
  watch: {
    'form.verification_code1'(val) {
      if (val) {
        this.errorMessage = ''
      }
    },
    'form.verification_code2'(val) {
      if (val) {
        this.errorMessage = ''
      }
    },
    'form.verification_code3'(val) {
      if (val) {
        this.errorMessage = ''
      }
    },
    'form.verification_code4'(val) {
      if (val) {
        this.errorMessage = ''
      }
    },
    'form.verification_code5'(val) {
      if (val) {
        this.errorMessage = ''
      }
    },
    'form.verification_code6'(val) {
      if (val) {
        this.errorMessage = ''
      }
    },
  },
  methods: {
    handleEmailVerification() {
      this.processing = true
      this.$axios.post('https://medinize-apis.onrender.com/login/', this.form).then((res) => {
        this.$toast.success('Login was successful')
        if (process.client) {
          localStorage.setItem('user', JSON.stringify(res.data))
        }
        this.$router.push('/dashboard')
      }).catch(() => {
        this.errorMessage = 'Something went wrong. Please try again!'
        this.$emit('emailVerificationSuccess')
      }).finally(() => {
        this.processing = false
      })
    }
  }
}
</script>
