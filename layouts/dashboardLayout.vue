<template>
  <main class="md:flex">
    <div class="w-full md:w-2/12">
      <sidebar></sidebar>
    </div>
    <div class="w-full md:w-10/12 max-h-screen overflow-y-auto bg-green-50">
      <!-- <dashboard-navbar></dashboard-navbar> -->
      <div class="">
        <div class="bg-white py-3 hidden md:block">
          <div class="flex justify-end items-end pr-10">
            <div class="flex items-center space-x-3">
              <img src="@/assets/img/notification_bell.svg" alt="" class="h-7 w-7" />
              <!-- <img  src="@/assets/img/user_profile.svg" alt="" class="h-7 w-7" /> -->
              <p class="text-sm tracking-wider text-gray-500">{{ user.first_name ?? 'User' }}</p>
              <!-- <p class="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                  fill="none" stroke="#acb8b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg></p> -->
              <div class="relative">
                <div class="inline-flex items-center overflow-hidden rounded-md border bg-white">
                  <!-- <a href="#" class="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                    Info
                  </a> -->
                  <img @click="toggleDropdownVisibility" src="@/assets/img/user_profile.svg" alt="" class="h-7 w-7" />

                  <!-- <button @click="toggleDropdownVisibility"
                    class="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                    <span class="sr-only">Menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                  </button> -->
                </div>

                <div v-if="showDropdown"
                  class="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                  role="menu">
                  <div class="p-2">
                    <strong class="block p-2 text-xs font-medium uppercase text-gray-400">
                      General
                    </strong>

                    <a href.prevent="#" @click="toggleProfileModal"
                      class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem">
                      View Profile
                    </a>
                    <!--
                    <a href="#"
                      class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem">
                      View Warehouse Info
                    </a> -->
                    <!--
                    <a href="#"
                      class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem">
                      Duplicate Product
                    </a>

                    <a href="#"
                      class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem">
                      Unpublish Product
                    </a>
                  </div>

                  <div class="p-2">
                    <strong class="block p-2 text-xs font-medium uppercase text-gray-400">
                      Danger Zone
                    </strong> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:pl-10">
          <Nuxt />
        </div>
      </div>
    </div>

    <b-modal id="ProfileModal" hide-footer hide-header no-close-on-esc no-close-on-backdrop>
      <section class="space-y-10 p-6">
        <div class="d-block text-center">
          <h3>User Profile <img src="@/assets/img/user_profile.svg" alt="" class="h-7 w-7 inline-block" /></h3>
        </div>
        <div class="space-y-6">
          <div class="flex items-center space-x-3 text-sm md:text-base">
            <p class="text-gray-600 text-bold text-sm tracking-wide">First Name :</p>
            <p class="text-sm text-gray-800 tracking-wide">{{ user?.first_name ?? 'N/A' }}</p>
          </div>
          <div class="flex items-center space-x-3 text-sm md:text-base">
            <p class="text-gray-600 text-bold text-sm tracking-wide">Last Name :</p>
            <p class="text-sm text-gray-800 tracking-wide">{{ user?.last_name ?? 'N/A' }}</p>
          </div>
          <div class="flex items-center space-x-3 text-sm md:text-base">
            <p class="text-gray-600 text-bold text-sm tracking-wide">Email Address :</p>
            <p class="text-sm text-gray-800 tracking-wide">{{ user?.email ?? 'N/A' }}</p>
          </div>
          <div class="flex items-center space-x-3 text-sm md:text-base">
            <p class="text-gray-600 text-bold text-sm tracking-wide">Phone Number :</p>
            <p class="text-sm text-gray-800 tracking-wide">{{ user?.phone_number ?? 'N/A' }}</p>
          </div>
        </div>

        <button @click="$bvModal.hide('ProfileModal')"
          class="w-full py-2.5 rounded-md text-white bg-green-500">Close</button>
      </section>

    </b-modal>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      showDropdown: false,
      user: {}
    }
  },
  mounted() {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : '';
  },
  methods: {
    toggleDropdownVisibility() {
      this.showDropdown = !this.showDropdown;
    },
    toggleProfileModal() {
      this.$bvModal.show('ProfileModal')
    }
  }
};
</script>

<style></style>
