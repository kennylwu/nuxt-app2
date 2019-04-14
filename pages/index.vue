<template>
  <section class="container">
    <h1>Homepage</h1>
    <p class="subheading">welcome to the homepage</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deleniti? Iusto, magnam doloremque quaerat commodi vero quo rem recusandae corrupti non doloribus architecto, ipsum amet ut, quae quia eius excepturi!</p>
  </section>
</template>

<script>
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

<style>
/*
style in main.ccs
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
