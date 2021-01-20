import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { useNotification } from "./useNotification";

const useFormStep = () => {
  const store = useStore();
  const route = useRoute();
  const router = useRouter();
  const notification = useNotification();
  const formRef = ref(null);

  const form = store.state.form;

  const cancel = () => {
    store.commit("resetForm");
    router.push({ name: "home" });
  };

   const back = () => {
     let currentStep = route.params.step;
     router.push({ name: "form", params: { step: --currentStep } });
   };

  const next = () => {
    formRef.value.validate((valid) => {
      if (!valid) {
        notification("error", "Error en el formulario");
        return false;
      }
      store.commit("setForm", form);
      let currentStep = route.params.step;
      router.push({ name: "form", params: { step: ++currentStep } });
    });
  };

   const finish = () => {
     store
       .dispatch("sendForm", form)
       .then((data) => {
         console.log("sendForm", data);
         notification("success", {
           title: "Terminado",
           message: "Has enviado el formulario",
         });
         store.commit("resetForm");
         router.push({ name: "home" });
       })
       .catch((e) => {
         console.log("Error", e);
         notification("error", {
           title: "Fallo",
           message: "Algo ha ido mal",
         });
       });
   };

   return{
     form,
     formRef,
     cancel,
     back,
     next,
     finish
   }

};

export { useFormStep }
