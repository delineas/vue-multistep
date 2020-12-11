<template>
  <el-button @click="cancel()">Cancelar</el-button>
  <el-button @click="back()">Atrás</el-button>
  <el-button type="primary" @click="next()">Siguiente</el-button>
  <el-button type="primary" @click="end()">Terminar</el-button>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  methods: {
    cancel() {
      ElNotification.info({
        title: "Info",
        message: "Has vuelto a la home!",
      });
      this.$router.push({ name: "home" });
    },
    back() {
      let currentStep = this.$route.params.step;
      this.$router.push({ name: "form", params: { step: --currentStep } });
    },
    next() {
      let currentStep = this.$route.params.step;
      this.$router.push({ name: "form", params: { step: ++currentStep } });
    },
    end() {
      console.log("Hemos terminado");
      ElNotification.success({
        title: "Ok",
        message: "El formulario ha sido enviado",
      });
      this.$router.push({ name: "home" });
    },
  },
};
</script>
