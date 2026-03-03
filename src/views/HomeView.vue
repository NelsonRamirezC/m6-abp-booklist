<template>
  <div>

    <HeaderComp>Conoce nuestros libros</HeaderComp>7

    <main class="container">

      <section>
        <h2 class="text-center">Novelas</h2>

        <GridBooksComp :books="booksStore.filterBooksByCategory('Novela')" />

      </section>
      <hr>
      <section>
        <h2 class="text-center">Poesía</h2>

        <GridBooksComp :books="booksStore.filterBooksByCategory('Poesía')" />

      </section>

    </main>

  </div>
</template>

<script setup>
import GridBooksComp from '@/components/GridBooksComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import { useBooksStore } from '@/stores/books.store';
const booksStore = useBooksStore();


</script>

<style lang="css" scoped></style>