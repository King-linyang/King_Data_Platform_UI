<template>
    <div class="king-header">
        <ul class="king-data-ul">
            <li class="king-data-li">
                <span @click="toDataKing('DataKing', '1')" class="king-default-entry">Data King</span>
            </li>
            <li class="king-data-li">
                <span @click="toDataKing('DataJob', '1')" class="king-default-entry">Data Job</span>
            </li>
        </ul>
    </div>
</template>
    
<script setup lang='ts'>
import router from '@/router';
import { ref, reactive } from 'vue'

const toDataKing = (toPath: string, userId: string) => {
    router.push({
        name: toPath,
        params: {
            id: userId
        }
    })
}

</script>
    
<style scoped lang='less'>
.king-header {
    width: 100%;
    height: 64px;
    background: var(--bg1);
    box-shadow: 0 2px 4px #00000014;
}

.king-header ul {
    padding: 0 64px 0 64px;
}

.king-default-entry {
    margin-right: 30px;
}

.king-default-entry:hover {
    cursor: pointer;
}

.king-data-ul li {
    height: 64px;
    display: inline-block;
    text-align: center;
    line-height: 64px;
}

.king-data-ul a {
    text-decoration: none;
    color: rgb(0, 0, 0);
}
</style>