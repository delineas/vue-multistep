<template>
  <el-button v-if="isFirstStep" @click="cancel()" type="danger"
    ><i class="el-icon-close"></i> Cancelar</el-button
  >
  <el-button v-if="!isFirstStep" @click="back()" type="primary"
    ><i class="el-icon-arrow-left"></i> Atrás</el-button
  >
  <el-button v-if="!isLastStep" @click="next()" type="primary"
    >Siguiente <i class="el-icon-arrow-right el-icon-right"></i
  ></el-button>
  <el-button v-if="isLastStep" @click="end()" type="danger"
    >Terminar <i class="el-icon-s-promotion el-icon-right"></i
  ></el-button>
</template>

<script>
import { ElNotification } from "element-plus";
import { computed, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  props: {
    steps: {
      type: Array,
      required: true,
      default: function() {
        return [];
      },
    },
  },
  emits: ["click:end", "click:back", "click:cancel", "click:next"],
  setup(props, { emit }) {
    const { steps } = toRefs(props);
    const route = useRoute();
    const router = useRouter();

    const isFirstStep = computed(
      () => route.params.step == steps.value.slice(0, 1)
    );

    const isLastStep = computed(
      () => route.params.step == steps.value.slice(steps.value.length - 1)
    );

    const cancel = () => {
      emit("click:cancel");
      ElNotification.info({
        title: "Info",
        message: "Has vuelto a la home!",
      });
      router.push({ name: "home" });
    };

    const back = () => {
      emit("click:back");
      let currentStep = route.params.step;
      router.push({ name: "form", params: { step: --currentStep } });
    };

    const next = () => {
      emit("click:next");
      // let currentStep = route.params.step;
      // router.push({ name: "form", params: { step: ++currentStep } });
    };

    const end = () => {
      emit("click:end");
      ElNotification.success({
        title: "Ok",
        message: "El formulario ha sido enviado",
      });
      router.push({ name: "home" });
    };

    return {
      isFirstStep,
      isLastStep,
      cancel,
      back,
      next,
      end,
    };
  },
};
</script>
