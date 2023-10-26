<template>
  <main class="space-y-10">
    <section
      class="overflow-hidden background bg-cover bg-top bg-no-repeat"
    >
      <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="text-center ltr:sm:text-left rtl:sm:text-right flex justify-center items-center flex-col">
          <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p
            class="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed text-center"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            officia corporis quasi doloribus iure architecto quae voluptatum beatae
            excepturi dolores.
          </p>
        </div>
      </div>
    </section>
    <section class="max-w-2xl mx-auto space-y-4">
      <div class="space-y-4">
        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 class="font-bold">
              What is MEDINIZE?
            </h2>

            <svg
              class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="mt-4 px-4 leading-relaxed text-sm text-gray-900">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
          </p>
        </details>

        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 class="font-bold">
              How MEDINIZE aims to solve healthcare accessibility problem in Africa?
            </h2>

            <svg
              class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="mt-4 px-4 text-sm leading-relaxed text-gray-900">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
          </p>
        </details>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Medinize | Frequently Asked Questions',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Medinize | Frequently Asked Questions'
      }
    ]
  }
}
</script>

<style>
.background {
  background: url('~/assets/img/frequently.jpg');
}
</style>
