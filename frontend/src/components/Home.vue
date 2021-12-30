<template>
  <!-- <div class="container mt-4">
    <div v-for="article in articles" :key="article.pk">
      <p class="mb-0">
        Author:
        <span class="badge bg-primary">
          {{ article.author }}
        </span>
      </p>
      <h3>
        <router-link
          class="link-style" :to="{ name: 'details', params: { slug: article.slug } }">
          {{ article.title }}
        </router-link>
      </h3>
      <hr />
    </div>
  </div> -->
  <div class="wrapper">
    <div class="temp" v-for="article in articles" :key="article.pk">
      <div class="blog_post">
        <h2>{{ article.created_at }}</h2>
        <h1>{{ article.title }}</h1>
        <h5> Author: <span class="badge bg-primary">{{ article.author }}</span></h5>
        <div class="wrapper-button">
          <a class="btn_primary">
            <router-link
              :to="{ name: 'details', params: { slug: article.slug } }"
            >
              Read More
            </router-link>
          </a>
        </div>
      </div>
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
.wrapper {
  height: 100%;
  width: 100%;
  height: 100vh;
}

.temp {
  position: relative;
  display: inline-block;
}

.blog_post {
  margin: 10px 5px;
  /* padding: 6rem 6rem 6rem 6rem; */
  background: #fff;
  width: 508px;
  height: 355px;
  border-radius: 10px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
}

.blog_post h2 {
  position: absolute;
  top: 5%;
  width: 80%;
  margin: auto 10%;
  color: #999;
  font-size: 1.25rem;
}

.blog_post h1 {
  position: absolute;
  top: 20%;
  width: 80%;
  margin: auto 10%;
  /* margin: 0 0 2rem 0; */
  font-size: 2.5rem;
  letter-spacing: 0.5px;
  color: #333;
}

.blog_post h5 {
  position: absolute;
  top: 80%;
  margin-left: 260px;
  font-size: 1.5rem;
  color: #333;
}

.wrapper-button {
  position: absolute;
  top: 80%;
  margin: 0px 120px 0px 50px;
}

.wrapper-button a {
  color: white;
}


.btn_primary {
  border: none;
  outline: none;
  background: linear-gradient(90deg, #227aa7, #085d68);
  padding: 1rem 1rem;
  border-radius: 50px;
  font-size: 1.2rem;
  box-shadow: 1px 5px 10px #042738;
  transition: all 0.2s ease-in;
}

.btn_primary:hover {
  box-shadow: 0px 3px 0.5rem #042738;
}
</style>