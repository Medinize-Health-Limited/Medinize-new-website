<template>
  <section class="w-11/12 md:w-5/12 mx-auto rounded-lg shadow-lg bg-white">
    <div class="space-y-6 p-6 md:p-10 rounded-xl">
      <div class="space-y-3">
        <h1 class="text-center text-xl md:text-2xl font-black">
          Reset password
        </h1>
        <p class="text-center md:w-9/12 mx-auto text-xs md:text-sm">
          Create your new password. Your new password must be different from the
          previous password.
        </p>
      </div>

      <div class="space-y-3 w-full">
        <label class="text-gray-500 text-xs md:text-base">New password*</label>
        <div>
          <input
            type="password"
            placeholder="Enter password"
            class="outline-none px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light text-sm md:text-base"
          />
        </div>
      </div>

      <div class="space-y-3 w-full">
        <label class="text-gray-500 text-xs md:text-base"
          >Confirm password*</label
        >
        <div>
          <input
            type="password"
            placeholder="Confirm password"
            class="outline-none px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light text-sm md:text-base"
          />
        </div>
      </div>

      <div>
        <button
          style="background-color: #13b859"
          class="text-white py-2.5 rounded-lg text-center w-full text-sm md:text-base"
        >
          Reset Password
        </button>
      </div>

      <p class="text-teal-500 text-center text-sm font-medium cursor-pointer">
        Cancel
      </p>

      <hr />
      <p class="text-center text-gray-400 text-sm md:text-base">
        Don't have an account ?
        <nuxt-link to="#" class="text-teal-500"> Sign Up </nuxt-link>
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
