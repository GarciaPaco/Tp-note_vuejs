<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <header>

      <nav>
        <RouterLink to="/">EPISODES</RouterLink>
        <RouterLink to="/location">LOCATION</RouterLink>
      </nav>
    </header>

    <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f1f1;
  padding: 1rem;
    margin-bottom: 1rem;
}

nav a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
nav a:hover {
  color: red;
}


</style>
