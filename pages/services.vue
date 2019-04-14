<template>
  <section class="container">
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Favorite planet:" label-for="input-3">
          <b-form-select id="input-3" v-model="form.planet" :options="planet" required></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="Meow">Cat person</b-form-checkbox>
            <b-form-checkbox value="Woof">Dog person</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <div class="container">
        <b-card class="mt-3" header="Form Data Result">
          <h3>Input</h3>
          <div class="container row">
            <label for="email">Email:</label>
            <pre class="m-0">{{ form.email }}</pre>
          </div>
          <div class="container row">
            <label for="email">Name:</label>
            <pre class="m-0">{{ form.name }}</pre>
          </div>
          <div class="container row">
            <label for="email">Planet:</label>
            <pre class="m-0">{{ form.planet }}</pre>
          </div>
          <div class="container row">
            <label for="email">Checkbox:</label>
            <pre class="m-0">{{ form.checked[0]  }} {{ form.checked[1] }}</pre>
          </div>
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "service",
  data() {
    return {
      form: {
        email: "",
        name: "",
        planet: null,
        checked: []
      },
      planet: [
        { text: "Select One", value: null },
        "Earth",
        "Jupiter",
        "Mars",
        "Mercury",
        "Neptune",
        "Saturn",
        "Venus",
        "Uranus"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.planet = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>