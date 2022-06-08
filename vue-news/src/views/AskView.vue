<template>
    <div class="main">
        <p v-for="item in fetchedAsk" v-bind:key="item.id">
            <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
            <small> <br v-html="br"> {{ item.time_ago }} <br v-html="br"> {{ item.user }}</small>
        </p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'fetchedAsk'
        ])
    },
    created(){
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>
<style scoped>
    .main{
        padding: 15px;
    }
</style>