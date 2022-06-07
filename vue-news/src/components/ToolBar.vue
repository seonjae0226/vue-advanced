<template>
    <div class="header">
        <router-link to="/news">News</router-link> &nbsp;|&nbsp;
        <router-link to="/ask">Ask</router-link> &nbsp;|&nbsp;
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header{
        color: white;
        background-color: #42b883;
        display: flex;
        padding: 10px;
    }
    .header .router-link-exact-active{
        color: #f7c775;
    }
    .header a{
        color: white;
    }
</style>