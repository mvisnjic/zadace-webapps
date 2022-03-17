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
        Coming Soon
    </div>
</template>

<script>
import router from '../router'

export default {
    name: 'SecondPage',
    methods: {
        goBack() {
            router.go(-1)
        },
    },
}
</script>
