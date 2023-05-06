<template>
  <section class="w-11/12 md:w-5/12 mx-auto rounded-lg shadow-lg bg-white">
    <div class="space-y-10 p-6 md:p-10 rounded-xl">
      <div class="flex justify-center items-center">
        <img src="@/assets/img/success_thumb.svg" alt="" />
      </div>
      <p class="font-bold text-green-600 text-center">Great!</p>
      <p class="text-gray-600 text-center text-sm md:text-base">
        Your health information is up to date
      </p>
      <p class="text-center text-gray-500 text-xs md:text-base">
        To get most out of Harmonize, visit your profile to complete all medical
        records information
      </p>

      <div class="w-11/12 mx-auto pb-6 md:pb-0">
        <button
          style="background-color: #13b859"
          class="text-white py-2.5 rounded-lg text-center w-full text-sm md:text-base"
        >
          Okay, got it
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
