<template>
  <main>
    <div
      class="hidden md:block flex h-screen flex-col justify-between border-e bg-gray-50"
    >
      <div class="px-4 py-6">
        <span class="place-content-center">
          <img src="@/assets/img/logo.svg" alt="" />
        </span>

        <nav
          aria-label="Main Nav"
          class="mt-6 flex flex-col space-y-6 hidden md:block"
        >
          <a
            href="#"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
          >
            <img src="@/assets/img/homeIcon.svg" alt="" />

            <span class="font-medium"> Home </span>
          </a>

          <a
            href="#"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
          >
            <img src="@/assets/img/servicesIcon.svg" alt="" />

            <span class="font-medium"> Services </span>
          </a>

          <a
            href="#"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
          >
            <img src="@/assets/img/appointmentsIcon.svg" alt="" />

            <span class="font-medium"> Appointments </span>
          </a>

          <a
            href="#"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
          >
            <img src="@/assets/img/recordsIcon.svg" alt="" />

            <span class="font-medium"> Records </span>
          </a>

          <a
            href="#"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
          >
            <img src="@/assets/img/medicalTimelineIcon.svg" alt="" />

            <span class="font-medium"> Medical Timeline </span>
          </a>

          <a
            href="#"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
          >
            <img src="@/assets/img/orderHistoryIcon.svg" alt="" />

            <span class="font-medium"> Order History </span>
          </a>

          <a
            href="#"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
          >
            <img src="@/assets/img/communityIcon.svg" alt="" />

            <span class="font-medium"> Community </span>
          </a>

          <a
            href="#"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
          >
            <img src="@/assets/img/walletIcon.svg" alt="" />

            <span class="font-medium"> Wallet </span>
          </a>
        </nav>
      </div>

      <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img src="@/assets/img/signOutIcon.svg" alt="" />

          <div>
            <p class="text-xl font-extralight">Sign Out</p>
          </div>
        </a>
      </div>
    </div>

    <div class="md:hidden flex justify-between px-3 py-2 items-center w-full">
      <div>
        <span class="place-content-center">
          <img src="@/assets/img/logo.svg" alt="" />
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
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="md:hidden">
      <b-sidebar id="sidebar-backdrop" no-header backdrop shadow width="380px">
        <template #default="{ hide }">
          <div class="flex justify-between items-center py-3 w-11/12 mx-auto">
            <div class="">
              <img src="@/assets/img/logo.svg" alt="" />
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
            <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-6">
              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 bg-gray-200"
              >
                <img src="@/assets/img/homeIcon.svg" alt="" />

                <span class="font-medium text-sm"> Home </span>
              </a>

              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
              >
                <img src="@/assets/img/servicesIcon.svg" alt="" />

                <span class="font-medium text-sm"> Services </span>
              </a>

              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
              >
                <img src="@/assets/img/appointmentsIcon.svg" alt="" />

                <span class="font-medium text-sm"> Appointments </span>
              </a>

              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
              >
                <img src="@/assets/img/recordsIcon.svg" alt="" />

                <span class="font-medium text-sm"> Records </span>
              </a>

              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
              >
                <img src="@/assets/img/medicalTimelineIcon.svg" alt="" />

                <span class="font-medium text-sm"> Medical Timeline </span>
              </a>

              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
              >
                <img src="@/assets/img/orderHistoryIcon.svg" alt="" />

                <span class="font-medium text-sm"> Order History </span>
              </a>

              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
              >
                <img src="@/assets/img/communityIcon.svg" alt="" />

                <span class="font-medium text-sm"> Community </span>
              </a>

              <a
                href="#"
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
              >
                <img src="@/assets/img/walletIcon.svg" alt="" />

                <span class="font-medium text-sm"> Wallet </span>
              </a>

              <a
                href="#"
                class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
              >
                <img src="@/assets/img/signOutIcon.svg" alt="" />

                <div>
                  <p class="font-extralight">Sign Out</p>
                </div>
              </a>
            </nav>
          </div>
        </template>
      </b-sidebar>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>
