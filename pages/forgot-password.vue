<template>
  <div class="bg-black bg-opacity-25">
    <div
      class="background w-full h-full bg-blend-overlay bg-opacity-50 bg-gray-400 pt-10 rounded-lg p-3"
    >
      <keep-alive>
        <component
          :is="forgotPasswordSteps[currentStep].component"
          @goBack="goBack()"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import ForgotPasswordForm from '@/components/ForgotPassword/ForgotPasswordForm.vue'
import ForgotPasswordModal from '@/components/ForgotPassword/ForgotPasswordModal.vue'
export default {
  components: {
    ForgotPasswordForm,
    ForgotPasswordModal
  },
  data () {
    return {
      currentStep: 0,
      forgotPasswordSteps: [
        {
          title: 'forgotPasswordForm',
          component: ForgotPasswordForm
        },
        {
          title: 'forgotPasswordEmailSuccessModal',
          component: ForgotPasswordModal
        }
      ]
    }
  },
  mounted () {
    this.setPageData()
  },
  methods: {
    next () {
      this.currentStep += 1
    },
    setPageData () {
      this.currentStep = 0
    }
  }
}
</script>

<style scoped>
.background {
  background-image: url("./assets/img/landing.svg");
  height: 100vh;
  width: 100vw;
}
</style>
