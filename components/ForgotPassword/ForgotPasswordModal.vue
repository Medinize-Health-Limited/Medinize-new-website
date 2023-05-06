<template>
  <section class="w-11/12 md:w-5/12 mx-auto rounded-lg shadow-lg bg-white">
    <div class="space-y-10 p-6 md:p-10 rounded-xl">
      <div class="flex justify-center items-center">
        <img src="@/assets/img/success_thumb.svg" alt="" />
      </div>

      <p class="text-center text-2xl">Password reset</p>
      <p class="text-center md:text-base text-sm">
        Your new password has been reset successfully.You can use your password
        to Sign into your account.
      </p>

      <div class="w-11/12 mx-auto pb-6 md:pb-0">
        <button
          style="background-color: #13b859"
          class="text-white py-2.5 md:py-3 text-sm md:text-base rounded-lg text-center w-full"
        >
          Sign In
        </button>
      </div>
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
