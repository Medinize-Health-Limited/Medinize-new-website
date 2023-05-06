<template>
  <section class="w-11/12 md:w-5/12 mx-auto rounded-lg shadow-lg bg-white mt-20">
    <div class="space-y-8 p-6 md:p-10 rounded-xl">
      <div class="space-y-3">
        <h1 class="text-center text-xl md:text-2xl font-black text-gray-600">
          Confirm Email
        </h1>
        <p class="text-center text-sm md:text-base">
          Enter the verification code sent to your email
        </p>
      </div>

      <p class="text-center text-sm font-light text-gray-400">Enter Code</p>

      <div class="flex items-center justify-between space-x-3 w-10/12 mx-auto">
        <input
          required
          maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="password"
        />
        <input
          required
          maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="password"
        />
        <input
          required
          maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="password"
        />
        <input
          required
          maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="password"
        />
        <input
          required
          maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="password"
        />
        <input
          required
          maxlength="1"
          class="w-2/12 border md:h-14 h-10 rounded-md hover:border-green-600 outline-none text-center text-3xl p-3"
          type="password"
        />
      </div>

      <div class="w-10/12 mx-auto">
        <button
          style="background-color: #13b859"
          class="text-white py-2.5 rounded-lg text-center w-full text-sm md:text-base"
        >
          Confirm
        </button>
      </div>

      <hr />
      <p class="text-center text-gray-400 text-sm md:text-base">
        Didn’t get a code?
        <nuxt-link to="#" class="text-green-700"> Resend code </nuxt-link>
      </p>
    </div>
  </section>
</template>

