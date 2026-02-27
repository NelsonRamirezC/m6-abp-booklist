import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useBooksStore = defineStore('books', () => {
  //ESTADOS

  const categories = ref([
    'Novela',
    'Poesía',
    'Ciencia ficción',
    'Filosofía',
    'Cuentos',
    'Ensayo',
    'Historia',
    'Autoayuda',
    'Infantil',
    'Juvenil',
    'Terror',
    'Misterio',
    'Romance',
    'Biografía',
    'Teatro',
  ])

  const books = ref([
    {
      id: 1,
      title: 'Cien años de soledad',
      author: 'Gabriel García Márquez',
      category: 'Novela',
      price: 8500,
      image: 'https://placehold.co/300x200',
    },
    {
      id: 2,
      title: 'El amor en los tiempos del cólera',
      author: 'Gabriel García Márquez',
      category: 'Novela',
      price: 9200,
      image: 'https://placehold.co/300x200',
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      category: 'Ciencia ficción',
      price: 7800,
      image: 'https://placehold.co/300x200',
    },
    {
      id: 4,
      title: 'Rayuela',
      author: 'Julio Cortázar',
      category: 'Novela',
      price: 11000,
      image: 'https://placehold.co/300x200',
    },
    {
      id: 5,
      title: 'El túnel',
      author: 'Ernesto Sabato',
      category: 'Novela',
      price: 6900,
      image: 'https://placehold.co/300x200',
    },
    {
      id: 6,
      title: 'Poemas humanos',
      author: 'César Vallejo',
      category: 'Poesía',
      price: 5200,
      image: 'https://placehold.co/300x200',
    },
    {
      id: 7,
      title: 'La casa de los espíritus',
      author: 'Isabel Allende',
      category: 'Novela',
      price: 9800,
      image: 'https://placehold.co/300x200',
    },
    {
      id: 8,
      title: 'El extranjero',
      author: 'Albert Camus',
      category: 'Filosofía',
      price: 6100,
      image: 'https://placehold.co/300x200',
    },
    {
      id: 9,
      title: 'Ficciones',
      author: 'Jorge Luis Borges',
      category: 'Cuentos',
      price: 7400,
      image: 'https://placehold.co/300x200',
    },
    {
      id: 10,
      title: 'Veinte poemas de amor',
      author: 'Pablo Neruda',
      category: 'Poesía',
      price: 4800,
      image: 'https://placehold.co/300x200',
    },
  ])

  //GETTERS
  const quantityBooks = computed(() => books.value.length)
  const quantityCategories = computed(() => categories.value.length)

  // ACTIONS -> MÉTODOS
  function addBook(title, author, category, price, image) {
    let id = uuidv4()

    let newBook = { id, title, author, category, price, image }

    books.value.push(newBook)

    return { success: 'Libro creado con éxito.' }
  }

  return { categories, books, quantityBooks, quantityCategories, addBook }
})
