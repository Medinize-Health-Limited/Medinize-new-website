<template>
  <main>
    <section>
      <header class="bg-[#F3F5F6]">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="md:flex md:items-center md:gap-12">
              <a class="block text-teal-600" href="/">
                <span class="sr-only">Home</span>
                <img src="@/assets/img/new-logo.png" alt="" class="h-12">
              </a>
            </div>

            <div class="hidden md:block">
              <nav aria-label="Global">
                <ul class="flex items-center gap-6 text-sm">
                  <li>
                    <nuxt-link class="text-[#1E1E1E] transition hover:text-gray-500/75" to="/">
                      Home
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link class="text-[#1E1E1E] transition hover:text-gray-500/75" to="/">
                      About
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link class="text-[#1E1E1E] transition hover:text-gray-500/75" to="/">
                      Services
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link class="text-[#1E1E1E] transition hover:text-gray-500/75" to="/">
                      FAQs
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link class="text-[#1E1E1E] transition hover:text-gray-500/75" to="/">
                      Contact
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="flex items-center gap-4">
              <div class="sm:flex sm:gap-4">
                <div class="hidden sm:flex">
                  <nuxt-link class="rounded-full px-5 py-2.5 text-sm font-medium text-gray-600 border-2 border-[#13B859] shadow"
                    to="/login">
                    Login
                  </nuxt-link>
                </div>
                <div class="hidden sm:flex">
                  <nuxt-link class="rounded-full bg-[#13B859] text-white px-5 py-2.5 text-sm font-medium" to="/sign-up">
                    Sign Up
                  </nuxt-link>
                </div>
              </div>

              <div class="block md:hidden">
                <button @click="showNavbar = !showNavbar"
                  class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>

    <div class="w-11/12 mx-auto">
      <section v-if="showNavbar" class="absolute top-2 bg-black lg:hidden z-50 w-11/12 mx-auto rounded-lg p-6 space-y-6">
        <div class="flex justify-between items-center">
          <div><img src="@/assets/img/new-logo.png" alt="" class="h-" /></div>
          <div @click="showNavbar = !showNavbar" class="rounded-full cursor-pointer bg-white shadow-lg p-2 px-3">X</div>
        </div>
        <ul class="space-y-6 z-50">
          <li><nuxt-link to="/" class="text-white font-medium">About</nuxt-link></li>
          <li><nuxt-link to="/" class="text-white font-medium">Services</nuxt-link></li>
          <li><nuxt-link to="/" class="text-white font-medium">FAQs</nuxt-link></li>
          <li><nuxt-link to="/" class="text-white font-medium">Contact</nuxt-link></li>
          <li><nuxt-link to="/login" class="text-white font-medium">Login</nuxt-link></li>
          <button @click="$router.push('/sign-up')" class="text-white w-full bg-green-400 rounded-md px-20 py-2">Sign Up</button>
        </ul>
      </section>
    </div>

    <section class="relative mt-5 lg:mt-0">
      <section class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:flex justify-center z-0 relative">
        <div class="lg:w-1/2 space-y-6">
          <h1 class="lg:text-5xl text-3xl text-[#20718D] leading-relaxed font-bold lg:mt-32">
            Accelerate your Health Goals with <span class="text-[#13B859]">Medinize</span>
          </h1>
          <p class="text-sm lg:text-base leading-loose text-justify">
            Our platform enables patients to easily manage health
            care needs from the comfort of their homes and have
            easy access to medical services. Unlock the power of
            medinize and accelerate towards a healthier future
          </p>
          <button class="bg-[#13B859] rounded-lg py-2.5 px-6 text-white lg:text-base text-sm" @click="getStarted">
            Get Started
          </button>
        </div>
        <div class="lg:w-1/2 flex justify-center items-center z-0">
          <img src="@/assets/img/hero.jpg" class="object-cover lg:absolute top-0">
        </div>
        <img src="@/assets/img/eclise.svg" alt="" class="absolute -left-20 -bottom-[300px] hidden lg:block">
      </section>

      <section class="bg-[#13B859] lg:mt-60 w-full z-50 lg:absolute top-[340px] flex justify-center items-center">
        <div
          class="mx-auto space-y-6 lg:space-y-0 lg:space-x-16  max-w-screen-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-10 lg:pl-16">
          <div class="w-[300px] lg:w-[216px] rounded h-[156px] bg-gray-300" />
          <div class="w-[300px] lg:w-[216px] rounded h-[156px] bg-gray-300" />
          <div class="w-[300px] lg:w-[216px] rounded h-[156px] bg-gray-300" />
          <div class="w-[300px] lg:w-[216px] rounded h-[156px] bg-gray-300" />
        </div>
      </section>
    </section>

    <section class="mx-auto w-11/12 lg:max-w-screen-xl pt-16 lg:pt-[500px] space-y-9">
      <h1 class="lg:text-4xl text-2xl text-center text-[#13B859] font-bold lg:pb-6">
        Who Are We?
      </h1>
      <div class="lg:flex justify-between lg:space-x-10 space-y-6 lg:space-y-0">
        <div class="lg:w-6/12">
          <img src="@/assets/img/meeting.jpg">
        </div>
        <div class="lg:w-6/12 space-y-6">
          <p class="text-sm lg:text-base text-[#1E1E1E] font-[500] leading-loose text-justify">
            We are a team of dedicated professionals, passionate about improving access to quality healthcare services
            and empowering individuals to take control of their health. At medinize, we believe that everyone should have
            access to healthcare resources and and be ble to make informed decisions about their health. Through our
            user-friendly interface, we aim to bridge the gap between patients and doctors and doctors creating a smooth
            and personalized healthcare experience.
          </p>
          <button class="border-[#13B859] border-2 rounded-full text-[#1E1E1E] px-6 py-2.5">
            Read more
          </button>
        </div>
      </div>
    </section>

    <section class="bg-[#D0F1DE] mt-32 pt-10 space-y-16">
      <h1 class="lg:text-4xl text-2xl text-center text-[#13B859] font-bold">
        Why Choose Medinize
      </h1>
      <div class="lg:flex items-center mx-auto max-w-screen-xl pb-16">
        <div class="lg:w-4/12">
          <img src="@/assets/img/whyChooseMedinize.png" alt="">
        </div>
        <div class="lg:w-8/12 w-11/12 mx-auto lg:mx-0">
          <div class="grid lg:grid-cols-2 gap-x-10 gap-y-6">
            <div class="flex justify-center items-center flex-col">
              <img src="@/assets/img/secure.svg" alt="" class="h-32 w-32">
              <div class="space-y-2">
                <h3 class="font-medium text-[#20718D] text-lg">
                  Secure and Confidential
                </h3>
                <p class="text-sm text-justify leading-loose">
                  Medinize prioritizes the security and confidentiality of users’ information
                  employing advanced encryption
                  and security protocols to ensure that all data is protected from unauthorized access. Users can trust
                  that
                  their health information is protected, ensuring peace of mind while accessing healthcare services.
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-col">
              <img src="@/assets/img/seamless.svg" alt="" class="h-32 w-32">
              <div class="space-y-2">
                <h3 class="font-medium text-[#20718D] text-lg">
                  seamless Communication
                </h3>
                <p class="text-sm leading-loose text-justify">
                  Medinize offers secure messaging between patients and doctors, facilitating
                  efficient communication for
                  enquiries, follow-ups and clarifications. Doctors can share test results, medical reports or treatment
                  plans with patients. This enhances doctor-patient relationship improving health outcomes.
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-col">
              <img src="@/assets/img/payment.svg" alt="" class="h-32 w-32">
              <div class="space-y-2">
                <h3 class="font-medium text-[#20718D] text-lg">
                  Secure Payment Processing
                </h3>
                <p class="text-sm leading-loose text-justify">
                  With our secure payment process, patents can confidently make payments for
                  various clinical services,
                  such as clinical appointments or specialized treatments. Our system supports multiple payment methods,
                  giving users flexibility and convenience in choosing how to complete their transactions.
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-col">
              <img src="@/assets/img/accessibility.svg" alt="" class="h-32 w-32">
              <div class="space-y-2">
                <h3 class="font-medium text-[#20718D] text-lg">
                  Enhanced Accessibility
                </h3>
                <p class="text-sm leading-loose text-justify">
                  Medinize’s 24/7 availability ensures tht patients can connect with their
                  doctors at anytime, regardless
                  of their location. This allows patients to seek medical advice or address concerns promptly. It enables
                  doctors to access patients records quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-16 space-y-9 w-10/12 mx-auto">
      <h1 class="lg:text-4xl text-2xl text-center text-[#13B859] font-bold">
        Our Outstanding Services
      </h1>
      <section class="space-y-20">
        <div class="lg:flex justify-between lg:space-x-20 space-y-5 lg:space-y-0">
          <div class="lg:w-6/12 flex justify-end">
            <img src="@/assets/img/clinicalAppointments.jpg" alt="">
          </div>
          <div class="lg:w-6/12 space-y-3">
            <h3 class="font-semibold text-[#13B859] text-xl">
              Clinical Appointment
            </h3>
            <p class="text-[#1E1E1E] font-[500] leading-loose text-sm text-justify">
              Our convenient and user-friendly platform simplifies the process of booking and
              managing clinical
              appointments. Patients can easily schedule appointments with medical professionals based on their
              availability, specialization and location, eliminating the need for lengthy phone calls and waiting times.
              Once an appointment is scheduled, patients receive automated reminders and notifications to ensure they
              don’t
              miss their appointments.<br>
              It provides doctors with a centralized system to manage their appointments, educing administrative burden
              and
              enabling them to focus on delivering quality care. Doctors can easily view and manage their appointment
              calendar, access patient, and efficiently organize their practice. Take control of your healthcare journey
              today and experience the ease and convenience of Medinize’s clinical appointment feature. Book your next
              appointment with just a click of a button and unlock a new level of healthcare accessibility and efficiency.
            </p>
            <button class="border-[#13B859] text-[#13B859] text-sm border-2 rounded-full px-6 py-2">
              Book
              now
            </button>
          </div>
        </div>

        <div class="lg:flex justify-between space-x-20 hidden">
          <div class="lg:w-6/12 space-y-3">
            <h3 class="font-semibold text-[#13B859] text-xl">
              E-Records
            </h3>
            <p class="text-[#1E1E1E] font-[500] leading-loose text-sm text-justify">
              Our convenient and user-friendly platform simplifies the process of booking and
              managing clinical
              appointments. Patients can easily schedule appointments with medical professionals based on their
              availability, specialization and location, eliminating the need for lengthy phone calls and waiting times.
              Once an appointment is scheduled, patients receive automated reminders and notifications to ensure they
              don’t
              miss their appointments.<br>
              It provides doctors with a centralized system to manage their appointments, educing administrative burden
              and
              enabling them to focus on delivering quality care. Doctors can easily view and manage their appointment
              calendar, access patient, and efficiently organize their practice. Take control of your healthcare journey
              today and experience the ease and convenience of Medinize’s clinical appointment feature. Book your next
              appointment with just a click of a button and unlock a new level of healthcare accessibility and efficiency.
            </p>
            <button class="border-[#13B859] text-[#13B859] text-sm border-2 rounded-full px-6 py-2">
              Access Records
            </button>
          </div>
          <div class="lg:w-6/12 flex justify-end">
            <img src="@/assets/img/e-records.jpg" alt="">
          </div>
        </div>

        <div class="lg:hidden space-y-6">
          <div class="lg:w-6/12 flex justify-end">
            <img src="@/assets/img/e-records.jpg" alt="">
          </div>
          <div class="lg:w-6/12 space-y-6">
            <h3 class="font-medium text-[#13B859] text-lg">
              E-Records
            </h3>
            <p class="text-[#1E1E1E] font-[500] leading-loose text-sm text-justify">
              Our convenient and user-friendly platform simplifies the process of booking and
              managing clinical
              appointments. Patients can easily schedule appointments with medical professionals based on their
              availability, specialization and location, eliminating the need for lengthy phone calls and waiting times.
              Once an appointment is scheduled, patients receive automated reminders and notifications to ensure they
              don’t
              miss their appointments.<br>
              It provides doctors with a centralized system to manage their appointments, educing administrative burden
              and
              enabling them to focus on delivering quality care. Doctors can easily view and manage their appointment
              calendar, access patient, and efficiently organize their practice. Take control of your healthcare journey
              today and experience the ease and convenience of Medinize’s clinical appointment feature. Book your next
              appointment with just a click of a button and unlock a new level of healthcare accessibility and efficiency.
            </p>
            <button class="border-[#13B859] text-[#13B859] text-sm border-2 rounded-full px-6 py-2">
              Access Records
            </button>
          </div>
        </div>

        <div class="lg:flex justify-between lg:space-x-20 space-y-6 lg:space-y-0">
          <div class="lg:w-6/12 flex">
            <img src="@/assets/img/supportiveCommunity.jpg" alt="" class="object-cover">
          </div>
          <div class="lg:w-6/12 space-y-4">
            <h3 class="font-medium text-[#13B859] text-xl">
              Supportive Health Community
            </h3>
            <p class="text-[#1E1E1E] font-[500] leading-loose text-sm text-justify">
              Medinize fosters a community-driven approach by providing platform for users to
              connect with each other, share knowledge and collaborate with each other. Within the community, patients
              have
              the opportunity to connect wth others who may be experiencing similar health conditions or challenges. They
              can seek advice, find support from a network of like-minded individuals, build meaningful connections and
              draw
              strength from each other’s journey. The community facilitates knowledge exchange, enabling users to access
              educational resources, health tips and relevant articles shared by medical professionals and other patients.
              Join now a be a part of a vibrant community, together we can make a difference in shaping a healthier future
              for all.
            </p>
            <button class="border-[#13B859] text-[#13B859] text-sm border-2 rounded-full px-6 py-2">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </section>

    <section class="bg-[#20718D] mt-16">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 class="text-center text-xl text-[#EAEAEA] font-bold tracking-tight sm:text-3xl">
          What Our Clients Say
        </h2>

        <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote class="rounded bg-[#FFFFFF] p-8 shadow-lg">
            <div class="flex items-center justify-center flex-col gap-4">
              <img src="@/assets/img/quotes.svg" alt="">
              <p class="text-center text-[#000000]">
                Using Medinize is one of the best decision I took, it has really helped in my recovery process, connecting
                me to a very supportive community
              </p>
              <div>
                <div class="flex justify-center gap-0.5 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <img alt="Man" src="@/assets/img/avatar1.jpg" class="h-16 w-16 rounded-full object-cover">
              <p class="mt-1 text-lg font-medium text-[#20718D]">
                Angela Kenny
              </p>
            </div>
          </blockquote>

          <blockquote class="rounded bg-[#FFFFFF] p-8 shadow-lg">
            <div class="flex items-center justify-center flex-col gap-4">
              <img src="@/assets/img/quotes.svg" alt="">
              <p class="text-center text-[#000000]">
                It has saved me so much time and hassle, I enjoy the convenience of booking clinical appointments from the
                comfort of my home.
              </p>
              <div>
                <div class="flex justify-center gap-0.5 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <img alt="Man" src="@/assets/img/avatar2.jpg" class="h-16 w-16 rounded-full object-cover">
              <p class="mt-1 text-lg font-medium text-[#20718D]">
                Julie Aaron
              </p>
            </div>
          </blockquote>

          <blockquote class="rounded bg-[#FFFFFF] p-8 shadow-lg">
            <div class="flex items-center justify-center flex-col gap-4">
              <img src="@/assets/img/quotes.svg" alt="">
              <p class="text-center text-[#000000]">
                Medinize has improved the way I interact with my patients, providing comprehensive E-health records at my
                fingertips, this has enhanced my productivity
              </p>
              <div>
                <div class="flex justify-center gap-0.5 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="#FFCC00">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <img alt="Man" src="@/assets/img/avatar3.jpg" class="h-16 w-16 rounded-full object-cover">
              <p class="mt-1 text-lg font-medium text-[#20718D]">
                Benedict West
              </p>
            </div>
          </blockquote>
        </div>
      </div>
    </section>

    <section class="lg:flex justify-center items-center space-x-10 py-20 relative hidden">
      <div class="flex space-x-10">
        <div> <img src="@/assets/img/stay.svg" class="w-[100px] h-[200px]" alt=""></div>
        <div class="flex items-center space-x-3">
          <div>
            <img src="@/assets/img/h.svg" />
          </div>
          <div class="space-y-4">
            <div><img src="@/assets/img/appy.svg" /></div>
            <div><img src="@/assets/img/ealthy.svg" /></div>
          </div>
        </div>
      </div>
      <div class="">
        <img src="@/assets/img/family.jpg" alt="" class="h-[500px] w-[500px] object-cover">
      </div>
      <div class="flex items-center space-x-5">
        <div> <img src="@/assets/img/with.svg" class="w-[100px] h-[200px]" alt=""></div>
        <div><img src="@/assets/img/medinize.svg" class="w-[200px] h-[200px]" alt=""></div>
      </div>
      <img src="@/assets/img/half.png" alt="" class="absolute right-0 bottom-0 hidden h-60 lg:block">
    </section>

    <section class="w-11/12 mx-auto py-20 relative lg:hidden">
      <div>
        <h1 class="text-center text-xl font-bold text-green-900">Stay Happy and Healthy with MEDINIZE</h1>
      </div>
      <img src="@/assets/img/family.jpg" alt="" class="object-cover mt-10">
    </section>

    <section class="flex justify-center items-center flex-col py-20 bg-[#D0F1DE] space-y-6">
      <h1 class="font-medium text-[#13B859] text-center text-2xl lg:text-3xl w-11/12 mx-auto lg:w-auto">
        Subscribe To Our Newsletter
      </h1>
      <p class="text-[#000000] text-xs lg:text-sm text-center lg:w-6/12 mx-auto w-11/12">
        Be the first to receive exclusive updates, health tips
        and exciting news from Medinize.
        Join our growing community of subscribers today.
      </p>
      <div class="flex w-11/12 lg:w-4/12 mx-auto">
        <div class="w-full">
          <input type="email" class="lg:py-2.5 py-3 border-[#13B859] text-xs border-2 w-full outline-none pl-3"
            placeholder="Enter your email address">
        </div><button class="text-[#FFFFFF] bg-[#13B859] pt-2 px-4 flex justify-center items-center text-xs">
          SUBSCRIBE
          NOW
        </button>
      </div>
    </section>

    <section>
      <footer class="bg-[#1E1E1E] pb-20">
        <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <p class="mt-6 max-w-md eading-relaxed text-[#FFFFFF] sm:max-w-xs sm:text-left w-">
                Choose health <br>
                choose happiness
              </p>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div class="sm:text-left">
                <p class="text-lg font-medium text-[#FFFFFF]">
                  Company
                </p>

                <ul class="mt-4 space-y-4 text-sm">
                  <li>
                    <a class="text-[#FFFFFF] text-xs" href="/">
                      Home
                    </a>
                  </li>

                  <li>
                    <a class="text-[#FFFFFF] text-xs" href="/">
                      About us
                    </a>
                  </li>

                  <li>
                    <a class="text-[#FFFFFF] text-xs" href="/">
                      Review
                    </a>
                  </li>

                  <li>
                    <a class="text-[#FFFFFF] text-xs" href="/">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              <div class="sm:text-left">
                <p class="text-lg font-medium text-[#FFFFFF]">
                  Terms & Conditions
                </p>

                <ul class="mt-4 space-y-4 text-sm">
                  <li>
                    <a class="text-[#FFFFFF] text-xs" href="/">
                      Cookie Policy
                    </a>
                  </li>

                  <li>
                    <a class="text-[#FFFFFF] text-xs" href="/">
                      Privacy Poicy
                    </a>
                  </li>

                  <li>
                    <a class="text-[#FFFFFF] text-xs" href="/">
                      FAQ’s
                    </a>
                  </li>
                </ul>
              </div>

              <div class="sm:text-left">
                <p class="text-lg font-medium text-[#FFFFFF]">
                  Contact Us
                </p>

                <ul class="mt-4 space-y-4 text-xs">
                  <li>
                    <a class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="/">
                      <span class="flex-1 text-[#FFFFFF] text-xs">+2349178452431</span>
                    </a>
                  </li>
                  <li>
                    <a class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="/">
                      <span class="flex-1 text-[#FFFFFF] text-xs">medinize@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: false
    }
  },
  methods: {
    getStarted() {
      this.$router.push('/login')
    }
  }
}
</script>
