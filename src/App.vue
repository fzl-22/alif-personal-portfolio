<template>
  <FirstSection />
  <SecondSection />
  <ThirdSection />
  <FourthSection />
  <FooterSection />
</template>

<script>
import FourthSection from './components/FourthSection.vue';
import FirstSection from './components/FirstSection.vue';
import FooterSection from './components/FooterSection.vue';
import SecondSection from './components/SecondSection.vue';
import ThirdSection from './components/ThirdSection.vue';


export default {
  name: 'App',
  components: {
    SecondSection,
    ThirdSection,
    FooterSection,
    FirstSection,
    FourthSection
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
}
</style>
