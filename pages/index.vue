<template>
  <main>
    <header class="bg-[#F3F5F6]">
      <div class="mx-auto max-w-screen-xl pr-4 sm:pr-6 lg:pr-8">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <a class="block text-teal-600" href="/">
              <span class="sr-only">Home</span>
              <img src="@/assets/img/new-logo.png" alt="" class="h-20">
            </a>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <nuxt-link exact="" class="text-[#1E1E1E] transition hover:text-gray-500/75" to="/">
                    Home
                  </nuxt-link>
                </li>

                <li>
                  <a href="#aboutUs" exact="" class="text-[#1E1E1E] transition hover:text-gray-500/75" to="/">
                    About
                  </a>
                </li>

                <li>
                  <a href="#services" exact="" class="text-[#1E1E1E] transition hover:text-gray-500/75" to="/">
                    Services
                  </a>
                </li>
                <li>
                  <a
                    class="text-[#1E1E1E] transition hover:text-gray-500/75"
                    href="https://medinize-communities.netlify.app/"
                    target="_self"
                  >Community</a>
                </li>

                <li>
                  <nuxt-link exact="" class="text-[#1E1E1E] transition hover:text-gray-500/75" to="/faq">
                    FAQs
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link exact="" class="text-[#1E1E1E] transition hover:text-gray-500/75" to="#contact">
                    Contact
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <div class="hidden sm:flex">
                <nuxt-link
                  class="rounded-full px-5 py-2.5 text-sm font-medium text-gray-600 border-2 border-[#13B859] shadow"
                  to="/login"
                >
                  Login
                </nuxt-link>
              </div>
              <div class="hidden sm:flex">
                <nuxt-link to="/sign-up" class="rounded-full bg-[#13B859] text-white px-5 py-2.5 text-sm font-medium">
                  Sign Up
                </nuxt-link>
              </div>
            </div>

            <div class="block md:hidden">
              <button
                class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                @click="showNavbar = !showNavbar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="w-11/12 mx-auto">
      <section v-if="showNavbar" class="absolute top-2 bg-black lg:hidden z-50 w-11/12 mx-auto rounded-lg p-6 space-y-6">
        <div class="flex justify-between items-center">
          <div><img src="@/assets/img/new-logo.png" alt="" class="h-20"></div>
          <div class="rounded-full cursor-pointer bg-white shadow-lg p-2 px-3" @click="showNavbar = !showNavbar">
            X
          </div>
        </div>
        <ul class="space-y-6 z-50">
          <li><a href="#aboutUd" class="text-white font-medium">About</a></li>
          <li><a href="#services" class="text-white font-medium">Services</a></li>
          <li>
            <nuxt-link to="/faq" class="text-white font-medium">
              FAQs
            </nuxt-link>
          </li>
          <li><a href="#contact" class="text-white font-medium">Contact</a></li>
          <li>
            <nuxt-link to="/login" class="text-white font-medium">
              Login
            </nuxt-link>
          </li>
          <div class="pt-6">
            <nuxt-link
              to="/sign-up"
              class="text-white w-full bg-green-400 rounded-md px-20 py-2.5"
            >Sign Up</nuxt-link>
          </div>
        </ul>
      </section>
    </div>

    <main class="max-w-screen-xl mx-auto">
      <hero-section />
      <why-choose-medinize />
      <about-us id="aboutUs" />
      <medinize-patient />
      <medinize-doctors />
      <our-services id="services" />
      <news-letter id="contact" />
      <footer-section />
    </main>
  </main>
</template>

<script>
import OurServices from '@/components/NewComponents/OurServices.vue'
import HeroSection from '@/components/NewComponents/Hero'
import WhyChooseMedinize from '@/components/NewComponents/WhyChooseMedinize'
import AboutUs from '@/components/NewComponents/AboutUs'
import MedinizePatient from '@/components/NewComponents/MedinizePatient'
import MedinizeDoctors from '@/components/NewComponents/MedinizeDoctors'
import NewsLetter from '@/components/NewComponents/NewsLetter.vue'
import FooterSection from '@/components/NewComponents/FooterSection.vue'
export default {
  components: {
    HeroSection,
    WhyChooseMedinize,
    AboutUs,
    MedinizePatient,
    MedinizeDoctors,
    OurServices,
    NewsLetter,
    FooterSection
  },
  layout: 'landingLayout',
  data () {
    return {
      showNavbar: false
    }
  },
  head: {
    title: 'Medinize | Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Medinize | Home'
      }
    ]
  },
  methods: {
    getStarted () {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.nuxt-link-exact-active {
  font-weight: bold;
  color: blue;
}
</style>
