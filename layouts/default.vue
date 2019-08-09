<template>
  <div >
    <my-header />
    <nuxt :key="key" />
    <my-footer />
  </div>
</template>
<script>
import myHeader from '../components/header/main'
import myFooter from '../components/footer/main'
export default {
  components: {
    myHeader,myFooter
  },
  data() {
    return {
      key: ''
    }
  },
}
</script>

<style>
</style>
