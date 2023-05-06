<template>
  <main class="md:flex">
    <div class="w-full md:w-2/12">
     <sidebar></sidebar>
    </div>
    <div class="w-full md:w-10/12">
      <!-- <dashboard-navbar></dashboard-navbar> -->
      <div class="md:pl-10"><Nuxt /></div>
    </div>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
// import DashboardNavbar from "@/components/DashboardNavbar.vue";
export default {
  components: {
    Sidebar
    // DashboardNavbar,
  },
};
</script>

<style>
</style>
