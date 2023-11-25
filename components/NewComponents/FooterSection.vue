<template>
  <section>
    <footer class="bg-white lg:block hidden">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div class="justify-center sm:justify-start space-y-2">
              <div>
                <img src="@/assets/img/new-logo.png" alt="" class="w-32">
              </div>
              <p class="leading-relaxed text-sm text-gray-500 sm:max-w-xs sm:text-left">
                (+234)808729002
              </p>
              <p class="text-[#000000] font-light text-sm">
                medinizehealthlimited@gmail.com
              </p>
            </div>

            <ul class="mt-8 flex justify-center gap-6 sm:justify-start md:gap-3">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span class="sr-only">Linedin</span>
                  <img src="@/assets/img/linkedin.svg" alt="" class="w-10">
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span class="sr-only">Facebook</span>
                  <img src="@/assets/img/facebook.svg" alt="" class="w-10">
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span class="sr-only">Instagram</span>
                  <img src="@/assets/img/instagram.svg" alt="" class="w-10">
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span class="sr-only">Twitter</span>
                  <img src="@/assets/img/twitter.svg" alt="" class="w-10">
                </a>
              </li>
            </ul>
          </div>

          <div
            class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2"
          >
            <div class="sm:text-left">
              <p class="text-base font-medium text-gray-900">
                Company
              </p>

              <ul class="mt-3 space-y-4 text-sm">
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="#aboutUs"
                  >
                    About us
                  </a>
                </li>

                <li>
                  <nuxt-child
                    class="text-gray-700 transition hover:text-gray-700/75"
                    to="/faq"
                  >
                    FAQ
                  </nuxt-child>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div class="sm:text-left">
              <p class="text-lg font-medium text-gray-900">
                Product
              </p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="https://medinize-community.netlify.app/"
                    target="_self"
                  >
                    community
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Telemedicine
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div class="sm:text-left">
              <p class="text-lg font-medium text-gray-900">
                Legal
              </p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <nuxt-link
                    class="text-gray-700 transition hover:text-gray-700/75"
                    to="/terms"
                  >
                    Terms of service
                  </nuxt-link>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-12 border-t border-gray-400 pt-3">
          <div class="text-center sm:flex sm:justify-between sm:text-left">
            <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 font-bold">
              &copy; 2023 Medinize-All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
    <footer class="bg-gray-50 mt-20 lg:mt-0 lg:hidden">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div class="justify-center sm:justify-start space-y-2">
              <div>
                <img src="@/assets/img/new-logo.png" alt="" class="w-32">
              </div>
              <p class="leading-relaxed text-sm text-gray-500 sm:max-w-xs sm:text-left">
                (+234)808729002
              </p>
              <p class="text-[#000000] font-light text-sm">
                medinizehealthlimited@gmail.com
              </p>
            </div>

            <ul class="mt-8 flex lg:justify-center gap-6 sm:justify-start md:gap-3">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span class="sr-only">Linedin</span>
                  <img src="@/assets/img/linkedin.svg" alt="" class="w-10">
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span class="sr-only">Facebook</span>
                  <img src="@/assets/img/facebook.svg" alt="" class="w-10">
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span class="sr-only">Instagram</span>
                  <img src="@/assets/img/instagram.svg" alt="" class="w-10">
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span class="sr-only">Twitter</span>
                  <img src="@/assets/img/twitter.svg" alt="" class="w-10">
                </a>
              </li>
            </ul>
          </div>

          <div
            class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2"
          >
            <div class="sm:text-left">
              <p class="text-base font-medium text-gray-900">
                Company
              </p>

              <ul class="mt-3 space-y-4 text-sm">
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="#aboutUs"
                  >
                    About us
                  </a>
                </li>

                <li>
                  <nuxt-child
                    class="text-gray-700 transition hover:text-gray-700/75"
                    to="/faq"
                  >
                    FAQ
                  </nuxt-child>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div class="sm:text-left">
              <p class="text-lg font-medium text-gray-900">
                Product
              </p>

              <ul class="mt-3 space-y-4 text-sm">
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="https://medinize-community.netlify.app/"
                    target="_self"
                  >
                    community
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Telemedicine
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div class="sm:text-left">
              <p class="text-lg font-medium text-gray-900">
                Legal
              </p>

              <ul class="mt-3 space-y-4 text-sm">
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/terms"
                  >
                    Terms of service
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="/terms"
                  >
                    Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-12 border-t border-gray-400 pt-3">
          <div class="text-center sm:flex sm:justify-between sm:text-left">
            <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 font-bold">
              &copy; 2023 Medinize-All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
