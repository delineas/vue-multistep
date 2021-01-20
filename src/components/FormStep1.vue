<template>
  <el-form
    :ref="formName"
    label-position="left"
    label-width="200px"
    :model="form"
    :rules="rules"
  >
    <el-form-item label="Nombre" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Edad">
      <el-input-number v-model="form.age"></el-input-number>
    </el-form-item>
  </el-form>
  <form-nav :steps="$route.meta.steps" @click:cancel="cancel" @click:next="next"></form-nav>
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
      formName: "formRef",
      rules: {
        name: [
          {
            required: true,
            message: "El nombre es obligatorio",
          },
          {
            min: 3,
            max: 10,
            message: "Entre 3 y 10 caracteres",
          },
        ],
      },
    };
  },
  setup() {
    
    const { form, formRef, cancel, next } = useFormStep();

    return {
      form,
      formRef,
      cancel,
      next
    }
  },
};
</script>

<style></style>
