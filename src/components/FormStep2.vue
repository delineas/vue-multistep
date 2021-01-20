<template>
  <el-form :ref="formName" label-position="left" label-width="200px" :model="form">
    <el-form-item label="Ciudad">
      <el-input v-model="form.city"></el-input>
    </el-form-item>
    <el-form-item label="¿Es malandriner?">
      <el-switch v-model="form.malandriner"> </el-switch>
    </el-form-item>
  </el-form>
  <form-nav :steps="$route.meta.steps" @click:back="back" @click:end="finish"></form-nav>
</template>

<script>
import FormNav from "../components/FormNav.vue";
import { useFormStep } from "../utils/useFormStep"

export default {
  components: {
    FormNav,
  },
  data() {
    return {
      formName: "formRef"
    }
  },
  setup() {
    
    const { form, formRef, finish, back } = useFormStep();

    return {
      form,
      formRef,
      finish,
      back
    }
  },
};
</script>

<style></style>
