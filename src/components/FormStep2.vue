<template>
  <el-form ref="form" label-position="left" label-width="200px" :model="form">
    <el-form-item label="Ciudad">
      <el-input v-model="form.city"></el-input>
    </el-form-item>
    <el-form-item label="¿Es malandriner?">
      <el-switch v-model="form.malandriner"> </el-switch>
    </el-form-item>
  </el-form>
  <form-nav :steps="steps" @click:back="back" @click:end="finish"></form-nav>
  <hr />
  {{ $store.state.form }}
</template>

<script>
import { ElNotification } from "element-plus";
import FormNav from "../components/FormNav.vue";

export default {
  components: {
    FormNav,
  },
  computed: {
    steps() {
      return this.$route.meta.steps;
    },
    form() {
      return this.$store.state.form;
    },
  },
  methods: {
    back() {
      let currentStep = this.$route.params.step;
      this.$router.push({ name: "form", params: { step: --currentStep } });
    },
    finish() {
      this.$store
        .dispatch("sendForm", this.form)
        .then((data) => {
          console.log("sendForm", data);
          ElNotification.success({
            title: "Terminado",
            message: "Has enviado el formulario",
          });
          this.$router.push({ name: "home" });
        })
        .catch((e) => {
          console.log("Error", e);
          ElNotification.error({
            title: "Fallo",
            message: "Algo ha ido mal",
          });
        });
    },
  },
};
</script>

<style></style>
