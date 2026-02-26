<template>
    <div>
        <HeaderComp>CRUD LIBROS</HeaderComp>

        <main class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, index) in booksStore.books" :key="book.id">
                        <th scope="row">{{ index +1 }}</th>
                        <td>{{ book.title }}</td>
                        <td>
                            <img :src="book.image" :alt="book.title" width="50">
                        </td>
                        <td>{{ book.author }}</td>
                        <td>{{ book.category }}</td>
                        <td>{{ book.price.toLocaleString("es-CL") }}</td>
                        <td>
                            <button class="btn btn-warning mx-1">Actualizar</button>
                            <button class="btn btn-danger mx-1">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    </div>
</template>

<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import { useBooksStore } from '@/stores/books.store';

const booksStore = useBooksStore();


</script>

<style lang="css" scoped>

th, td {
    align-content: center;
}
</style>