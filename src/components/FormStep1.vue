<template>
  <el-form ref="form" label-position="left" label-width="200px" :model="form" :rules="rules">
    <el-form-item label="Nombre" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Edad">
      <el-input-number v-model="form.age"></el-input-number>
    </el-form-item>
  </el-form>
  <form-nav :steps="steps" @click:cancel="cancel" @click:next="next" ></form-nav>
  <hr/>
  {{ $store.state.form }}
</template>

<script>
import { ElNotification } from 'element-plus';
import FormNav from '../components/FormNav.vue';

export default {
  components: {
    FormNav
  },
  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: "El nombre es obligatorio"
          },
          {
            min: 3,
            max: 10,
            message: "Entre 3 y 10 caracteres"
          }
        ]
      }
    }
  },
  computed: {
    steps() {
      return this.$route.meta.steps;
    },
    form() {
      return this.$store.state.form;
    }
  },
  methods: {
    next() {
      this.$refs['form'].validate((valid) => {
        if(!valid) {
          ElNotification.error('Error en el formulario')
          return false;
        }
        this.$store.commit('setForm', this.form);
        let currentStep = this.$route.params.step;
        this.$router.push({ name: "form", params: { step: ++currentStep } })
      })

    },
    cancel() {
      this.$store.commit('resetForm');
    }
  }
};
</script>

<style></style>
