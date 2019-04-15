<template>
  <section class="container">
    <h1>Homepage</h1>
    <p class="subheading">welcome to the homepage</p>
    <div>
      <b-jumbotron header="Hello there!" lead="This is my nuxt page.">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore rerum molestiae vero a odio sunt vitae, ut, quae nam asperiores voluptate sequi ea voluptatum itaque tempore consectetur nostrum nisi perferendis!</p>
      </b-jumbotron>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deleniti? Iusto, magnam doloremque quaerat commodi vero quo rem recusandae corrupti non doloribus architecto, ipsum amet ut, quae quia eius excepturi!</p>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: "Welcome",
      meta: [
        { name: "description", content: "Welcome brief description" },
        { name: "keywords", content: "searchable terms" }
      ]
    };
  },
  components: {}
};
</script>

