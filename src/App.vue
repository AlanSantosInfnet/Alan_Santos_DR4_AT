<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">HOME</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/list" class="nav-link">LISTA</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">CADASTRAR</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <h2>LISTA DE LIVROS</h2>
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: "app"
  };
</script>

<style scoped>
  .container h2 {
    text-align: center;
    margin: 25px auto;
    font-size: 3em;
    font-weight: bolder;
    color: #FFD700;
    text-shadow: black 0.1em 0.1em 0.2em;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  li {
    font-weight: bolder;
  }
</style>
