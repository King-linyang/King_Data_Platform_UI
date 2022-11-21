<template>
    <div class="king-data-header king-data-header-common">
        <div class="king-data-header-data king-data-header-common">
            <router-link to="/king-data-solution" style="text-decoration: none;color: black;">King Data</router-link>
        </div>
        <div class="king-data-header-job king-data-header-common">
            <router-link to="/king-job-solution" style="text-decoration: none;color: black;">King Job</router-link>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
    
<style scoped lang='less'>
.king-data-header {
    box-shadow: 0 2px 4px #00000014;
    height: 80px;
    width: calc(100vw - 200px);
    background: skyblue;
    padding: 0 100px;

    .king-data-header-common {
        height: 80px;
        line-height: 80px;
    }

    .king-data-header-data {
        float: left;
        background: gray;
    }

    .king-data-header-job {
        float: left;
        background: yellowgreen;
        margin-left: 20px;
    }
}
</style>