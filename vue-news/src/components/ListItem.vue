<template>
    <div>
        <ul class="news-list">
            <li v-for="item in listItems" v-bind:key="item.id" class="post">
                <!--포인트영역-->
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <!--기타 정보 영역-->
                <div>
                    <!-- 타이틀 영역 -->
                    <p class="news-title">
                        <template v-if="item.domain">
                            <a v-bind:href="item.url">
                            {{ item.title }}
                            </a>
                        </template>
                        <template v-else>
                            <router-link v-bind:to="`/item/${item.id}`">
                            {{ item.title }}
                            </router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text-name">{{ item.user }}</router-link>
                        <a v-else :href="item.url" class="link-text-name">{{ item.domain }}</a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    computed: {
        // eslint-disable-next-line vue/return-in-computed-property
        listItems() {
            return this.$store.state.list;
            // const name = this.$route.name;

            // if(name === 'news'){
            //     return this.$store.state.news;
            // } else if(name === 'ask'){
            //     return this.$store.state.ask;
            // } else if(name === 'jobs'){
            //     return this.$store.state.jobs;
            // }
        }
    }
}
</script>
<style>
.news-list {
    margin: 0;
    padding: 0;
}
.post{
    list-style: none;
    display: flex;
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
.news-title{
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