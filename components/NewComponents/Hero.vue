<template>
  <main>
    <section class="lg:flex items-center relative mt-32 hidden">
      <div class="w-5/12 bg-[#CED4EB] px-[78px] py-[115px] space-y-3">
        <h1 class="text-[#0A0A0A] text-2xl font-extrabold leading-loose">
          Accelerate your Health Plans with <span class="text-[#0A7D08]">Medinize</span>
        </h1>
        <p class="text-[#121212] font-thin text-sm leading-loose">
          Our platform enables patients to easily manage health care needs from the comfort of their homes and have easy
          access to medical services. Unlock the power of medinize and accelerate towards a healthier future.
        </p>
        <div class="space-x-6">
          <a href="https://medinize-communities.netlify.app/" class="bg-[#0A7D08] text-white rounded-md text-xs px-3 py-2.5">
            Book an Appointment
          </a>
          <a href="https://medinize-communities.netlify.app/" class="text-[#0A7D08] border-[0.4px] border-[#0A7D08] rounded-md text-xs px-3 py-2.5">
            Apply as a Doctor
          </a>
        </div>
      </div>
      <div class="w-7/12 absolute z-50 top-6 left-[500px]">
        <img src="@/assets/img/HeroSection.jpg" alt="" class="">
      </div>
    </section>
    <section class="flex items-center relative lg:mt-32 lg:hidden">
      <div class="px-[32px] mx-auto py-20  bg-white space-y-6">
        <h1 class="text-[#0A0A0A] text-4xl font-extrabold leading-snug text-center">
          Accelerate your Health Plans with <span class="text-[#0A7D08]">Medinize</span>
        </h1>
        <p class="text-[#121212] text-sm font-medium leading-loose text-center">
          Our platform enables patients to easily manage health care needs from the comfort of their homes and have easy
          access to medical services. Unlock the power of medinize and accelerate towards a healthier future.
        </p>
        <div class="space-y-6 w-full">
          <div class="w-full">
            <a href="https://medinize-communities.netlify.app/"
              class="bg-[#0A7D08] font-semibold text-center  w-full text-white rounded-md text-xs px-3 py-3 block">
              Book an Appointment
            </a>
          </div>
          <div class="w-full mt-10">
            <a href="https://medinize-communities.netlify.app/"
              class="text-[#0A7D08] font-semibold  w-full border-[0.7px] border-[#0A7D08] rounded-md text-xs px-3 py-3 block text-center">
              Apply as a Doctor
            </a>
          </div>
        </div>
      </div>
      <div class="lg:w-7/12 lg:absolute z-50 top-6 left-[500px] hidden lg:block">
        <img src="@/assets/img/HeroSection.jpg" alt="" class="">
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style>
.background {
  background: url('@/assets/img/landingDoctor.jpg');
  background-repeat: no-repeat;
  background-color: white;
}
</style>
