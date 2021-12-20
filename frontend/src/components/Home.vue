<template>
  <div class="container mt-4">
    <div v-for="article in articles" :key="article.pk">
      <p class="mb-0">
        Author:
        <span class="badge bg-primary">
          {{ article.author }}
        </span>
      </p>
      <h3>
        <router-link
          class="link-style"
          :to="{ name: 'details', params: { slug: article.slug } }"
        >
          {{ article.title }}
        </router-link>
      </h3>
      <hr />
    </div>
  </div>
</template>

<script>
import { csrftoken } from "../csrf/csrf_token.js";
export default {
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    getAllArticles() {
      fetch("api/articles/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFTOKEN": csrftoken,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.articles.push(...data);
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.getAllArticles();
  },
};
</script>

<style>
.link-style {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.link-style:hover {
  text-decoration: none;
  color: gray;
}
</style>