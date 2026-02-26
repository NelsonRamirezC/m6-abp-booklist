<template>
    <div>
        <HeaderComp>Listado de libros</HeaderComp>

        <main class="container">

            <div class="row g-2" v-if="booksStore.books">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="book in booksStore.books" :book.id>
                    <CardBookComp :book/>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import CardBookComp from '@/components/CardBookComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';

import { useBooksStore } from '@/stores/books.store';

const booksStore = useBooksStore();


</script>

<style lang="css" scoped>

</style>