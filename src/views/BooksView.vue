<template>
    <div>
        <HeaderComp>Listado de libros</HeaderComp>

        <main class="container">
            <div>
                <p>Filtrar libros por categoría:
                    <select v-model="category">
                        <option value="">Todas las categorías</option>
                        <option :value="category" v-for="(category, index) in booksStore.categoriesInUse" :key="index">
                            {{ category }}</option>
                    </select>
                </p>
                <p>Cantidad de libros encontrados: {{ filterBooks.length }}</p>
            </div>

            <div class="row g-2" v-if="filterBooks">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="book in filterBooks" :book.id>
                    <CardBookComp :book />
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import CardBookComp from '@/components/CardBookComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';

import { useBooksStore } from '@/stores/books.store';
import { ref, computed } from 'vue';

const booksStore = useBooksStore();

const category = ref("");


const filterBooks = computed(() => {

    if (category.value) {
        return booksStore.books.filter(book => book.category == category.value);
    } else {
        return booksStore.books;
    }

})


</script>

<style lang="css" scoped></style>