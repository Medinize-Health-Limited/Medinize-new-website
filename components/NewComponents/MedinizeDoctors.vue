<template>
  <main>
    <section class="bg-[#CED4EB] space-y-[32px] pt-[32px] background mt-[96px] px-6 hidden lg:block">
      <h1 class="text-[#09299A] text-2xl font-extrabold text-center">
        Using Medinize as a Doctor
      </h1>
      <div class="lg:flex justify-between lg:only:pl-[61px] gap-x-20">
        <div class="lg:w-7/12">
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
        <div class="lg:w-5/12">
          <img src="@/assets/img/medinize-doctor.png" alt="" class="">
        </div>
      </div>
    </section>
    <section class="lg:bg-[#CED4EB] bg-indigo-50 space-y-[32px] pt-[32px] lg:background lg:mt-[96px] px-6 lg:px-0 lg:hidden">
      <h1 class="text-[#09299A] text-lg lg:text-2xl font-extrabold text-center">
        Using Medinize as a Doctor
      </h1>
      <div class="lg:flex justify-between lg:only:pl-[61px] gap-x-20">
        <div class="lg:w-6/12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pb-[40px]">
            <div v-for="(item, index) in patientServices" :key="index" class="lg:flex justify-start bg-white p-3 rounded-md gap-x-4 hidden">
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

            <div v-for="item in patientServices" :key="item.id" class="bg-white border-[0.7px] shadow-md p-3 rounded-md gap-x-4 lg:hidden flex justify-center items-center flex-col gap-y-3">
              <div>
                <img :src="require(`~/assets/img/${item.imgUrl}.svg`)" class="h-6 w-6" alt="">
              </div>
              <div class="space-y-2 flex justify-center items-center flex-col">
                <h1 class="text-sm font-semibold text-[#09299A]">
                  {{ item.title }}
                </h1>
                <p class="text-xs font-thin leading-loose text-center">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-6/12 hidden lg:block">
          <img src="@/assets/img/medinize-doctor.png" alt="" class="">
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
          id: 1,
          title: 'Virtual Consultations',
          description: 'Medinize enables you conduct virtual consultations with patients from anywhere.',
          imgUrl: 'virtual-consultation'
        },
        {
          id: 2,
          title: 'Appointment Management',
          description: 'Medinize enables you to manage your appointments and availability in one place.',
          imgUrl: 'appointment-management'
        },
        {
          id: 3,
          title: 'Flexible Way To Earn Extra Income',
          description: 'Medinize is a convenient and easy way to make extra income, expand your reach and improve your skills.',
          imgUrl: 'extra-income'
        },
        {
          id: 4,
          title: 'Real-Time Updates',
          description: 'With Medinize, you can receive real-time updates on appointment requests, patient messages and important notifications. ',
          imgUrl: 'real-time-updates'
        }
      ]
    }
  }
}
</script>

<style scoped>
.background {
  background: url('@/assets/img/hospital-walkway.jpg');
}
</style>
