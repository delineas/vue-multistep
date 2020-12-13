<template>
  <el-container>
    <el-header>
      <router-link :to="{name: 'home'}">Home</router-link> |
      <router-link :to="{ name: 'form', params: { step: 1 } }">Form 1</router-link> |
      <router-link :to="{ name: 'form', params: { step: 2 } }">Form 2</router-link></el-header
    >
    <el-main><router-view></router-view></el-main>
  </el-container>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
