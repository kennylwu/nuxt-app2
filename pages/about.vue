<template>
  <section>
    <div>
      <h1>About</h1>
      <img
        src="https://media.licdn.com/dms/image/C5103AQHE9C_fmytICA/profile-displayphoto-shrink_200_200/0?e=1560384000&v=beta&t=_qQkuScZMCBt8KbZB1X6529AivJHfFxQhnI10jds0J0"
        alt="profile"
      >
    </div>
    <p class="subheading">Infomation about me</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deleniti? Iusto, magnam doloremque quaerat commodi vero quo rem recusandae corrupti non doloribus architecto, ipsum amet ut, quae quia eius excepturi!</p>
    <footer class="flex-container">
      <b-link class="link" href="https://github.com/kennylwu">Click here to visit my Github</b-link>
    </footer>
  </section>
</template>

<script>
export default {
  //   transition: "bounce",
  head() {
    return {
      title: "About Kenny",
      meta: [
        { name: "description", content: "Brief description" },
        { name: "keywords", content: "searchable terms" }
      ]
    };
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
}
.link {
  color: teal;
}
</style>