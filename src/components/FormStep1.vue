<template>
  <el-form ref="form" label-position="left" label-width="200px" :model="form">
    <el-form-item label="Nombre">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Edad">
      <el-input-number v-model="form.age"></el-input-number>
    </el-form-item>
  </el-form>
  <form-nav :steps="steps"></form-nav>
  <hr/>
  {{ $store.state.form }}
</template>

<script>
import FormNav from '../components/FormNav.vue';

export default {
  components: {
    FormNav
  },
  computed: {
    steps() {
      return this.$route.meta.steps;
    },
    form() {
      return this.$store.state.form;
    }
  }
};
</script>

<style></style>
