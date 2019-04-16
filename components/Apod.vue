<template>
  <article>
    <div>
      <b-jumbotron header="Spotlight!" header-level="4" lead="Check it out, it's far out!">
        <h2>{{ title }}</h2>
        <div class="thumbnail" :style="{backgroundImage: 'url(' + url + ')'}"></div>
        <p>{{ explanation }}</p>
        <span>Credit: {{copyright}}</span>
        <span>{{ date }}</span>
      </b-jumbotron>
    </div>
  </article>
</template>

<script>
export default {
  props: ["copyright", "date", "explanation", "url", "title"]
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.mission {
  box-sizing: border-box;
  width: auto;
  padding: 10px;
  border: 1px solid slategray;
  box-shadow: 4px;
  margin: 10px;
}
.thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 35em;
}
</style>