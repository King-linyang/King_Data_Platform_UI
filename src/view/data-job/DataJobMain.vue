<template>
    数据任务管理主题-->用户ID:&nbsp&nbsp{{ userRoute.params.id }}
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';


const userRoute = useRoute()

</script>

<style scoped>

</style>
