<template>
    <div>
        <div>
            <button
                @click="goBack"
                class="rounded-full bg-black text-white p-2 mb-8"
            >
                Go back
            </button>
        </div>
        <div class="card w-[300px] mx-auto text-black text-justify">
            Authors: {{ authors }} <br />
            ISBN: {{ isbn }} <br />
            NumOfPages: {{ numPages }} <br />
            Publisher: {{ publisher }} <br />
            Country: {{ country }} <br />
            Char length: {{ characters }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'secondScreen',
    props: [
        'authors',
        'isbn',
        'numPages',
        'publisher',
        'country',
        'characters',
    ],
    methods: {
        goBack() {
            this.$router.go(-1)
        },
    },
}
</script>