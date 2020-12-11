<template>
  <el-form ref="form" label-position="left" label-width="200px" :model="form">
    <el-form-item label="Nombre">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Edad">
      <el-input-number v-model="form.age"></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-button @click="cancel()">Cancelar</el-button>
      <el-button type="primary" @click="next()">Siguiente</el-button>
    </el-form-item>
    <hr/>
    <form-nav></form-nav>
  </el-form>
</template>

<script>
import { ElNotification } from "element-plus";
import FormNav from "./FormNav.vue";

export default {
  components: { FormNav },
  data() {
    return {
      form: {
        name: "",
        age: 0,
      },
    };
  },
  methods: {
    next() {
      let currentStep = this.$route.params.step;
      this.$router.push({ name: "form", params: { step: ++currentStep } });
    },
    cancel() {
      ElNotification.info({
        title: "Info",
        message: "Has vuelto a la home!",
      });
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style></style>
