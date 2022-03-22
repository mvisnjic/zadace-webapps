/* eslint-disable vue/multi-word-component-names */ /* eslint-disable
vue/multi-word-component-names */
<template>
    <div>
        <div class="">
            <button
                @click="goBack"
                class="rounded-full bg-black text-white p-2"
            >
                Go back
            </button>
        </div>
        {{ id }} <br />
        {{ name }} <br />
        {{ email }} <br />
        {{ date }} <br />
        {{ date }} <br />
        {{ msg }} <br />
        {{ image }} <br />
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
