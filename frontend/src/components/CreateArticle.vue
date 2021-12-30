<template>
  <div class="container mt-4">
    <form @submit.prevent="insertArticle">
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
      <button class="btn-9">Publish Article</button>
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
  data() {
    return {
      title: null,
      body: null,
      error: null,
    };
  },
  methods: {
    insertArticle() {
      if (!this.title || !this.body) {
        this.error = "Please add all fields";
      } else {
        fetch("api/articles/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFTOKEN": csrftoken,
          },
          body: JSON.stringify({ title: this.title, body: this.body }),
        })
          .then((response) => response.json())
          .then(() => {
            this.$router.push({
              name: "home",
            });
          })
          .catch((error) => console.log(error));
      }
    },
  },
};
</script>

<style>
  .container input{
    margin-top: 50px;
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  }
  .container textarea{
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
    margin-bottom: 50px;
  }
</style>