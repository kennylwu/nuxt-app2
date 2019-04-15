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
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deleniti? Iusto, magnam doloremque quaerat commodi vero quo rem recusandae corrupti non doloribus architecto, ipsum amet ut, quae quia eius excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officiis, rem veritatis soluta eaque fugiat maiores iusto mollitia possimus itaque. Laborum nostrum nihil numquam soluta et eos itaque fugiat est!</p>
    <footer class="flex-container">
      <div class="icon-container">
        <span class="ti-github"></span>
        <span class="icon-name">
          <b-link class="link" href="https://github.com/kennylwu">Visit my GitHub</b-link>
        </span>
      </div>
      <div class="icon-container">
        <span class="ti-linkedin"></span>
        <span class="icon-name">
          <b-link
            class="link"
            href="https://www.linkedin.com/in/kenny-wu-631294174/"
          >Visit my Linkedin</b-link>
        </span>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
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
.icon {
  display: flex;
  width: 3%;
  height: 3%;
}
.flex-container {
  display: flex;
  justify-content: center;
}
.link {
  color: teal;
  padding: 1%;
}
.icon-container {
  width: 240px;
  padding: 0.7em 0;
  float: left;
  position: relative;
  text-align: left;
}
.ti-github {
  font-family: "themify";
  font-style: normal;
  font-weight: bold;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}
</style>