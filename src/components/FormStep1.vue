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
  <form-nav :steps="steps" @click:cancel="cancel" @click:next="next"></form-nav>
  <hr />
  {{ $store.state.form }}
</template>

<script>
import { ElNotification } from "element-plus";
import FormNav from "../components/FormNav.vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { ref } from 'vue';

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
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const formRef = ref(null);

    const form = store.state.form;

    const cancel = () => {
      store.commit("resetForm");
      router.push({ name: "home" });
    };

    const next = () => {
      formRef.value.validate((valid) => {
        if (!valid) {
          ElNotification.error("Error en el formulario");
          return false;
        }
        store.commit("setForm", form);
        let currentStep = route.params.step;
        router.push({ name: "form", params: { step: ++currentStep } });
      });
    };

    return {
      form,
      formRef,
      cancel,
      next
    }
  },
  computed: {
    steps() {
      return this.$route.meta.steps;
    },
  },
};
</script>

<style></style>
