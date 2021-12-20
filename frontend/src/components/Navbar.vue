<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">BlogApp</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="btn btn-primary" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-success" to="/create">Create Article</router-link>
          </li>
          <li class="nav-item">
            <a class="btn btn-outline-danger" href="/accounts/logout/">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>