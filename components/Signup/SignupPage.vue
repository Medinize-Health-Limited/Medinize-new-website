<template>
  <section class="w-11/12 md:w-5/12 mx-auto rounded-lg shadow-lg bg-white">
    <div class="md:space-y-3 space-y-1 pt-6 pb-6 px-6 md:p-10 rounded-xl">
      <div class="space-y-3">
        <h1 class="text-center text-lg md:text-3xl font-black">
          Create an account
        </h1>
        <p class="text-center text-xs md:text-base">
          Gain access to<span class="text-teal-500">
            affordable and quality health services</span
          >
        </p>
      </div>

      <div
        class="md:flex justify-between items-center md:space-x-6 space-y-3 md:space-y-0"
      >
        <div class="space-y-2 w-full">
          <label class="text-gray-500 text-xs">First name *</label>
          <div>
            <input
              type="text"
              placeholder="Enter first name"
              v-model="form.first_name"
              class="outline-none px-3 py-3 bg-gray-100 text-xs border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light"
            />
          </div>
        </div>

        <div class="space-y-2 w-full">
          <label class="text-gray-500 text-xs">Last name *</label>
          <div>
            <input
              type="text"
              placeholder="Enter last name"
              v-model="form.last_name"
              class="outline-none px-3 py-3 bg-gray-100 text-xs border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light"
            />
          </div>
        </div>
      </div>

      <div class="space-y-2 w-full">
        <label class="text-gray-500 text-xs">Email *</label>
        <div>
          <input
            type="email"
            placeholder="Enter email address"
            v-model="form.email"
            class="outline-none px-3 py-3 bg-gray-100 text-xs border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light"
          />
        </div>
      </div>

      <div class="space-y-2 w-full">
        <label class="text-gray-500 text-xs">Phone number</label>
        <div>
          <input
            type="tel"
            placeholder="Enter phone number"
            v-model="form.phone"
            class="outline-none px-3 py-3 bg-gray-100 text-xs border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light"
          />
        </div>
      </div>

      <div class="space-y-2 w-full">
        <label class="text-gray-500 text-xs">Password</label>
        <div>
          <input
            type="password"
            placeholder="Enter password"
            class="outline-none px-3 py-3 bg-gray-100 text-xs border-gray-50 border-none focus:border-green-500 rounded-md w-full"
          />
        </div>
      </div>

      <div class="pt-6">
        <button
          :disabled="loading && !isFormValid"
          style="background-color: #13b859"
          class="text-white py-2 rounded-lg text-sm text-center w-full"
        >
          {{ loading ? "Processsing..." : " Sign Up" }}
        </button>
      </div>

      <p class="text-center text-xs text-gray-500 w-11/12 py-2 mx-auto">
        By clicking "Sign up", you agree to Medinize’s
        <nuxt-link to="#" class="text-green-500"> Terms of Use </nuxt-link>
        and acknowledge you have read the
        <nuxt-link to="#" class="text-green-500"> Privacy Policy. </nuxt-link>
      </p>

      <hr />
      <p class="text-center text-gray-400 text-sm md:text-base">
        Already have an account ?
        <nuxt-link to="/sign-in" class="text-green-700"> Sign In </nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
    return {
      loading: false,
      form: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
      },
    };
  },
  computed: {
    isFormValid() {
      return this.form.first_name &&
        this.form.last_name &&
        this.email &&
        this.phone &&
        this.password
        ? true
        : false;
    },
  },
  methods: {
    handleSignup() {
      this.loading = true;
      this.$axios
        .post("https://medinize-apis.onrender.com/signup/")
        .then((res) => {
          console.log(res);
          this.$emit("signupSuccess");
          if (process.client) {
            localStorage.setItem("currentUser", JSON.stringify(res.data));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
