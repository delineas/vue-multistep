<template>
  <el-form :ref="formName" label-position="left" label-width="200px" :model="form">
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
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { ref } from 'vue';

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
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const formRef = ref(null);

    const form = store.state.form;

    const back = () => {
      let currentStep = route.params.step;
      router.push({ name: "form", params: { step: --currentStep } });
    }

    const finish = () => {
      store
        .dispatch("sendForm", form)
        .then((data) => {
          console.log("sendForm", data);
          ElNotification.success({
            title: "Terminado",
            message: "Has enviado el formulario",
          });
          store.commit("resetForm");
          router.push({ name: "home" });
        })
        .catch((e) => {
          console.log("Error", e);
          ElNotification.error({
            title: "Fallo",
            message: "Algo ha ido mal",
          });
        });
    }

    return {
      form,
      formRef,
      finish,
      back
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
