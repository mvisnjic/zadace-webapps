<template>
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data">
        <h1 class="font-bold text-xl">Fetched SHA</h1>
        <div class="mt-4">
            <div
                v-for="data in data"
                :key="data.sha"
                @click="clickMethod"
                class="mb-4 lg:mx-76 md:mx-40"
            >
                <pre class="card cursor-pointer">{{ data.sha }}</pre>
            </div>
        </div>
    </div>
    <div v-else>Loading...</div>
</template>

<script setup>
import { ref } from 'vue'

const data = ref(null)
const error = ref(null)

fetch('https://api.github.com/repos/vuejs/vue/commits')
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((e) => (error.value = e))
</script>

<script>
export default {
    name: 'indexPage',
    methods: {
        clickMethod() {
            this.$router.push('details')
        },
    },
}
</script>
