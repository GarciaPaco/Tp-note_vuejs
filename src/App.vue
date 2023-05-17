<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <header>

      <nav>
        <RouterLink to="/">Episodes</RouterLink>
        <RouterLink to="/location">Location</RouterLink>
      </nav>
    </header>

    <RouterView />
</template>

<style scoped>

</style>
