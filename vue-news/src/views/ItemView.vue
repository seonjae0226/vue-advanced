<template>
    <div>
        <section>
            <user-profile :info="fetchedItem">
                <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
                <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                    {{ fetchedItem.user }}
                </router-link>
                <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
            </user-profile>
        </section>
        <section>
            <h2 class="title">
                {{ fetchedItem.title }}
            </h2>
        </section>
        <section>
            <div v-html="fetchedItem.content" class="content">
            </div>
        </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
    components: {
        UserProfile
    },
    computed: {
        ...mapGetters([
            'fetchedItem'
        ])
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>
<style scoped>
.user-container{
    display: flex;
    align-items: center;
    padding: 0.6rem;
}
.fa-user{
    font-size: 2rem;
}
.user-description{
    padding-left: 8px;
}
.time{
    font-size: 0.7rem;
}
.title{
    padding: 0rem 1rem 0rem 1rem;
    font-size: 1.2rem;
    color:rgb(248, 176, 94);
}
.content{
    padding: 0.8rem;
    background-color: #f9fcec;
}    
</style>