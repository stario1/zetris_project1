<template>
<g-header/>
  <g-registration/>
</template>

<script>
import gHeader from './components/g-header.vue';
import gRegistration from './components/g-registration.vue';

export default {
  name: 'App',
  components: {gHeader, gRegistration

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
