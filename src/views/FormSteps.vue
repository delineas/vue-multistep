<template>
  <component :is="getComponent"></component>
  <hr/>
  <form-nav :steps="steps"></form-nav>
</template>

<script>
import FormNav from '../components/FormNav.vue';
import FormStep1 from "../components/FormStep1";
import FormStep2 from "../components/FormStep2";

export default {
  components: {
    FormStep1,
    FormStep2,
    FormNav,
  },
  data() {
    return  {
      steps: [1,2]
    }
  },
  computed: {
    getComponent() {
      return `FormStep${this.$route.params.step}`
    }
  }
};
</script>
