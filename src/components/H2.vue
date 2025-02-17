<script setup>

defineProps({
    value:{
        type: String,
        default:0,
    },
});
</script>

<template lang="">
    <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{value}}</h2>
</template>