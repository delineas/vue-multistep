import { createStore } from "vuex";

export default createStore({
  state: {
    form: {
      name: "",
      age: 0,
      contry: "",
      city: "",
      malandriner: false,
    },
  },
  mutations: {
    setForm(state, payload) {
      Object.assign(state.form, payload);
      console.log("setForm", state);
    },
    resetForm(state) {
      Object.assign(state.form, {
        name: "",
        age: 0,
        contry: "",
        city: "",
        malandriner: false,
      });
    },
  },
  actions: {
    sendForm({ commit, state }, payload) {
      commit("setForm", payload);

      return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.form),
      }).then((response) => response.json());
    },
  },
});
