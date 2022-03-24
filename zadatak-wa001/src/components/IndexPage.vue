<template>
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data">
        <h1 class="font-bold text-xl">Fetched SHA</h1>
        <div class="mt-4">
            <div
                v-for="item in data"
                :key="item.id"
                :sha="item.sha"
                :image="item.author.avatar_url"
                :name="item.commit.author.name"
                :email="item.commit.committer.email"
                :date="item.commit.committer.date"
                :msg="item.commit.message"
                class="mb-4 lg:mx-76 md:mx-40"
            >
                <router-link
                    :to="{
                        name: 'details',
                        params: {
                            id: item.sha,
                            name: item.commit.author.name,
                            email: item.commit.committer.email,
                            image: item.author.avatar_url,
                            date: item.commit.committer.date,
                            msg: item.commit.message,
                        },
                    }"
                >
                    <pre class="card cursor-pointer">{{ item.sha }}</pre>
                </router-link>
            </div>
        </div>
    </div>
    <div v-else>Loading...</div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const data = ref(null)
const error = ref(null)

axios
    .get('https://api.github.com/repos/vuejs/vue/commits')
    .then((res) => {
        data.value = res.data
    })
    .catch((e) => (error.value = e))
</script>

<script>
export default {
    name: 'indexPage',
    data() {
        return {
            data: [],
        }
    },
}
</script>
