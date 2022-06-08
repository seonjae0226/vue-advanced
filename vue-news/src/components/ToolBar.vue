<template>

    <div class="header">
        <div>
            <i class="fa-brands fa-neos">ews</i>
        </div>
        <div class="menu">
            <router-link to="/news">News</router-link> &nbsp;|&nbsp;
            <router-link to="/ask">Ask</router-link> &nbsp;|&nbsp;
            <router-link to="/jobs">Jobs</router-link>
        </div>
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
    .fa-neos{
        line-height: inherit;
    }
    .menu{
        margin-left: auto;
    }
</style>