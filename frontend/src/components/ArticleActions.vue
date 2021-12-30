<template>
  <div class="container">
    <router-link
      :to="{ name: 'articleedit', params: { slug: slug } }"
      class="btn-9 update"
    >
      Update
    </router-link>
    <button class="btn-9 delete" @click="deleteArticle">Delete</button>
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
.container .btn-9{
  color: white;
  margin: 25px 30px;
}
.container .update{
  background: green;
}
.container .delete{
  background: red;
}
</style>