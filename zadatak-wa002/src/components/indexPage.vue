<template>
    <div class="mt-16 md:mt-44">
        <div class="text-2xl">Enter your name and hit enter :)</div>
        <div class="p-4">
            <input
                class="border-black border rounded-xl p-2"
                type=""
                placeholder="Matej Doe"
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
        <table class="table-auto mx-auto border-solid border-2 w-2/3">
            <thead>
                <tr
                    class="border-b-2 border-slate-300 text-[20px] font-bold bg-slate-200"
                >
                    <th>Name</th>
                    <th>Country</th>
                    <th>C-Probability</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>G-Probability</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b-2">
                    <td>
                        <div v-for="name in 1" :key="name">
                            {{ secondData.name }}
                        </div>
                    </td>
                    <td>
                        <div v-for="item in firstData.country" :key="item.id">
                            {{ item.country_id }}
                        </div>
                    </td>
                    <td>
                        <div v-for="item in firstData.country" :key="item.id">
                            {{ item.probability }}
                        </div>
                    </td>
                    <td>
                        <div v-for="age in 1" :key="age">
                            {{ thirdData.age }}
                        </div>
                    </td>
                    <td>
                        <div v-for="gender in 1" :key="gender">
                            {{ secondData.gender }}
                        </div>
                    </td>
                    <td>
                        <div v-for="probability in 1" :key="probability">
                            {{ secondData.probability }}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- <div v-for="item of data.country" :key="item.country_id">
            {{ item.country_id }}
            {{ item.probability }} <br />
            {{ item }}
        </div> -->
        <br />
    </div>
</template>

<script>
import axios from 'axios'
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
            firstData: [],
            secondData: [],
            thirdData: [],
        }
    },
    methods: {
        async getFetch() {
            if (this.inputName == '') {
                alert('I cant get data with blank textfield!')
                return
            } else {
                let urlOne = `https://api.nationalize.io/?name=${this.inputName}`
                let urlTwo = `https://api.genderize.io/?name=${this.inputName}`
                let urlThree = `https://api.agify.io/?name=${this.inputName}`
                const reqOne = axios.get(urlOne)
                const reqTwo = axios.get(urlTwo)
                const reqThree = axios.get(urlThree)

                await axios.all([reqOne, reqTwo, reqThree]).then(
                    axios.spread((...res) => {
                        this.firstData = res[0].data
                        this.secondData = res[1].data
                        this.thirdData = res[2].data
                    })
                )
            }
        },
    },
}
</script>
