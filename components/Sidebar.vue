<template>
  <main>
    <div class="hidden md:block flex h-screen flex-col justify-between border-e bg-gray-50">
      <div class="px-4 py-6">
        <div class="place-content-center flex justify-center items-center">
          <img src="@/assets/img/new-logo.png" alt="" class="rounded-full object-cover h-20">
        </div>

        <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-6 hidden md:block">
          <nuxt-link
            :class="[$route.path === '/dashboard' ? 'bg-green-500 text-white' : '']"
            to="/dashboard"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
          >
            <img src="@/assets/img/homeIcon.svg" alt="">

            <span class="font-medium text-xs"> Home </span>
          </nuxt-link>

          <nuxt-link
            to="/dashboard/services"
            :class="[$route.path === '/dashboard/services' ? 'bg-green-500 text-white' : '']"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-700"
          >
            <img src="@/assets/img/servicesIcon.svg" alt="">

            <span class="font-medium text-xs"> Services </span>
          </nuxt-link>

          <nuxt-link
            :class="[$route.path === '/dashboard/appointments' ? 'bg-green-500 text-white' : '']"
            to="/dashboard/appointments"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-700"
          >
            <img src="@/assets/img/appointmentsIcon.svg" alt="">

            <span class="font-medium text-xs"> Appointments </span>
          </nuxt-link>

          <a href="#" class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700">
            <img src="@/assets/img/recordsIcon.svg" alt="">

            <span class="font-medium text-xs"> Records </span>
          </a>

          <a href="#" class="flex items-center gap-2 rounded-lg px-4 py-2 text-xs text-gray-700">
            <img src="@/assets/img/medicalTimelineIcon.svg" alt="">

            <span class="font-medium text-xs"> Medical Timeline </span>
          </a>

          <a href="#" class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700">
            <img src="@/assets/img/orderHistoryIcon.svg" alt="">

            <span class="font-medium text-xs"> Order History </span>
          </a>

          <a
            href="https://medinize-communities.netlify.app/"
            target="_self"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
          >
            <img src="@/assets/img/communityIcon.svg" alt="">

            <span class="font-medium text-xs"> Community </span>
          </a>

          <a href="#" class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700">
            <img src="@/assets/img/walletIcon.svg" alt="">

            <span class="font-medium text-xs"> Wallet </span>
          </a>
        </nav>
      </div>

      <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <div class="cursor-pointer flex items-center gap-2 bg-white p-4 hover:bg-gray-50" @click="logout">
          <img src="@/assets/img/signOutIcon.svg" alt="">

          <div>
            <p class="text-xl font-extralight text-xs">
              Sign Out
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="md:hidden flex justify-between px-3 py-2 items-center w-full">
      <div>
        <span class="place-content-center">
          <img src="@/assets/img/new-logo.png" alt="" class="h-16">
        </span>
      </div>
      <div>
        <button
          v-b-toggle.sidebar-backdrop
          class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
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

    <div class="md:hidden">
      <b-sidebar id="sidebar-backdrop" no-header backdrop shadow width="380px">
        <template #default="{ hide }">
          <div class="flex justify-between items-center py-3 w-11/12 mx-auto">
            <div class="w-full">
              <img src="@/assets/img/new-logo.png" alt="" class="h-16">
            </div>
            <div>
              <svg
                class="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                @click="hide"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>

          <div class="w-11/12 mx-auto">
            <p v-if="user.length" class="tracking-wide font-medium text-gray-700">
              Hello, {{ user ? user.first_name : 'User' }}
            </p>
            <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-6">
              <nuxt-link
                :class="[$route.path === '/dashboard' ? 'bg-green-500 text-white' : '']"
                to="/dashboard"
                class="flex items-center gap-2 rounded-lg px-4 py-2.5 text-gray-700"
              >
                <img src="@/assets/img/homeIcon.svg" alt="">

                <span class="font-medium text-sm"> Home </span>
              </nuxt-link>

              <nuxt-link
                :class="[$route.path === '/dashboard/services' ? 'bg-green-500 text-white' : '']"
                to="/dashboard/services"
                class="flex items-center gap-2 rounded-lg px-4 py-2.5 text-gray-700"
              >
                <img src="@/assets/img/servicesIcon.svg" alt="">

                <span class="font-medium text-sm"> Services </span>
              </nuxt-link>

              <nuxt-link
                :class="[$route.path === '/dashboard/appointments' ? 'bg-green-500 text-white' : '']"
                to="/dashboard/appointments"
                class="flex items-center gap-2 rounded-lg px-4 py-2.5 text-gray-700"
              >
                <img src="@/assets/img/appointmentsIcon.svg" alt="">

                <span class="font-medium text-sm"> Appointments </span>
              </nuxt-link>

              <a href="#" class="flex items-center gap-2 rounded-lg px-4 py-2.5 text-gray-700">
                <img src="@/assets/img/recordsIcon.svg" alt="">

                <span class="font-medium text-sm"> Records </span>
              </a>

              <a href="#" class="flex items-center gap-2 rounded-lg px-4 py-2.5 text-gray-700">
                <img src="@/assets/img/medicalTimelineIcon.svg" alt="">

                <span class="font-medium text-sm"> Medical Timeline </span>
              </a>

              <a href="#" class="flex items-center gap-2 rounded-lg px-4 py-2.5 text-gray-700">
                <img src="@/assets/img/orderHistoryIcon.svg" alt="">

                <span class="font-medium text-sm"> Order History </span>
              </a>

              <a href="#" class="flex items-center gap-2 rounded-lg px-4 py-2.5 text-gray-700">
                <img src="@/assets/img/communityIcon.svg" alt="">

                <span class="font-medium text-sm"> Community </span>
              </a>

              <a href="#" class="flex items-center gap-2 rounded-lg px-4 py-2.5 text-gray-700">
                <img src="@/assets/img/walletIcon.svg" alt="">

                <span class="font-medium text-sm"> Wallet </span>
              </a>

              <nuxt-link
                :class="[$route.path === '/profile' ? 'bg-green-500 text-white' : '']"
                to="/profile"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
              >
                <img src="@/assets/img/user_profile.svg" class="h-6 w-6" alt="">

                <span class="font-medium text-sm"> Profile </span>
              </nuxt-link>

              <div class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50" @click="logout">
                <img src="@/assets/img/signOutIcon.svg" alt="">

                <div>
                  <p class="font-extralight text-sm">
                    Sign Out
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </template>
      </b-sidebar>
    </div>
  </main>
</template>

<script>
import swal from 'sweetalert2/dist/sweetalert2.js'
export default {
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    const user = localStorage.getItem('user')
    this.user = user ? JSON.parse(user) : ''
    if (this.user) {

    } else {
      this.$router.push('/')
    }
  },
  methods: {
    logout () {
      swal.fire({
        title: 'Logout?',
        text: 'Are you sure you want to Logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!'
      }).then((res) => {
        if (process.client) {
          localStorage.removeItem('user')
        };

        if (res.value) {
          swal.fire(
            {
              title: 'Success!',
              text: "You're successfully logged out.",
              icon: 'success'
            })
          this.$router.push('/')
        } else {
          swal.fire(
            {
              title: 'Success!',
              text: "You're still loggged in.",
              icon: 'info'
            })
        }
      })
    }
  }

}
</script>

<style></style>
