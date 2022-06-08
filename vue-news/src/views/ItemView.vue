<template>
    <div>
        <section>
            <div class="user-container">
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${fetchedItem.user}`">
                    {{ fetchedItem.user }}
                    </router-link>
                    <div class="time">
                        {{ fetchedItem.time_ago }}
                    </div>
                </div>
            </div>
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

export default {
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