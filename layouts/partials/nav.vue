<template>
  <no-ssr>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <nuxt-link to="/">Home</nuxt-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link to="about">About</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="contact">Contact</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="services">Services</nuxt-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </no-ssr>
  <!-- <header>
    <nuxt-link to="/" class="logo">Hello Nuxt</nuxt-link>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="services">Services</nuxt-link>
        </li>
        <li>
          <nuxt-link to="contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>-->
</template>

<script>
export default {};
</script>

<style >
a {
  color: white;
}
/* header {
  background: whitesmoke;
  display: grid;
  grid-template-columns: repeat(2, auto);
}
.logo,
li a {
  padding: 1em, 2em;
  display: block;
  text-transform: uppercase;
  text-decoration: rgb(20, 233, 73);
  font-size: 15px;
  font-weight: bold;
  color: rgb(56, 122, 197);
  padding: 1em 2em;
  display: inline-block;
  background: rgba(0, 0, 0, 0.1);
}
nav {
  justify-self: right;
}
ul {
  list-style-type: none;
}
li {
  display: inline;
} */
</style>