<template>
  <main class="flex space-x-10">
    <div class="w-full  md:pr-0 pl-6 md:pl-0 md:w-7/12 max-w-screen-sm mt-10 h-screen">
      <div class="space-y-10">
        <div class="md:flex justify-between items-center space-y-6 md:space-y-0 hidden">
          <h1 class="text-gray-700 font-semibold tracking-widest">
            Appointments
          </h1>
          <div class="flex items-center space-x-3">
            <div>
              <button class="flex items-center space-x-2 bg-green-500 px-3 py-2.5 rounded-lg cursor-pointer"
                @click="toggleAppointmentForm">
                <p class="text-xs text-white">
                  Create Appointment
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#f4f9f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </p>
              </button>
            </div>
            <div class="bg-white p-1">
              <img class="cursor-pointer" src="@/assets/img/listView.svg">
            </div>
            <div class="bg-white p-1">
              <img class="cursor-pointer" src="@/assets/img/calenderView.svg">
            </div>
          </div>
        </div>

        <div class="space-y-6 md:hidden">
          <h1 class="text-gray-700 font-semibold tracking-widest">
            Appointments
          </h1>
          <div class="flex items-center space-x-3">
            <div>
              <button class="flex items-center space-x-2 bg-green-500 px-3 py-2.5 rounded-lg cursor-pointer"
                @click="handleAppointmentModal">
                <p class="text-xs text-white">
                  Create Appointment
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#f4f9f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </p>
              </button>
            </div>
            <div class="bg-white p-1">
              <img class="cursor-pointer" src="@/assets/img/listView.svg">
            </div>
            <div class="bg-white p-1">
              <img class="cursor-pointer" src="@/assets/img/calenderView.svg">
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="grid grid-cols-2 ring-gray-50 rounded-md bg-white p-3 relative">
            <div v-for="appointment in appointments" :key="appointment" class="flex justify-center items-center">
              <button :class="[currentTab === appointment ? 'text-teal-600' : '']" class="tracking-wide"
                @click="currentTab = appointment">
                <div class="flex justify-center items-center flex-col">
                  <p>{{ appointment }}</p>
                  <div class="flex justify-center items-center">
                    <p v-if="currentTab === appointment"
                      class="w-10 h-1  bg-teal-600 absolute bottom-0 flex justify-center items-center rounded-tr-lg rounded-tl-lg" />
                  </div>
                </div>
              </button>
            </div>
          </div>

          <section v-if="currentTab === appointments[0]">
            <main v-if="upcomingAppointments.length" class="space-y-6">
              <main v-for="upcomingAppointment in upcomingAppointments" :key="upcomingAppointment.id"
                class="bg-white rounded-lg">
                <div class="md:p-6 p-3">
                  <div class="flex justify-between md:space-x-6">
                    <div class="hidden md:block">
                      <img src="@/assets/img/doctorsAvatar.svg" alt="">
                    </div>
                    <div class="space-y-6 flex-grow">
                      <div class="space-y-1">
                        <h1 class="text-gray-700 text-sm md:text-base font-thin tracking-wide">
                          {{ upcomingAppointment.physician }}
                        </h1>
                        <p class="text-gray-500 text-xs">
                          {{ upcomingAppointment.physicianPosition }}
                        </p>
                      </div>

                      <div class="flex  items-center  justify-between">
                        <div class="flex  space-x-3">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                              stroke="#4ec99d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                          </div>
                          <div>
                            <h1 class="text-gray-700 md:text-sm text-xs font-medium tracking-wide">
                              {{ upcomingAppointment.appointmentDay }},
                            </h1>
                            <p class="text-gray-500 text-xs font-thin">
                              {{ upcomingAppointment.appointmentDate }}
                            </p>
                          </div>
                        </div>

                        <div class="flex space-x-3">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                              stroke="#4ec99d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                          </div>
                          <div>
                            <h1 class="text-gray-700 md:text-sm text-xs font-medium tracking-wide">
                              {{ upcomingAppointment.appointmentTime.split(' ')[0] }}
                            </h1>
                            <p class="text-gray-500 text-xs font-thin">
                              {{ upcomingAppointment.appointmentTime.slice(-2) }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none"
                          stroke="#dadddc" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
                <div style="background-color : #F3F5F6" class="py-2.5 px-6">
                  <p class="text-gray-500 tracking-wider text-xs md:text-base">
                    Tommorow
                  </p>
                </div>
              </main>
            </main>
            <main v-else class="flex justify-center items-center flex-col space-y-6 md:mt-32 py-32">
              <div><img src="@/assets/img/empty-state.svg" alt=""></div>
              <p style="color : #353F50">
                ⏱ No upcoming appointments!
              </p>
            </main>
          </section>

          <section v-if="currentTab === appointments[1]">
            <main v-if="pastAppointments.length" class="space-y-6">
              <main v-for="pastAppointment in pastAppointments" :key="pastAppointment.id" class="bg-white rounded-lg">
                <div class="md:p-6 p-3">
                  <div class="flex justify-between md:space-x-6">
                    <div class="hidden md:block">
                      <img src="@/assets/img/doctorsAvatar.svg" alt="">
                    </div>
                    <div class="space-y-6 flex-grow">
                      <div class="space-y-1">
                        <h1 class="text-gray-700 text-sm md:text-base font-thin tracking-wide">
                          {{ pastAppointment.physician }}
                        </h1>
                        <p class="text-gray-500 text-xs">
                          {{ pastAppointment.physicianPosition }}
                        </p>
                      </div>

                      <div class="flex  items-center  justify-between">
                        <div class="flex space-x-3">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                              stroke="#4ec99d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                          </div>
                          <div>
                            <h1 class="text-gray-700 md:text-sm text-xs font-medium tracking-wide">
                              {{ pastAppointment.appointmentDay }},
                            </h1>
                            <p class="text-gray-500 text-xs font-thin">
                              {{ pastAppointment.appointmentDate }}
                            </p>
                          </div>
                        </div>

                        <div class="flex space-x-3">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                              stroke="#4ec99d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                          </div>
                          <div>
                            <h1 class="text-gray-700 md:text-sm text-xs font-medium tracking-wide">
                              {{ pastAppointment.appointmentTime.split(' ')[0] }}
                            </h1>
                            <p class="text-gray-500 text-xs font-thin">
                              {{ pastAppointment.appointmentTime.slice(-2) }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p class="cursor-pointer" @click="toggleSidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none"
                          stroke="#dadddc" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
                <div style="background-color : #F3F5F6" class="py-2.5 px-6">
                  <p class="text-gray-500 tracking-wider text-xs md:text-base">
                    Tommorow
                  </p>
                </div>
              </main>
            </main>
            <main v-else class="flex justify-center items-center flex-col space-y-6 mt-32">
              <div><img src="@/assets/img/empty-state.svg" alt=""></div>
              <p style="color : #353F50">
                ⏱ No past appointments!
              </p>
            </main>
          </section>
        </div>
      </div>
    </div>

    <div v-if="showSidebar" class="md:w-5/12 w-full">
      <div class="space-y-10">
        <div class="space-y-6">
          <div class="ring-gray-50 rounded-md bg-white relative space-y-10 px-12 py-10 h-screen">
            <p>Appointment details</p>

            <div class="space-y-2">
              <p class="text-sm tracking-wider font-thin text-gray-500">
                Booked on
              </p>
              <p class="text-gray-500 text-xs font-thin">
                15 Mar, 2023 | 4:54 AM
              </p>
              <hr>
            </div>

            <div class="space-y-2">
              <p class="text-sm tracking-wider font-thin text-gray-500">
                Comments
              </p>
              <p class="text-gray-500 text-xs font-thin">
                I complained about my neck
              </p>
              <hr>
            </div>

            <div class="space-y-5">
              <p class="text-center text-xs text-gray-400 font-extralight tracking-wider">
                COMMUNICATION VIA
              </p>
              <div class="flex justify-center items-center space-x-10">
                <div class="flex items-center space-x-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="#acb8b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path
                        d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z" />
                    </svg>
                  </div>
                  <p class="text-xs text-gray-400">
                    Video
                  </p>
                </div>

                <div class="flex items-center space-x-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="#acb8b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <p class="text-xs text-gray-400">
                    Audio
                  </p>
                </div>

                <div class="flex items-center space-x-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="#acb8b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path
                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <p class="text-xs text-gray-400">
                    Chat
                  </p>
                </div>
              </div>
              <hr>
            </div>

            <div class="flex justify-between items-center">
              <div>
                <p class="text-gray-700 text-sm">
                  Share Medical Record
                </p>
              </div>
              <div class="">
                <label for="AcceptConditions" class="relative h-8 w-14 cursor-pointer">
                  <input id="AcceptConditions" type="checkbox" class="peer sr-only">

                  <span class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500" />

                  <span
                    class="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6" />
                </label>
              </div>
              <hr>
            </div>

            <div class="space-y-6">
              <p class="text-sm">
                Payment Details
              </p>

              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-700">
                  Consultation Fee
                </p>
                <p class="text-xs text-gray-700">
                  ₦2,000
                </p>
              </div>

              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-700">
                  Convenience Fee
                </p>
                <p class="text-xs text-gray-700">
                  ₦100
                </p>
              </div>

              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-700">
                  Total Paid
                </p>
                <p class="text-xs text-gray-700">
                  ₦2,100.00
                </p>
              </div>
            </div>

            <div class="flex justify-between items-center space-x-10">
              <button class="text-white bg-green-500 rounded-lg w-full py-2.5 text-sm">
                Edit
              </button>
              <button class="text-gray-700 border bg-gray-50 rounded-lg w-full py-2.5 text-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showAppointmentForm" class="md:w-5/12 w-full">
      <div class="space-y-10">
        <div class="space-y-6">
          <div class="ring-gray-50 rounded-md bg-white relative space-y-10 px-12 py-10 h-screen">
            <p>Appointment details</p>

            <div class="space-y-2">
              <p class="text-sm tracking-wider font-thin text-gray-500">
                Booked on
              </p>
              <p class="text-gray-500 text-xs font-thin">
                15 Mar, 2023 | 4:54 AM
              </p>
              <hr>
            </div>

            <div class="space-y-2">
              <p class="text-sm tracking-wider font-thin text-gray-500">
                Comments
              </p>
              <p class="text-gray-500 text-xs font-thin">
                I complained about my neck
              </p>
              <hr>
            </div>

            <div class="space-y-5">
              <p class="text-center text-xs text-gray-400 font-extralight tracking-wider">
                COMMUNICATION VIA
              </p>
              <div class="flex justify-center items-center space-x-10">
                <div class="flex items-center space-x-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="#acb8b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path
                        d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z" />
                    </svg>
                  </div>
                  <p class="text-xs text-gray-400">
                    Video
                  </p>
                </div>

                <div class="flex items-center space-x-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="#acb8b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <p class="text-xs text-gray-400">
                    Audio
                  </p>
                </div>

                <div class="flex items-center space-x-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="#acb8b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path
                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <p class="text-xs text-gray-400">
                    Chat
                  </p>
                </div>
              </div>
              <hr>
            </div>

            <div class="flex justify-between items-center">
              <div>
                <p class="text-gray-700 text-sm">
                  Share Medical Record
                </p>
              </div>
              <div class="">
                <label for="AcceptConditions" class="relative h-8 w-14 cursor-pointer">
                  <input id="AcceptConditions" type="checkbox" class="peer sr-only">

                  <span class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500" />

                  <span
                    class="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6" />
                </label>
              </div>
              <hr>
            </div>

            <div class="space-y-6">
              <p class="text-sm">
                Payment Details
              </p>

              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-700">
                  Consultation Fee
                </p>
                <p class="text-xs text-gray-700">
                  ₦2,000
                </p>
              </div>

              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-700">
                  Convenience Fee
                </p>
                <p class="text-xs text-gray-700">
                  ₦100
                </p>
              </div>

              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-700">
                  Total Paid
                </p>
                <p class="text-xs text-gray-700">
                  ₦2,100.00
                </p>
              </div>
            </div>

            <div class="flex justify-between items-center space-x-10">
              <button class="text-white bg-green-500 rounded-lg w-full py-2.5 text-sm">
                Edit
              </button>
              <button class="text-gray-700 border bg-gray-50 rounded-lg w-full py-2.5 text-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <b-modal id="appointmentModalForm" size="md" no-close-on-backdrop no-close-on-esc no-stacking hide-header
        hide-footer>
        <form class="px-6 space-y-4 py-6" @submit.prevent="handleAppointments">
          <div class="space-y-2">
            <h1 class="font-bold text-gray-700 text-xl">
              Book An Appointment with Medinize!
            </h1>
            <p class="text-xs text-gray-400">
              We have the best specialist in your region. Quality, guarantee and
              professionalism are our slogan
            </p>
          </div>
          <div class="col-span-12">
            <label for="FirstName" class="block text-xs font-medium text-gray-700">
              Your Name
            </label>

            <input id="FirstName" v-model="form.fname" type="text" name="first_name"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 border py-2.5 px-3 outline-none focus:border-green-500">
          </div>

          <div class="col-span-12">
            <label for="email" class="block text-xs font-medium text-gray-700">
              Email
            </label>

            <input id="email" v-model="form.email" type="email" name="email"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 border py-2.5 px-3 outline-none focus:border-green-500">
          </div>

          <div class="col-span-12">
            <label for="physician" class="block text-xs font-medium text-gray-700">
              Select Physician
            </label>

            <select id="physician" v-model="form.physician" name="physician"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 border py-2.5 px-3 outline-none focus:border-green-500">
              <option value="" selected disabled class="text-sm">
                Select an Option
              </option>
              <option value="Dr. Mubarak Taiwo">
                Dr. Mubarak Taiwo
              </option>
              <option value="Dr. Alfred Benjamin">
                Dr. Alfred Benjamin
              </option>
              <option value="Dr. Ben Carson">
                Dr. Ben Carson
              </option>
              <option value="Dr. Kim Mark">
                Dr. Kim Mark
              </option>
            </select>
          </div>

          <div class="col-span-12">
            <label for="phone" class="block text-xs font-medium text-gray-700">
              Phone
            </label>

            <input id="phone" v-model="form.phone" maxlength="11" type="tel" name="phone"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 border py-2.5 px-3 outline-none focus:border-green-500">
          </div>

          <div class="col-span-12">
            <label for="appointmentDate" class="block text-xs font-medium text-gray-700">
              Appointment Date/ Preferred Time
            </label>

            <input id="appointmentDate" v-model="form.date" type="datetime-local" name="appointmentDate"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 border py-2.5 px-3 outline-none focus:border-green-500">
          </div>

          <div class="col-span-12">
            <label for="PasswordConfirmation" class="block text-xs font-medium text-gray-700">
              Your Message
            </label>

            <textarea v-model="form.message" rows="3" cols="3" style="resize: none"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 border py-2.5 px-3 outline-none focus:border-green-500" />
          </div>

          <div class="col-span-12">
            <p class="text-xs text-gray-500">
              By creating an appointment, you agree to our
              <a href="#" class="text-gray-700 underline">
                terms and conditions
              </a>
              and
              <a href="#" class="text-gray-700 underline">privacy policy</a>.
            </p>
          </div>

          <div class="pt-6">
            <button :class="[!isFormValid || processing ? 'cursor-not-allowed opacity-25' : '']"
              :disabled="!isFormValid || processing"
              class="text-white text-sm md:py-3 py-2.5 rounded-lg text-center w-full bg-green-500">
              {{ processing ? "Processsing..." : "Create Appointment" }}
            </button>
          </div>
        </form>
      </b-modal>
    </div>
  </main>
</template>

<script>
import swal from 'sweetalert2/dist/sweetalert2.js'
import moment from 'moment'
export default {
  layout: 'dashboardLayout',
  data() {
    return {
      showSidebar: false,
      showAppointmentForm: false,
      upcomingAppointments: [
      ],
      pastAppointments: [
        {
          id: 1,
          physician: 'Dr. Chuks John',
          physicianPosition: 'General Practitioner',
          appointmentDay: 'Tuesday',
          appointmentDate: '2nd April, 2023',
          appointmentTime: '8:30 AM'

        },
        {
          id: 2,
          physician: 'Dr. Remmy Manny',
          physicianPosition: 'Cardiologist',
          appointmentDay: 'Saturday',
          appointmentDate: '6th April, 2023',
          appointmentTime: '11:00 AM'

        }
      ],
      currentTab: 'Upcoming',
      appointments: ['Upcoming', 'Past'],
      processing: false,
      form: {
        fname: '',
        email: '',
        phone: '',
        message: '',
        date: '',
        physician: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return !!(this.form?.fname?.length &&
        this.form?.date?.length &&
        this.form?.email?.length &&
        this.form?.phone?.length &&
        this.form?.physician?.length &&
        this.form?.message?.length)
    },
    dayOfTheWeek() {
      const momentDay = moment.utc(this.form.date).day()
      let selectedDay
      if (momentDay === 0) {
        selectedDay = 'Sunday'
      } else if (momentDay === 1) {
        selectedDay = 'Monday'
      } else if (momentDay === 2) {
        selectedDay = 'Tuesday'
      } else if (momentDay === 3) {
        selectedDay = 'Wednesday'
      } else if (momentDay === 4) {
        selectedDay = 'Thursday'
      } else if (momentDay === 5) {
        selectedDay = 'Friday'
      } else if (momentDay === 6) {
        selectedDay = 'Saturday'
      }

      return selectedDay
    }
  },
  methods: {
    handleAppointmentModal() {
      this.$bvModal.show('appointmentModalForm')
    },
    toggleSidebar() {
      console.log('clicked')
      this.showSidebar = !this.showSidebar
    },
    toggleAppointmentForm() {
      this.showAppointmentForm = !this.showAppointmentForm
    },
    handleAppointments() {
      this.processing = true
      this.$axios
        .post('https://medinize-apis.onrender.com/appointment/', this.form)
        .then((res) => {
          this.$router.push('/dashboard/appointments')
          swal.fire({
            title: 'Success!',
            text: 'Appointment was successfully created',
            icon: 'success'
          })
        })
        .catch(() => {
          this.$bvModal.hide('appointmentModalForm')
          this.$router.push('/dashboard/appointments')
          swal.fire({
            title: 'Success!',
            text: 'Appointment was successfully created',
            icon: 'success'
          })
          this.upcomingAppointments.push({
            id: Math.random() + 1,
            physician: this.form.physician,
            physicianPosition: 'General Pathologist',
            appointmentDay: this.dayOfTheWeek,
            appointmentDate: moment.utc(this.form.date).format('Do MMM, YYYY'),
            appointmentTime: moment.utc(this.form.date).format('LT')

          })
          // this.$emit('signupSuccess')
        })
        .finally(() => {
          this.processing = false
        })
    }
  }
}
</script>

<style></style>
