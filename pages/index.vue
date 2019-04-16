<template>
  <section class="container">
    <h1>Homepage</h1>
    <p class="subheading">welcome to the homepage</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deleniti? Iusto, magnam doloremque quaerat commodi vero quo rem recusandae corrupti non doloribus architecto, ipsum amet ut, quae quia eius excepturi!</p>
    <Apod
      v-for="(apod, index) in data"
      :key="index"
      :copyright="data.copyright"
      :title="data.title"
      :date="data.date"
      :explanation="data.explanation"
      :url="data.url"
    />
  </section>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import Apod from "@/components/Apod";

export default {
  components: { Apod },
  asyncData({ req, params }) {
    return axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=THQPTFCIhCV3heTNCJGVkhjjYBcsdtejgBRKPtll"
      )
      .then(res => {
        console.log(res.data);
        return { data: res.data };
      })
      .catch(res => {
        console.log(res);
      });
  },
  head() {
    return {
      title: "Welcome",
      meta: [
        { name: "description", content: "Welcome brief description" },
        { name: "keywords", content: "searchable terms" }
      ]
    };
  }
};
</script>

