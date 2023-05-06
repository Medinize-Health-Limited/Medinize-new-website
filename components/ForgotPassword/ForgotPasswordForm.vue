<template>
  <section class="w-11/12 md:w-5/12 mx-auto rounded-lg shadow-lg bg-white">
    <div class="space-y-6 p-6 md:p-10 rounded-xl">
      <div class="space-y-3">
        <h1 class="text-center text-xl md:text-2xl font-black">
          Forgot password?
        </h1>
        <p class="text-center md:w-9/12 mx-auto text-xs md:text-sm">
          Enter the email address you used when you joined and we’ll send you a
          link to reset your password.
        </p>
      </div>

      <div class="space-y-3 w-full">
        <label class="text-gray-500">Email*</label>
        <div>
          <input
            type="text"
            placeholder="Enter email address"
            class="outline-none px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light text-sm md:text-base"
          />
        </div>
      </div>

      <div>
        <button
          style="background-color: #13b859"
          class="text-white py-2.5 md:py-3 rounded-lg text-center w-full"
        >
          Send Reset Link
        </button>
      </div>

      <p class="text-teal-500 text-center text-sm font-medium cursor-pointer">
        Cancel
      </p>

      <hr />
      <p class="text-center text-gray-400 text-sm md:text-base">
        Don't have an account ?
        <nuxt-link to="/sign-up" class="text-teal-500"> Sign Up </nuxt-link>
      </p>
    </div>
  </section>
</template>

<style scoped>
.background {
  background-image: url("./assets/img/landing.svg");
  height: 100vh;
  width: 100vw;
}
</style>
