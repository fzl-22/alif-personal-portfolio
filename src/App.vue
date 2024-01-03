<template>
  <FirstSection />
  <SecondSection />
  <ThirdSection />
  <FourthSection />
  <FooterSection />
</template>

<script>
import FirstSection from './components/FirstSection.vue';
import SecondSection from './components/SecondSection.vue';
import ThirdSection from './components/ThirdSection.vue';
import FourthSection from './components/FourthSection.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FooterSection,
  },
};
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
