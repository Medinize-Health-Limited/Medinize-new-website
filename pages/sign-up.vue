<template>
  <div class="bg-black bg-opacity-25">
    <div class="background w-full h-full bg-blend-overlay bg-opacity-50 bg-gray-400 pt-10 rounded-lg p-3">
      <keep-alive>
        <component :is="loginAuthSteps[currentStep].component" @signupSuccess="next"
          @emailVerificationSuccess="handleEmailVerificationSuccess" @goBack="goBack()"
          @passwordCreationSuccess="handlePasswordCreationSuccess" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SignupPage from "@/components/Signup/SignupPage.vue";
import EmailConfirmation from "@/components/Signup/EmailConfirmation.vue";
import CreatePassword from "@/components/Signup/CreatePassword.vue";
export default {
  components: {
    SignupPage,
    EmailConfirmation,
    CreatePassword,
  },
  data() {
    return {
      currentStep: 0,
      user: {},
      loginAuthSteps: [
        {
          title: "SignupForm",
          component: SignupPage,
        },
        {
          title: "emailVerification",
          component: EmailConfirmation,
        },
        {
          title: "createPassword",
          component: CreatePassword,
        },
      ],
    };
  },
  mounted() {
    const user = localStorage.getItem('user');
    console.log(user);
    this.user = user ? JSON.parse(user) : '';
    if (!this.user) {
      return
    } else {
      this.$router.push('dashboard');
    }
    this.setPageData();
  },
  methods: {
    next() {
      this.$router.push('/login')
      // this.currentStep += 1;
    },
    previous() {
      this.currentStep = 0;
    },
    setPageData() {
      this.currentStep = 0;
    },
    handleEmailVerificationSuccess() {
      this.currentStep += 1
    },
    handlePasswordCreationSuccess() {
      this.$router.push('/')
    }
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
