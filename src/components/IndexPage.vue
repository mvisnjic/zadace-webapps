<template>
    <h1>Hello world</h1>
    <p>kwdok</p>
</template>

<script>
import axios from 'axios'

axios
    .get('https://api.github.com/repos/vuejs/vue/commits')
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.error(error)
    })
</script>
