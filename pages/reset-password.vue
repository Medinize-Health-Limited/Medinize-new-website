<template>
  <div class="bg-black bg-opacity-25">
    <div
      class="background w-full h-full bg-blend-overlay bg-opacity-50 bg-gray-400 pt-10 rounded-lg"
    >
      <keep-alive>
        <component
          :is="resetPasswordSteps[currentStep].component"
          @goBack="goBack()"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import ResetPasswordForm from "@/components/ResetPassword/ResetPasswordForm.vue";
import ResetPasswordModal from "@/components/ResetPassword/ResetPasswordModal.vue";
export default {
  components: {
    ResetPasswordForm,
    ResetPasswordModal,
  },
  data() {
    return {
      currentStep: 1,
      resetPasswordSteps: [
        {
          title: "resetPasswordForm",
          component: ResetPasswordForm,
        },
        {
          title: "resetPasswordEmailSuccessModal",
          component: ResetPasswordModal,
        },
      ],
    };
  },
  mounted() {
    this.setPageData();
  },
  methods: {
    next() {
      this.currentStep += 1;
    },
    setPageData() {
      this.currentStep = 1;
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
