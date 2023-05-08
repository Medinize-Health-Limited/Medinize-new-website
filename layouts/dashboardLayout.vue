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
              <img src="@/assets/img/user_profile.svg" alt="" class="h-7 w-7" />
              <p class="text-sm tracking-wider text-gray-500">Samuel</p>
              <!-- <p class="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                  fill="none" stroke="#acb8b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg></p> -->
              <div class="relative">
                <div class="inline-flex items-center overflow-hidden rounded-md border bg-white">
                  <a href="#" class="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                    Edit
                  </a>

                  <button @click="toggleDropdownVisibility"
                    class="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                    <span class="sr-only">Menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>

                <div v-if="showDropdown"
                  class="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                  role="menu">
                  <div class="p-2">
                    <strong class="block p-2 text-xs font-medium uppercase text-gray-400">
                      General
                    </strong>

                    <a href="#"
                      class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem">
                      View on Storefront
                    </a>

                    <a href="#"
                      class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem">
                      View Warehouse Info
                    </a>

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
                    </strong>

                    <form method="POST" action="#">
                      <button type="submit"
                        class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        role="menuitem">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>

                        Delete Product
                      </button>
                    </form>
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
      showDropdown: false
    }
  },
  methods: {
    toggleDropdownVisibility() {
      this.showDropdown = !this.showDropdown;
    }
  }
};
</script>

<style></style>
