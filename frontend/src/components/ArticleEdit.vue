<template>
  <div class="container mt-4">
    <form @submit.prevent="updateArticle">
      <input
        type="text"
        class="form-control"
        placeholder="Please Enter Your Title"
        v-model="title"
      />
      <br />

      <textarea
        rows="8"
        placeholder="Please Enter Article Body"
        class="form-control"
        v-model="body"
      >
      </textarea>
      <button class="btn-9 upd">Update Article</button>
    </form>
    <div
      v-if="error"
      class="alert"
      role="alert"
    >
      <strong>{{ error }}</strong>
    </div>
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

  data() {
    return {
      title: null,
      body: null,
      error: null,
    };
  },

  methods: {
    updateArticle() {
      if (!this.title || !this.body) {
        this.error = "Please add all fields";
      } else {
        fetch(`/api/articles/${this.slug}/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFTOKEN": csrftoken,
          },
          body: JSON.stringify({ title: this.title, body: this.body }),
        })
          .then((response) => response.json())
          .then(() => {
            this.$router.push("/");
          })
          .catch((error) => console.log(error));
      }
    },
  },

  beforeRouteEnter(to, from, next) {
    if (to.params.slug !== undefined) {
      fetch(`/api/articles/${to.params.slug}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFTOKEN": csrftoken,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          return next((vm) => ((vm.title = data.title), (vm.body = data.body)));
        });
    } else {
      return next();
    }
  },
};
</script>

<style>
.container .upd{
  background: green;
}
</style>