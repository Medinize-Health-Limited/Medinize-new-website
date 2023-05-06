<template>
  <section class="w-11/12 md:w-5/12 mx-auto rounded-lg shadow-lg bg-white">
    <div class="md:space-y-6 space-y-3 p-6 md:p-10 rounded-xl">
      <div class="space-y-3">
        <div class="flex justify-center items-center">
          <img src="@/assets/img/user_profile.svg" alt="">
        </div>
        <h1 class="text-center text-sm md:text-3xl font-light">
          Welcome, <span class="font-bold">Samuel</span>
        </h1>
        <p class="text-center md:text-base text-xs">
          Help us provide you with the best healthcare by filling the
          information below.
        </p>
      </div>

      <div class="space-y-2 w-full">
        <label class="text-gray-500 text-xs md:text-base">Date of birth *</label>
        <div class="flex justify-between items-center space-x-6">
          <select
            class="outline-none text-xs md:text-base px-3 py-2.5 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full"
          >
            <option>Month</option>
            <option>JAN</option>
            <option>FEB</option>
            <option>MAR</option>
            <option>APR</option>
            <option>MAY</option>
            <option>JUN</option>
            <option>JULY</option>
            <option>AUG</option>
            <option>SEP</option>
            <option>OCT</option>
            <option>NOV</option>
            <option>DEC</option>
          </select>

          <input
            type="text"
            placeholder="DD"
            max="2"
            class="outline-none text-xs md:text-base px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light"
          >

          <input
            type="text"
            placeholder="YYYY"
            maxlength="4"
            class="outline-none text-xs md:text-base px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light"
          >
        </div>
      </div>

      <div class="space-y-2 w-full">
        <label class="text-gray-500 text-xs md:text-base">Gender *</label>
        <div>
          <select
            class="outline-none px-3 text-xs md:text-base py-2.5 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full"
          >
            <option disabled>
              Select an option
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>
        </div>
      </div>

      <div class="flex justify-between items-center space-x-6">
        <div class="space-y-2 w-full">
          <label class="text-gray-500 text-xs md:text-base">Height (cm)</label>
          <div>
            <input
              type="text"
              placeholder="Enter height"
              class="outline-none px-3 text-xs md:text-base py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light"
            >
          </div>
        </div>

        <div class="space-y-2 w-full">
          <label class="text-gray-500 text-xs md:text-base">Weight (Kg)</label>
          <div>
            <input
              type="text"
              placeholder="Enter weight"
              class="outline-none px-3 text-xs md:text-base py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full font-light"
            >
          </div>
        </div>
      </div>

      <div class="space-y-2 w-full">
        <label class="text-gray-500 text-xs md:text-base">HMO Provider</label>
        <div>
          <select
            class="outline-none text-xs md:text-base px-3 py-3 bg-gray-100 border-gray-50 border-none focus:border-green-500 rounded-md w-full"
          >
            <option disabled>
              Select an option
            </option>
            <option>Aiico Insurance</option>
            <option>Hygiea</option>
            <option>Redcare</option>
            <option>Roding</option>
          </select>
        </div>
      </div>

      <div class="pt-4">
        <button
          style="background-color: #13b859"
          class="text-white py-2.5 rounded-lg text-center w-full text-xs md:text-base"
        >
          Continue
        </button>
      </div>

      <p class="text-center text-teal-500 text-xs md:text-base">
        I’ll do this later
      </p>
    </div>
  </section>
</template>
