<template>
    <div class="main">
        <p v-for="item in this.$store.state.news" v-bind:key="item.id">
            <a v-bind:href="item.url">{{ item.title }}</a>
            <small><br v-html="br"> 
                {{ item.time_ago }} <br v-html="br"> 
                <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
        </p>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style scoped>
    .main{
        padding: 15px;
    }
</style>