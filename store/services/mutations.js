export default {
  add(state, { text }) {
    state.list.push({
      text,
      done: false
    });
  },
  delete(state, { index }) {
    state.list.splice(index, 1);
  },
  toggle(state, services) {
    services.done = !services.done;
  }
};
