<template>
  <div class="dark">
    <no-ssr>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>
          <nuxt-link to="/">Kenny's profile</nuxt-link>
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

    <Nuxt/>
  </div>
</template>

<style>
body {
  overflow: hidden;
}
.dark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: rgb(126, 199, 183);
  color: black;
  padding: 10px;
}
.dark a {
  color: white;
}
</style>
