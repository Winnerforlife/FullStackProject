<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">BlogApp</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="button home" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="button create" to="/create"
              >Create Article</router-link
            >
          </li>
          <li class="nav-item">
            <a class="button logout" href="/accounts/logout/">Logout</a>
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
a {
  text-decoration: none;
}
.nav-item {
  margin: 5px;
}
.button {
  background-color: #fff;
  border: 2px solid #01699c;
  border-radius: 30px;
  box-shadow: #042738 4px 4px 0 0;
  color: #042738;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.home:hover {
  background-color: rgb(91, 222, 255);
}
.create:hover {
  background-color: rgb(74, 255, 89);
}
.logout:hover {
  background-color: rgb(255, 81, 81);
}

.button:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button {
    min-width: 120px;
    padding: 0 25px;
  }
}

</style>