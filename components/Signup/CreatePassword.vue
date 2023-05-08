<template>
  <section class="sm:w-10/12 md:w-6/12  xl:w-4/12 mx-auto rounded-lg shadow-lg bg-white mt-20">
    <div class="space-y-8 p-6 md:p-10 rounded-xl">
      <div class="space-y-3">
        <h1 class="text-center text-lg md:text-xl font-black text-gray-600">
          Create a passcode
        </h1>
        <p class="text-center text-sm">
          Enter a unique 4-digit passcode of your choice
        </p>
      </div>

      <div class="flex items-center justify-center space-x-3 w-10/12 mx-auto pb-6">
        <input v-model="form.passcode1" required maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="tel">
        <input v-model="form.passcode2" required maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="tel">
        <input v-model="form.passcode3" required maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="tel">
        <input v-model="form.passcode4" required maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="tel">
      </div>

      <div class="w-10/12 mx-auto">
        <button :class="[!isFormValid || processing ? 'cursor-not-allowed opacity-25' : '']"
          :disabled="!isFormValid || processing"
          class="text-white text-sm md:py-3 py-2.5 rounded-lg text-center w-full bg-green-500">
          {{ processing ? 'processing...' : ' Confirm' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CreatePassword',
  data() {
    return {
      processing: false,
      errorMessage: '',
      form: {
        passcode1: '',
        passcode2: '',
        passcode3: '',
        passcode4: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return !!(this.form.passcode1.length && this.form.passcode2.length && this.form.passcode3.length && this.form.passcode4.length)
    }
  },
  watch: {
    'form.passcode1'(val) {
      if (val) {
        this.errorMessage = ''
      }
    },
    'form.passcode2'(val) {
      if (val) {
        this.errorMessage = ''
      }
    },
    'form.passcode3'(val) {
      if (val) {
        this.errorMessage = ''
      }
    },
    'form.passcode4'(val) {
      if (val) {
        this.errorMessage = ''
      }
    }
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
        this.$emit('passwordCreationSuccess')
      }).finally(() => {
        this.processing = false
      })
    }
  }
}
</script>
