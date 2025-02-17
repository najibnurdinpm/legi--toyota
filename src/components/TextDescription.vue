<script setup>
const props = defineProps({
    description:{
        type: String,
        default: '',
    },
});
</script>

<template lang="">
    <p class="mx-auto mt-6 text-xl text-gray-600">{{ description }}</p>
</template>