<template>
    <div>
        <ul class="news-list">
            <li v-for="item in this.$store.state.news" v-bind:key="item.id" class="post">
                <!--포인트영역-->
                <div class="points">
                    {{ item.points }}
                </div>
                <!--기타 정보 영역-->
                <div>
                    <p class="news-title">
                        <a v-bind:href="item.url">
                        {{ item.title }}
                        </a>
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
export default {
    created(){
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style scoped>
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