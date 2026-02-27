<template>
    <div>
        <HeaderComp>Detalle del producto</HeaderComp>
    </div>

    <main class="container my-5">
        <section v-if="book.id" class="row justify-content-center">
            <div class="col-12 col-lg-10 col-xl-8">
                <div class="card shadow-sm border-0 h-100">
                    <!-- <div class="row g-0"> -->
                        <div class="col-md-5">
                            <img :src="book.image" :alt="book.title"
                                class="img-fluid rounded-start h-100 object-fit-cover" style="height: 400px;">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body d-flex flex-column p-4">
                                <h1 class="card-title h3 mb-3 fw-bold">{{ book.title }}</h1>
                                <p class="text-muted mb-2 fs-6">ID Libro: {{ book.id }}</p>
                                <div class="mb-4">
                                    <span class="display-6 fw-bold text-primary">$ {{ book.price.toLocaleString("es-CL")
                                        }}</span>
                                </div>
                                <p class="text-muted flex-grow-1 mb-4">{{ book.author }} - {{ book.category }}</p>
                                <button class="btn btn-primary btn-lg w-100 mb-2">Agregar al carrito</button>
                                <button class="btn btn-outline-secondary w-100">Añadir a favoritos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import { useBooksStore } from '@/stores/books.store';
import { defineProps, ref, onMounted } from 'vue';

const booksStore = useBooksStore();
const props = defineProps(["id"]);
const book = ref({});

onMounted(() => {
    book.value = booksStore.findBook(props.id);
});
</script>

<style lang="css" scoped>
.object-fit-cover {
    object-fit: cover;
}
</style>
