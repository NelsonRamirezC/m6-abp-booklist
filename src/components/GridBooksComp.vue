<template>
    <div>
        <div class="row g-2" v-if="books">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="book in books" :book.id>
                <CardBookComp :book />
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import CardBookComp from './CardBookComp.vue';

defineProps(["books"]);

</script>

<style lang="scss" scoped></style>