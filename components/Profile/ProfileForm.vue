<template>
  <section class="sm:w-10/12 md:w-6/12  xl:w-4/12  mx-auto rounded-lg shadow-lg bg-white">
    <div class="space-y-3 p-6 rounded-xl">
      <div class="space-y-3">
        <div class="flex justify-center items-center">
          <img src="@/assets/img/user_profile.svg" alt="">
        </div>
        <h1 class="text-center text-sm  font-light">
          Welcome, <span class="font-bold">{{ user.first_name ?? 'User' }}</span>
        </h1>
        <p class="text-center  text-xs">
          Help us provide you with the best healthcare by filling the
          information below.
        </p>
      </div>

      <div class="space-y-2 w-full">
        <label class="text-gray-500 text-xs">Date of birth *</label>
        <div>
          <input v-model="form.dob" type="date" placeholder="Enter date"
            class="outline-none px-3 text-xs py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light">
        </div>
      </div>

      <div class="space-y-2 w-full">
        <label class="text-gray-500 text-xs">Gender *</label>
        <div>
          <select name="gender" v-model="form.gender"
            class="outline-none px-3 text-xs py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full">
            <option value="" disabled selected hidden>Select an option</option>
            <option value="male">
              Male
            </option>
            <option value="female">
              Female
            </option>
            <option value="prefer not to say">
              Prefer not to say
            </option>
          </select>
        </div>
      </div>

      <div class="flex justify-between items-center space-x-6">
        <div class="space-y-2 w-full">
          <label class="text-gray-500 text-xs">Height (cm)</label>
          <div>
            <input v-model="form.height" type="tel" placeholder="Enter height"
              class="outline-none px-3 text-xs py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light">
          </div>
        </div>

        <div class="space-y-2 w-full">
          <label class="text-gray-500 text-xs">Weight (Kg)</label>
          <div>
            <input v-model="form.weight" type="tel" placeholder="Enter weight"
              class="outline-none px-3 text-xs py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light">
          </div>
        </div>
      </div>

      <div class="space-y-2 w-full">
        <label class="text-gray-500 text-xs">HMO Provider</label>
        <div>
          <select name="hmo_provider" v-model="form.hmo_provider"
            class="outline-none text-xs px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full">
            <option value="" disabled selected hidden>Select an option</option>
            <option value="Aiico Insurance">
              Aiico Insurance
            </option>
            <option value="Hygiea">
              Hygiea
            </option>
            <option value="Redcare">
              Redcare
            </option>
            <option value="Roding">
              Roding
            </option>
          </select>
        </div>
      </div>

      <div class="pt-4">
        <button :class="[!isFormValid || processing ? 'cursor-not-allowed opacity-25' : '']"
          :disabled="!isFormValid || processing"
          class="text-white text-sm md:py-3 py-3 rounded-lg text-center w-full bg-green-500">
          {{ processing ? "Processsing..." : "Continue" }}
        </button>
      </div>

      <p @click="$router.push('/dashboard')" class="text-center text-teal-500 text-xs cursor-pointer">
        I’ll do this later
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProfileForm',
  data() {
    return {
      processing: false,
      errorMessage: '',
      user : {},
      form: {
        gender: '',
        weight: '',
        height: '',
        hmo_provider: '',
        dob: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return !!(
        this.form?.gender?.length &&
        this.form?.weight?.length &&
        this.form?.height?.length &&
        this.form?.dob?.length &&
        this.form?.hmo_provider?.length)
    }
  },
  mounted(){
   const user = localStorage.getItem('user');
   this.user = user ? JSON.parse(user) : ''
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
          this.$emit('signupSuccess')
        })
        .finally(() => {
          this.processing = false
        })
    }
  }
}
</script>

<style scoped>
select:required:invalid {
  color: #666;
}

option[value=""][disabled] {
  display: none;
}

option {
  color: #000;
}
</style>
