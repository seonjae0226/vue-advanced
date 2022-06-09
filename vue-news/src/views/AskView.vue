<template>
    <div>
        <ul class="ask-list">
            <li v-for="item in fetchedAsk" v-bind:key="item.id" class="post">
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <div>
                    <p class="ask-title">
                        <router-link v-bind:to="`/item/${item.id}`">
                            {{ item.title }}
                        </router-link>
                    </p>
                    <small class="link-text"> 
                        {{ item.time_ago }} by 
                        <router-link :to="`/user/${item.user}`" class="link-text-name">{{ item.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul>
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
.ask-list{
    margin: 0;
    padding: 0;
}
.post{
   display: flex;
   list-style: none;
   align-items: center;
   border-bottom: 1px solid #ccc;
}
.points{
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.ask-title{
    margin: 0;
}
.link-text{
    color: #828282;
}
.link-text-name{
    color: #828282;
    text-decoration: underline;
}
</style>