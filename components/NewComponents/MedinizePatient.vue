<template>
  <main>
    <section class="bg-[#CED4EB] space-y-[50px] pt-[32px] mt-[96px] px-4 lg:px-0 hidden lg:block">
      <h1 class="lg:text-[#09299A] text-[#121212] text-base lg:text-2xl font-extrabold text-center">
        Using Medinize as a Patient
      </h1>
      <div class="lg:flex justify-between lg:px-[61px] space-y-10 lg:space-y-0">
        <div class="lg:w-6/12 bg-[#CED4EB] flex justify-center items">
          <img src="@/assets/img/lady-dialing.png" alt="" class="lg:h-[500px]">
        </div>
        <div class="lg:w-6/12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-[40px]">
            <div v-for="(item, index) in patientServices" :key="index" class="flex justify-start bg-white p-3 rounded-md gap-x-4">
              <img :src="require(`~/assets/img/${item.imgUrl}.svg`)" class="h-6 w-6" alt="">
              <div class="space-y-2">
                <h1 class="text-sm font-semibold text-[#09299A]">
                  {{ item.title }}
                </h1>
                <p class="text-xs font-thin leading-loose">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lg:bg-[#CED4EB] bg-indigo-25 space-y-[50px] pt-[32px] lg:mt-[96px] px-4 lg:px-0 lg:hidden">
      <h1 class="lg:text-[#09299A] text-[#121212] text-base lg:text-2xl font-extrabold text-center">
        Using Medinize as a Patient
      </h1>
      <div class="lg:flex justify-between lg:px-[61px] space-y-10 lg:space-y-0">
        <div class="hidden lg:w-6/12 bg-[#CED4EB] lgLflex justify-center items-center lg:justify-start lg:items-start">
          <img src="@/assets/img/lady-dialing.png" alt="" class="lg:h-[500px]">
        </div>
        <div class="lg:w-6/12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pb-[40px]">
            <div v-for="(item, index) in patientServices" :key="index" class="flex space-y-4 lg:justify-start lg:flex-row lg:items-start justify-center items-center flex-col bg-white p-3 rounded-md gap-x-4 shadow-md border-[0.4px] lg:shadow-none lg:border-none">
              <img :src="require(`~/assets/img/${item.imgUrl}.svg`)" class="h-6 w-6" alt="">
              <div class="space-y-2 flex justify-center items-center flex-col gap-y-3 lg:hidden">
                <h1 class="text-sm font-semibold text-[#09299A]">
                  {{ item.title }}
                </h1>
                <p class="text-xs font-thin leading-loose text-center">
                  {{ item.description }}
                </p>
              </div>

              <div class="space-y-2 hidden lg:block">
                <h1 class="text-sm font-semibold text-[#09299A]">
                  {{ item.title }}
                </h1>
                <p class="text-xs font-thin leading-loose">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      patientServices: [
        {
          title: '24/7 Availability',
          description: 'Medinize allows you access healthcare services and information anytime, day or night.',
          imgUrl: 'availability'
        },
        {
          title: 'Access to Health Records',
          description: 'With Medinize, you can access your complete medical history, including diagnoses, treatments and test results.',
          imgUrl: 'health-records'
        },
        {
          title: 'Virtual Consultation',
          description: 'Medinize enables you consult with healthcare professionals from the comfort of your home.',
          imgUrl: 'virtual-consultation'
        },
        {
          title: 'Personal Security',
          description: 'Medinize provides protection of your personal information with robust security measures.',
          imgUrl: 'personal-security'
        }
      ]
    }
  }
}
</script>

<style></style>
