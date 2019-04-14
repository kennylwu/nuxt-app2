<template>
  <section class="container">
    <h2>Create service list:</h2>
    <b-list-group>
      <b-list-group-item v-for="(services, index) in services" :key="index" :name="index">
        <input :checked="services.done" type="checkbox" @change="toggle(services)">
        <span :class="{ done: services.done }">{{ services.text }}</span>
        <b-button :name="index" variant="danger" @click="deleteServices">Delete</b-button>
      </b-list-group-item>
      <b-list-group-item>
        <input placeholder="What services offered?" @keyup.enter="addServices">
        <!-- <b-button variant="success" type="submit">Add</b-button> -->
      </b-list-group-item>
    </b-list-group>
    <NuxtLink to="/">Home</NuxtLink>
  </section>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  computed: mapGetters({
    services: "services/services"
  }),
  methods: {
    addServices(e) {
      debugger;
      const text = e.target.value;
      if (text.trim()) {
        this.$store.commit("services/add", { text });
      }
      e.target.value = "";
    },
    deleteServices(e) {
      const index = e.target.name;
      console.log(index);
      this.$store.commit("services/delete", { index });
    },
    ...mapMutations({
      toggle: "services/toggle"
    })
  }
};
</script>