import { createStore } from 'vuex'

export default createStore({
  state: {
    form: {
      name: "",
      age: 0,
      city: "",
      malandriner: false
    },
  },
  mutations: {
    setForm(state, payload) {
      Object.assign(state.form, payload);
      console.log('setForm', state);
    }
  },
  actions: {},
});
