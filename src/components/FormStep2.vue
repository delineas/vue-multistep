<template>
  <el-form ref="form" label-position="left" label-width="200px" :model="form">
    <el-form-item label="Ciudad">
      <el-input v-model="form.city"></el-input>
    </el-form-item>
    <el-form-item label="¿Es malandriner?">
      <el-switch v-model="form.malandiner"> </el-switch>
    </el-form-item>
    <el-form-item>
      <el-button>Atrás</el-button>
      <el-button type="primary">Terminar</el-button>
    </el-form-item>
    <hr/>
    <form-nav></form-nav>
  </el-form>
</template>

<script>
import FormNav from './FormNav.vue';
export default {
  components: { FormNav },
  data() {
    return {
      form: {
        city: "",
        malandriner: false,
      },
    };
  },
};
</script>

<style></style>
