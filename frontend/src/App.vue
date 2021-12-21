<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { csrftoken } from "./csrf/csrf_token.js";

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    getUser() {
      fetch("api/user/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFTOKEN": csrftoken,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const username = data["username"];
          localStorage.setItem("username", username);
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
