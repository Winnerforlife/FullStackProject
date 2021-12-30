<template>
  <div class="container mt-5">
    <h3>{{ article.title }}</h3>
    <h5 class="mt-3">
      Author:
      <span class="badge bg-primary">
        {{ article.author }}
      </span>
    </h5>
    <p class="mt-3">{{ article.body }}</p>
    <h6>Published on {{ article.created_at }}</h6>
    <ArticleActions v-if="IsAuthor" :slug="article.slug" />
  </div>
</template>

<script>
import { csrftoken } from "../csrf/csrf_token.js";
import ArticleActions from "../components/ArticleActions.vue";

export default {
  components: {
    ArticleActions,
  },

  data() {
    return {
      article: {},
      requestUser: null,
    };
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  methods: {
    getArticleData() {
      fetch(`/api/articles/${this.slug}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFTOKEN": csrftoken,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.article = data;
        })
        .catch((error) => console.log(error));
    },
    getUserRequest() {
      this.requestUser = localStorage.getItem("username");
    },
  },
  computed: {
    IsAuthor() {
      return this.article.author === this.requestUser || this.requestUser === 'admin';
    },
  },

  created() {
    this.getArticleData();
    this.getUserRequest();
  },
};
</script>

<style>
#app .mt-5{
  background-color: white;
  width: 100%;
	max-width: 700px;
	/* font-family: sans-serif; */
	padding: 0 0 1vw 0;
	box-shadow: 0 0 300px black;
}

#app h5{
  text-align: right;
  padding-right: 1vw;
}

#app p {
	line-height: 1.5rem;
	padding: 0 1.5rem;
	/* font-family: "Noticia Text", serif; */
  text-align: left;
  margin: 0.25rem 0;
  column-span: all;
	padding-bottom: 1rem;
}

h3 {
	background: black;
	color: white;
	font-size: 2rem;
	column-span: all;
	padding: 1rem;
  margin: 0;
	width: fit-content;
	max-width: 100%;
}

</style>