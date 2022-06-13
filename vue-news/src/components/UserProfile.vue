<template>
    <div class="user-container">
        <div>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
            <slot name="username"></slot>
            <div class="time">
                <slot name="time"></slot>
            </div>
            <div>
                <slot name="karma"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        info: Object
    },
    // computed: {
    //     userInfo() {
    //         return this.$store.state.user;
    //     }
    // },
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