<template>
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>

    <div v-else-if="data">
        <div
            v-for="book in data"
            :key="book.id"
            :authors="book.authors[0]"
            :isbn="book.isbn"
            :numPages="book.numberOfPages"
            :publisher="book.publisher"
            :country="book.country"
            class="mb-12 w-[300px] mx-auto"
        >
            <router-link
                :to="{
                    name: 'details',
                    params: {
                        name: book.name,
                        authors: book.authors[0],
                        isbn: book.isbn,
                        numPages: book.numberOfPages,
                        publisher: book.publisher,
                        country: book.country,
                        characters: book.characters.length,
                    },
                }"
            >
                <div class="card cursor-pointer text-black">
                    Name: {{ book.name }} <br />
                    Released: {{ book.released }} <br />
                    Author: {{ book.authors[0] }} <br />
                </div>
            </router-link>
        </div>
    </div>

    <div v-else>Fetching data, Please wait...</div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
const data = ref(null)
const error = ref(null)
axios
    .get('http://localhost:3001/knjige')
    .then((res) => {
        console.log(res.data)
        data.value = res.data
    })
    .catch((e) => (error.value = e))
</script>

<script>
export default {
    name: 'indexScreen',
    data() {
        return {
            data: [],
        }
    },
}
</script>