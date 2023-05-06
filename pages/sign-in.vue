<template>
  <div class="bg-black bg-opacity-25">
    <div
      class="background w-full h-full bg-blend-overlay bg-opacity-50 bg-gray-400 pt-10 rounded-lg"
    >
      <section class="w-11/12 md:w-5/12 mx-auto rounded-lg shadow-lg bg-white">
        <div class="space-y-6 p-6 py-10 md:p-10 rounded-xl">
          <div class="space-y-3">
            <h1 class="text-center text-xl md:text-3xl font-black">Sign In</h1>
            <p class="text-center">
              Enjoy
              <span class="text-teal-500 text-sm">
                affordable and quality health services</span
              >
            </p>
          </div>

          <div class="space-y-2 w-full">
            <label class="text-gray-500 text-sm md:text-base"
              >Email or Phone number</label
            >
            <div>
              <input
                type="text"
                placeholder="Email or Phone number"
                class="outline-none px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light text-sm md:text-base"
              />
            </div>
          </div>

          <div class="space-y-2 w-full">
            <label class="text-gray-500 text-sm md:text-base">Password</label>
            <div>
              <input
                type="password"
                placeholder="Password"
                class="outline-none px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full text-sm md:text-base"
              />
            </div>
          </div>

          <p class="text-teal-500 text-right text-sm font-medium">
            Forgot password ?
          </p>

          <div>
            <button
              style="background-color: #13b859"
              class="text-white md:py-3 py-2.5 rounded-lg text-center w-full"
            >
              Sign In
            </button>
          </div>

          <hr />
          <p class="text-center text-gray-400 text-sm md:text-base">
            Don't have an account ?
            <nuxt-link to="/sign-up" class="text-teal-500"> Sign Up </nuxt-link>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url("./assets/img/landing.svg");
  height: 100vh;
  object-position: center;
  object-fit: contain;
  width: 100vw;
}
</style>
