<template>
    <div class="card w-100 mx-auto">
        <img :src="book.image" class="card-img-top" :alt="book.title">
        <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">Precio: {{ book.price }}</p>
            <p class="card-text">Autor: {{ book.author }}</p>
            <p class="card-text">Categoría: {{ book.category }}</p>
            <RouterLink :to="`/book/${book.id}`" class="btn btn-primary">Ver más</RouterLink>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(["book"])

</script>

<style lang="css" scoped></style>