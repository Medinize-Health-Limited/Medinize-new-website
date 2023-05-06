<template>
  <div class="bg-black bg-opacity-25">
    <div
      class="background w-full h-full bg-blend-overlay bg-opacity-50 bg-gray-400 md:py-10 rounded-lg pt-2"
    >
      <keep-alive>
        <component
          :is="loginAuthSteps[currentStep].component"
          @signupSuccess="signupSuccess"
          @goBack="goBack()"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SignupPage from "@/components/Signup/SignupPage.vue";
import EmailConfirmation from "@/components/Signup/EmailConfirmation.vue";
import CreatePassword from "@/components/Signup/CreatePassword.vue";
export default {
  beforeRouteEnter(to, from, next) {
    if (process.client) {
      const user = localStorage.getItem("currentUser");
      this.user = user !== null ? JSON.parse(user) : ""
      if (this.user.email) {
        this.$router.push(from.path)
      } else {
        next()
      }
    }
  },
  components: {
    SignupPage,
    EmailConfirmation,
    CreatePassword,
  },
  data() {
    return {
      currentStep: 0,
      user: null,
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
    this.setPageData();
  },
  methods: {
    signupSuccess() {
      this.currentStep += 1;
    },
    setPageData() {
      const user = localStorage.getItem("currentUser");
      this.user = user !== null ? JSON.parse(user) : "";
      if (this.user.email) {
        this.$router.push("/sign-in");
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url("./assets/img/landing.svg");
  height: 100vh;
  width: 100vw;
  object-fit: cover;
}
</style>
