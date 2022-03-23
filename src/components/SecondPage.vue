<template>
    <div class="mx-7 lg:mx-72">
        <div>
            <button
                @click="goBack"
                class="rounded-full bg-black text-white p-2 mb-8"
            >
                Go back
            </button>
        </div>
        <div class="card grid justify-items-center">
            <img :src="image" alt="avatar" class="max-h-[150px]" />
            {{ name }} <br />
            {{ email }} <br />
            {{ date }} <br />
            {{ date }} <br />
            {{ msg }} <br />
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'details',
    props: ['id', 'name', 'email', 'date', 'msg', 'image'],
    methods: {
        goBack() {
            return this.$router.replace('/')
        },
    },
}
</script>
