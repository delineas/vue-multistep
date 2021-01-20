<template>
  <el-form
    :ref="formName"
    label-position="left"
    label-width="200px"
    :model="form"
    :rules="rules"
  >
    <el-form-item label="País" prop="country">
      <el-input v-model="form.country"></el-input>
    </el-form-item>
  </el-form>
  <form-nav :steps="$route.meta.steps" @click:back="back" @click:next="next"></form-nav>
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
        country: [
          {
            required: true,
            message: "El país es obligatorio",
          },
        ],
      },
    };
  },
  setup() {
    
    const { form, formRef, back, next } = useFormStep();

    return {
      form,
      formRef,
      back,
      next
    }
  },
};
</script>

<style></style>
