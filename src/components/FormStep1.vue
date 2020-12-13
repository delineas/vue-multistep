<template>
  <el-form ref="form" label-position="left" label-width="200px" :model="form">
    <el-form-item label="Nombre">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Edad">
      <el-input-number v-model="form.age"></el-input-number>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        age: 0,
      },
    };
  }
};
</script>

<style></style>
