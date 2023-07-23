<template>
  <section>
    <main class="md:flex md:space-x-3 pb-6">
      <div class="md:w-7/12 w-full px-3 md:px-0 max-w-screen-sm">
        <div class="space-y-6">
          <div class="mt-10">
            <h1 class="text-gray-700 font-semibold tracking-widest">
              Home
            </h1>
          </div>
          <div class="grid grid-cols-2 ring-gray-50 rounded-md bg-white p-3 relative">
            <div v-for="homeTab in homeTabs" :key="homeTab" class="flex justify-center items-center">
              <button :class="[activeHomeTab === homeTab ? 'text-teal-600' : 'text-gray-400']" class="tracking-wider"
                @click="activeHomeTab = homeTab">
                <div class="flex justify-center items-center flex-col">
                  <p class="text-xs md:text-base">
                    {{ homeTab }}
                  </p>
                  <div class="flex justify-center items-center">
                    <p v-if="activeHomeTab === homeTab"
                      class="w-10 h-1  bg-teal-600 absolute bottom-0 flex justify-center items-center rounded-tr-lg rounded-tl-lg" />
                  </div>
                </div>
              </button>
            </div>
            <p class="py-1 px-2 bg-green-500 text-white text-xs rounded-lg absolute top-2 md:right-20 right-10">
              <small>25</small>
            </p>
          </div>
        </div>
        <!--
        <main v-if="activeHomeTab === 'Messages'" class="space-y-6">
          <div class="mt-6">
            <h1 class="text-gray-700 font-semibold tracking-widest">
              Notifications
            </h1>
          </div>

          <main v-if="notifications.length" class="">
            <main v-for="notification in notifications" :key="notification.id" class="bg-white border-b">
              <div class=" p-6">
                <div class="flex justify-between space-x-6">
                  <div class="space-y-6 flex-grow">
                    <div class="space-y-1">
                      <h1 class="text-gray-700 font-thin text-sm">
                        {{ notification.title }}
                      </h1>
                      <p class="text-gray-500 text-xs">
                        {{ notification.description }}
                      </p>
                    </div>

                  </div>
                  <div class="flex space-x-1 items-center">
                    <p class="text-gray-500 text-xs font-thin">
                      {{ notification.notificationTime }}
                    </p>
                    <p class="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                        stroke="#c7cecb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </main>

          <main v-if="!notifications.length" class="flex justify-center items-center flex-col space-y-6 bg-white py-20">
            <p style="color : #353F50" class="tracking-wider">
              ⏱ No unread notifications
            </p>
          </main>
        </main> -->

        <div v-if="activeHomeTab === 'Overview'">
          <div class="space-y-6">
            <div class="mt-16">
              <h1 class="text-gray-700 font-semibold tracking-widest">
                Appointments
              </h1>
            </div>

            <div class="">
              <div class="grid grid-cols-2 ring-gray-50 rounded-md bg-white relative">
                <div v-for="appointment in appointments" :key="appointment"
                  :class="[currentTab != appointment ? 'bg-gray-50' : '']"
                  class="flex justify-center items-center h-full p-3">
                  <button :class="[currentTab === appointment ? 'text-gray-600' : 'text-gray-400']"
                    class="tracking-wide font-thin" @click="currentTab = appointment">
                    <div class="flex justify-center items-center flex-col">
                      <p class="uppercase text-xs md:text-base">
                        {{ appointment }}
                      </p>
                      <div class="flex justify-center items-center">
                        <p v-if="currentTab === appointment"
                          class="w-6/12 h-0.5 first-letter:  bg-gray-600 absolute bottom-0 flex justify-center items-center" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <section v-if="currentTab === appointments[0]">
                <main v-if="upcomingAppointments.length" class="">
                  <main v-for="upcomingAppointment in upcomingAppointments" :key="upcomingAppointment.id"
                    class="bg-white border-b">
                    <div class="md:p-6 p-3">
                      <div class="flex justify-between md:space-x-6 space-x-3">
                        <div class="">
                          <img src="@/assets/img/doctorsAvatar.svg" class="h-6 w-6 md:h-full md:w-full" alt="">
                        </div>
                        <div class="space-y-6 flex-grow">
                          <div class="space-y-1">
                            <h1 class="text-gray-700 text-xs md:text-base font-thin tracking-wide">
                              {{ upcomingAppointment.physician }}
                            </h1>
                            <p class="text-gray-500 text-xs">
                              {{ upcomingAppointment.physicianPosition }}
                            </p>
                          </div>
                        </div>
                        <div class="flex space-x-2">
                          <div> <img src="@/assets/img/reminder.svg"></div>
                          <p class="text-gray-500 text-xs md:text-sm font-thin">
                            {{ upcomingAppointment.appointmentDate }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </main>
                  <div style="background-color : #FFFF" class="py-3 px-6 flex justify-between items-center">
                    <p class="text-xs md:text-sm text-teal-700 tracking-wider">
                      See all Appointments
                    </p>
                    <p class="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                        stroke="#c7cecb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </p>
                  </div>
                </main>
                <main v-else class="flex justify-center items-center flex-col space-y-6 bg-white py-20">
                  <!-- <div><img src="@/assets/img/empty-state.svg" alt="" /></div> -->
                  <p style="color : #353F50" class="tracking-wider">
                    ⏱ No upcoming appointments.
                  </p>
                </main>
              </section>

              <section v-if="currentTab === appointments[1]">
                <main v-if="pastAppointments.length" class="">
                  <main v-for="pastAppointment in pastAppointments" :key="pastAppointment.id" class="bg-white border-b">
                    <div class="md:p-6 p-3">
                      <div class="flex justify-between md:space-x-6 space-x-3">
                        <div>
                          <img src="@/assets/img/doctorsAvatar.svg" class="h-6 w-6 md:h-full md:w-full" alt="">
                        </div>
                        <div class="space-y-6 flex-grow">
                          <div class="space-y-1">
                            <h1 class="text-gray-700 text-xs md:text-base font-thin tracking-wide">
                              {{ pastAppointment.physician }}
                            </h1>
                            <p class="text-gray-500 text-xs">
                              {{ pastAppointment.physicianPosition }}
                            </p>
                          </div>
                        </div>
                        <div class="flex space-x-2">
                          <div> <img src="@/assets/img/reminder.svg"></div>
                          <p class="text-gray-500 text-xs md:text-sm font-thin">
                            {{ pastAppointment.appointmentDate }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </main>
                  <div style="background-color : #FFFF" class="py-3 px-6 flex justify-between items-center">
                    <p class="text-sm text-teal-700 tracking-wider">
                      See all Appointments
                    </p>
                    <p class="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                        stroke="#c7cecb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </p>
                  </div>
                </main>
                <main v-else class="flex justify-center items-center flex-col space-y-6 bg-white py-20">
                  <!-- <div><img src="@/assets/img/empty-state.svg" alt="" /></div> -->
                  <p style="color : #353F50" class="tracking-wider">
                    ⏱ No past appointments.
                  </p>
                </main>
              </section>
            </div>
          </div>

          <div class="space-y-6">
            <div class="mt-16">
              <h1 class="text-gray-700 font-semibold tracking-widest">
                Medical Timeline
              </h1>
            </div>

            <main class="flex justify-center items-center flex-col space-y-6 bg-white py-20">
              <!-- <div><img src="@/assets/img/empty-state.svg" alt="" /></div> -->
              <p style="color : #353F50" class="tracking-wider">
                📂 No medical records.
              </p>
              <p class="text-center text-green-600 text-sm">
                Update your medical record
              </p>
            </main>
          </div>
        </div>
      </div>

      <div v-if="activeHomeTab === 'Overview'" class="md:w-5/12 px-3 md:px-0 md:pr-10 w-full pt-10">
        <div class="space-y-6 mt-10">
          <div class="ring-gray-50 rounded-md bg-white relative space-y-10 px-12 py-6">
            <img src="@/assets/img/calender.svg" alt="">
          </div>

          <div class="ring-gray-50 rounded-md bg-white relative space-y-10 py-6">
            <div class="space-y-6">
              <p class="text-sm border-b pl-6 pb-6 text-teal-900">
                My Doctors
              </p>
              <div class="px-12 py-10">
                <p class="text-center text-gray-400 tracking-wide font-thin text-sm">
                  Save a doctor to see them here
                </p>
              </div>
            </div>
          </div>

          <div class="ring-gray-50 rounded-md bg-white relative space-y-10 py-6">
            <div class="space-y-6">
              <p class="text-sm border-b pl-6 pb-6 text-teal-900">
                Recent Orders
              </p>
              <div class="px-12 py-10">
                <p class="text-center text-gray-400 tracking-wide font-thin text-sm">
                  Your most recent order history
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <main v-if="activeHomeTab === 'Messages'" class="space-y-6 md:w-10/12 w-full px-3 h-screen">
      <div class="mt-6">
        <h1 class="text-gray-700 font-semibold tracking-widest">
          Notifications
        </h1>
      </div>

      <main v-if="notifications.length">
        <main v-for="notification in notifications" :key="notification.id" class="bg-white border-b">
          <div class=" p-6">
            <div class="flex justify-between space-x-6">
              <div class="space-y-6 flex-grow">
                <div class="space-y-1">
                  <h1 class="text-gray-700 font-thin text-sm">
                    {{ notification.title }}
                  </h1>
                  <p class="text-gray-500 text-xs">
                    {{ notification.description }}
                  </p>
                </div>
              </div>
              <div class="flex space-x-1 items-center">
                <p class="text-gray-500 text-xs font-thin">
                  {{ notification.notificationTime }}
                </p>
                <p class="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                    stroke="#c7cecb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </main>
      </main>

      <main v-if="!notifications.length"
        class="flex justify-center rounded-lg items-center flex-col space-y-6 bg-white py-20">
        <p style="color : #353F50" class="tracking-wider">
          ⏱ No unread notifications
        </p>
      </main>
    </main>
  </section>
</template>

<script>
export default {
  layout: 'dashboardLayout',
  data() {
    return {
      showSidebar: false,
      user: {},
      showAppointmentForm: false,
      upcomingAppointments: [
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
          physician: 'Dr. Ann Ogwa',
          physicianPosition: 'General Practitioner',
          appointmentDay: 'Tuesday',
          appointmentDate: '2nd April, 2023',
          appointmentTime: '8:30 AM'

        }
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
      notifications: [
        // {
        //   id: 1,
        //   title: 'INVESTIGATION REQUEST',
        //   description: 'Dr. Chuks John has recommended a Lab test for you at Me Cure Diagnostic Centre.',
        //   notificationTime: '2 Seconds ago'
        // },
        // {
        //   id: 1,
        //   title: 'APPOINTMENT',
        //   description: 'Upcoming appointment with Dr. Chuks John',
        //   notificationTime: '2 Seconds ago'
        // },
        // {
        //   id: 1,
        //   title: 'VERIFICATION COMPLETE',
        //   description: 'Your account has been verified! You can now set your appointment schedule and fee per session to start seeing patients.',
        //   notificationTime: '2 Seconds ago'
        // }
      ],
      currentTab: 'Upcoming',
      appointments: ['Upcoming', 'Past'],
      homeTabs: ['Overview', 'Messages'],
      activeHomeTab: 'Overview'
    }
  },
  methods: {
    toggleSidebar() {
      console.log('clicked')
      this.showSidebar = !this.showSidebar
    },
    toggleAppointmentForm() {
      this.showAppointmentForm = !this.showAppointmentForm
    }
  },
  mounted() {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : '';
    if (this.user) {
      return
    } else {
      this.$router.push('/');
    }
  }
}
</script>

<style></style>
