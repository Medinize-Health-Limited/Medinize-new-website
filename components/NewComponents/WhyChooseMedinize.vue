<template>
  <main>
    <section class="pt-[114px] hidden lg:block space-y-14">
      <h1 class="text-[#0A7D08] text-2xl font-semibold text-center">
        Why Choose Medinize
      </h1>
      <div class="grid grid-cols-4 gap-6">
        <div v-for="item in reasons" :key="item.title" class="space-y-6 flex justify-center items-center flex-col border-r-4 s border-b-4 border-gray-400 rounded-bl-lg rounded-br-lg p-6">
          <img :src="require(`~/assets/img/${item.imgUrl}.svg`)" alt="icon" class="h-10 w-10">
          <h1 class="text-[#0A7D08] font-medium">
            {{ item.title }}
          </h1>
          <p class="text-[#1E1E1E] text-xs font-extralight leading-loose text-center">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="lg:pt-[114px] pt-20 space-y-[62px] w-10/12 mx-auto lg:w-0 lg:hidden">
      <h1 class="text-[#0A7D08] text-lg lg:text-2xl font-semibold text-center">
        Why Choose Medinize
      </h1>
      <div class="grid grid-cols-1 space-y-10 lg:space-y-0 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="item in reasons" :key="item.title" class="space-y-6 flex justify-center items-center border-r-[0.7px] border-b-[0.7px] flex-col lg:border-r-4 shadow-lg  border-gray-100 lg:border-gray-400 rounded-bl-lg rounded-br-lg p-6">
          <img :src="require(`~/assets/img/${item.imgUrl}.svg`)" alt="icon" class="h-10 w-10">
          <h1 class="text-[#0A7D08] font-medium">
            {{ item.title }}
          </h1>
          <p class="text-[#1E1E1E] text-xs font-extralight leading-loose text-center">
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
      reasons: [
        {
          title: 'Secure and Confidential',
          description: 'Medinize prioritizes the security and confidentiality of users’ information employing advanced encryption and security protocols to ensure that all data is protected from unauthorized access. ',
          imgUrl: 'secure-confidential'
        },
        {
          title: 'Seamless Communication',
          description: 'Through our community, we offer you secure messaging with your doctor and seamless efficient communication for inquiries and information.',
          imgUrl: 'seamless-communication'
        },
        {
          title: 'Secure Payment Processing',
          description: 'With our secure payment process, patients can confidently make payments for various clinical services, such as clinical appointments or specialized treatments. ',
          imgUrl: 'payment-processing'
        },
        {
          title: 'Enhanced Accessibility',
          description: 'Medinize’s 24/7 availability ensures that patients can connect with their doctors at anytime, regardless of their location.',
          imgUrl: 'enhanced-accessibility'
        }
      ]
    }
  }
}
</script>

<style>

</style>
