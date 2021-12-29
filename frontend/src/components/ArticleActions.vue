<template>
  <div class="container">
    <router-link
      :to="{ name: 'articleedit', params: { slug: slug } }"
      class="btn btn-success mt-4"
    >
      Update
    </router-link>
    <button class="btn btn-danger mt-4" @click="deleteArticle">Delete</button>
  </div>
</template>

<script>
import { csrftoken } from "../csrf/csrf_token.js";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  methods: {
    deleteArticle() {
      fetch(`/api/articles/${this.slug}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFTOKEN": csrftoken,
        },
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>