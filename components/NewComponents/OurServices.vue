<template>
  <main>
    <section class="space-y-[32px] pt-[32px] mt-[96px] hidden lg:block">
      <h1 class="text-[#09299A] text-2xl font-extrabold text-center">
        Our Services
      </h1>
      <div class="grid grid-cols-3 gap-10 space-y-6">
        <div v-for="(item, index) in services" :key="index" class="flex justify-center space-y-6 items-center items-center flex-col">
          <img :src="require(`~/assets/img/${item.imgUrl}.png`)" alt="">
          <h1 class="text-[] text-[#0A7D08]">
            {{ item.title }}
          </h1>
          <p class="text-sm text-center leading-loose tracking-wide">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>
    <section class="space-y-[32px] pt-[32px] lg:mt-[96px] lg:hidden">
      <h1 class="text-[#0A7D08] text-2xl font-extrabold text-center">
        Our Services
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6 lg:px-[61px]">
        <div v-for="(item, index) in services" :key="index" class="flex justify-center items-center flex-col space-y-6">
          <div class="">
            <img :src="require(`~/assets/img/${item.imgUrl}.png`)" alt="" class="h-full w-full">
          </div>
          <h1 class="text-[] text-[#0A7D08]">
            {{ item.title }}
          </h1>
          <p class="text-xs text-center leading-loose tracking-wide">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      services: [
        {
          title: 'Clinical Appointment',
          description: 'Our convenient and user-friendly platform simplifies the process of booking and managing clinical appointments. Patients can easily schedule appointments with medical professionals based on their ability, specialization and location, eliminate the need for lengthy waiting time. ',
          imgUrl: 'clinical-appointnments'
        },
        {
          title: 'E-Records',
          description: 'With Medinize, users can make informed decisions about their health and feel confident in their ability to manage their well-being. Doctors can also use patient’s data to enable them identify potential health risks.',
          imgUrl: 'e-records'
        },
        {
          title: 'Supportive Health Community',
          description: 'Medinize fosters a community driven-approach by providing a platform for users to connect with each other, collaborate, get knowledge, access educational resources, health tips and relevant articles shared by medical professionals.',
          imgUrl: 'supportive-community'
        }
      ]
    }
  }
}
</script>

<style>

</style>
