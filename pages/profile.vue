<template>
  <div class="bg-black bg-opacity-25">
    <div class="background w-full h-full bg-blend-overlay bg-opacity-50 bg-gray-400 pt-10 rounded-lg p-3">
      <keep-alive>
        <component :is="profileUpdateSteps[currentStep].component" @profileUpdateSuccess="next" @goBack="goBack()" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import ProfileForm from "@/components/Profile/ProfileForm.vue";
import ProfileModal from "@/components/Profile/ProfileModal.vue";
export default {
  components: {
    ProfileForm,
    ProfileModal,
  },
  data() {
    return {
      user: {},
      currentStep: 0,
      profileUpdateSteps: [
        {
          title: "profileForm",
          component: ProfileForm,
        },
        {
          title: "profileUpdateSuccessModal",
          component: ProfileModal,
        },
      ],
    };
  },
  mounted() {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : '';
    if (this.user) {
      return
    } else {
      this.$router.push('/');
    }
    this.setPageData();
  },
  methods: {
    next() {
      this.currentStep += 1;
    },
    previous() {
      this.currentStep = 0;
    },
    setPageData() {
      this.currentStep = 0;
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url("./assets/img/landing.svg");
  height: 100vh;
  width: 100vw;
}
</style>
