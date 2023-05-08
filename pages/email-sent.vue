<template>
  <main class="grid place-content-center h-screen">
    <div class="flex justify-center items-center flex-col space-y-5">
      <img src="@/assets/img/email-sent.png" alt="" />
      <h1 class="text-sm text-gray-600">Password Reset Email Sent.</h1>
      <h1 class="text-sm text-gray-600">Please Check your Email for your reset password link.</h1>
      <button @click="$router.push('/')" class="bg-green-500 rounded-full text-xs text-white py-2.5 px-10">Continue to Login</button>
    </div>

  </main>
</template>

<script>
export default {

}
</script>

<style></style>
