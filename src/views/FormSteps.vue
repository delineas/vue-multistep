<template>
  <component :is="getComponent"></component>
</template>

<script>
import FormStep1 from "../components/FormStep1";
import FormStep2 from "../components/FormStep2";
import FormStep3 from "../components/FormStep3";

export default {
  components: {
    FormStep1,
    FormStep2,
    FormStep3,
  },
  computed: {
    getComponent() {
      return `FormStep${this.$route.params.step}`;
    },
  },
  mounted() {
    if (!this.$route.meta.steps.includes(Number(this.$route.params.step))) {
      this.$router.push({ name: "not-found" });
    }
  },
};
</script>
