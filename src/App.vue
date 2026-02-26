<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="">BookList SPA</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <RouterLink to="/" class="nav-link">Inicio</RouterLink>
          <RouterLink to="/books" class="nav-link">Libros</RouterLink>

          <RouterLink to="/admin/books" class="nav-link">CRUD Libros</RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <RouterView />

</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>


<style scoped lang="css"></style>
