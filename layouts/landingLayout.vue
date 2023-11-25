<template>
  <main>
    <LoadSpinner v-if="showHideSpinner" />
    <Nuxt v-else />
  </main>
</template>

<script>
import LoadSpinner from '@/components/NewComponents/LoadSpinner.vue'
export default {
  components: {
    LoadSpinner
  },
  data () {
    return {
      showHideSpinner: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.showHideSpinner = false
    }, 3000)
  }
}
</script>

<style>
