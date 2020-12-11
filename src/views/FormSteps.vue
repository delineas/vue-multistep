<template>
  <component :is="getComponent"></component>
</template>

<script>
import FormStep1 from "../components/FormStep1";
import FormStep2 from "../components/FormStep2";
export default {
  components: {
    FormStep1,
    FormStep2,
  },
  computed: {
    getComponent() {
      return `FormStep${this.$route.params.step}`
    }
  }
};
</script>
