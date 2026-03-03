<template>
    <div>
        <HeaderComp>CRUD LIBROS</HeaderComp>

        <main class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-5">
                    <form @submit.prevent="addOrEditBook">
                        <div class="mb-3">
                            <label class="form-label">Titulo:</label>
                            <input class="form-control" type="text" required v-model="bookForm.title">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Imagen:</label>
                            <input class="form-control" type="url" required v-model="bookForm.image">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Autor:</label>
                            <input class="form-control" type="text" required v-model="bookForm.author">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Categoría:</label>
                            <select class="form-control" required v-model="bookForm.category">
                                <option value="">Seleccione una categoría</option>
                                <option :value="category" v-for="(category, index) in booksStore.categories"
                                    :key="index">{{ category }}</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Precio:</label>
                            <input class="form-control" type="number" min="0" required v-model="bookForm.price">
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary" v-if="!editMode">Crear</button>
                            <button type="submit" class="btn btn-warning" v-if="editMode">Editar</button>
                            <button class="btn btn-secondary ms-1" @click="resetBookForm">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
            <hr>
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
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ book.title }}</td>
                        <td>
                            <img :src="book.image" :alt="book.title" width="50">
                        </td>
                        <td>{{ book.author }}</td>
                        <td>{{ book.category }}</td>
                        <td>{{ book.price.toLocaleString("es-CL") }}</td>
                        <td>
                            <button class="btn btn-warning mx-1" @click="preEditBook(index)">Editar</button>
                            <button class="btn btn-danger mx-1"
                                @click="deleteBook(book.id, book.title)">Eliminar</button>
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
import { ref } from 'vue';
import Swal from 'sweetalert2';

const booksStore = useBooksStore();

// const idCurrentBook = ref(0);

const bookForm = ref({
    id: '',
    title: '',
    author: '',
    category: '',
    price: 0,
    image: 'https://placehold.co/300x200',
});

const editMode = ref(false);


//MÉTODOS -> ACTIONS

const resetBookForm = () => {
    bookForm.value = {
        id: '',
        title: '',
        author: '',
        category: '',
        price: 0,
        image: 'https://placehold.co/300x200',
    };

    editMode.value = false;
}

const addBook = () => {

    let { title, author, category, price, image } = bookForm.value;

    let respuesta = booksStore.addBook(title, author, category, price, image);

    if (respuesta.success) {

        Swal.fire({
            title: respuesta.success,
            icon: "success",
        });
    }

    resetBookForm();
};

const editBook = () => {
    let { title, author, category, price, image, id } = bookForm.value;

    let originalBook = booksStore.findBook(id);

    Swal.fire({
        title: `Está seguro de editar el libro: ${originalBook.title}`,
        showDenyButton: true,
        confirmButtonText: "Editar",
        denyButtonText: `No editar`
    }).then((result) => {
        if (result.isConfirmed) {
            let respuesta = booksStore.editBook(title, author, category, price, image, id);
            Swal.fire(respuesta.success, "", "success");
        } else if (result.isDenied) {
            Swal.fire("los cambios no han sido guardados.", "", "info");
        }
    }).catch(() => {
        Swal.fire({
            icon: "error",
            title: "No se pudo crear el libro correctamente.",
            text: "Vuelva a intentar...",
        });
    })

        .finally(() => {
            resetBookForm();
        });
};


const addOrEditBook = () => {
    if (editMode.value) {
        editBook();
    } else {
        addBook();
    }
}

const deleteBook = (id, title) => {
    if (confirm(`Está seguro que desea eliminar el libro: ${title}?`)) {
        let respuesta = booksStore.deleteBook(id);

        if (respuesta.success) {
            alert(respuesta.success);
        } else {
            alert(respuesta.error);
        }
    }
};

const preEditBook = (index) => {
    editMode.value = true;

    let selectedBook = booksStore.books[index];

    bookForm.value = { ...selectedBook }; // operador spread
};

</script>

<style lang="css" scoped>
th,
td {
    align-content: center;
}
</style>