<template>
    <div class="mt-16 md:mt-44">
        <div class="text-2xl">Enter your name and hit enter :)</div>
        <div class="p-4">
            <input
                class="border-black border rounded-xl p-2"
                type=""
                placeholder="Enter name..."
                v-model="inputName"
                v-on:keyup.enter="getFetch"
            />
        </div>
        <div>
            <button
                class="bg-gray-400 text-white p-3 rounded-full tracking-wider hover:bg-gray-700"
                @click="getFetch"
                type="button"
            >
                Send requests
            </button>
        </div>

        <br />
        <!-- <router-link to="/">Yourviewname</router-link> -->
    </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

const data = ref(null)
const error = ref(null)

// let data = []
export default {
    name: 'indexPage',
    setup() {
        const inputName = ''
        return {
            inputName,
        }
    },
    data() {
        return {
            data: [],
        }
    },
    methods: {
        getFetch() {
            if (this.inputName == '') {
                alert('I cant get data with blank textfield!')
                return
            } else {
                let urlOne = `https://api.nationalize.io/?name=${this.inputName}`
                let urlTwo = `https://api.genderize.io/?name=${this.inputName}`
                let urlThree = `https://api.agify.io/?name=${this.inputName}`
                console.log(this.inputName)

                axios
                    .get(urlOne)
                    .then((res) => {
                        console.log(res.data)
                        data.value = res.data
                    })
                    .catch((e) => {
                        error.value = e
                    })
            }
        },
    },
}
</script>
