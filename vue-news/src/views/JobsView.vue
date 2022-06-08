<template>
    <div class="main">
        <p v-for="job in this.$store.state.jobs" v-bind:key="job.id">
            <a :href="job.url">{{ job.title }}</a>
            <small><br v-html="br"> {{ job.time_ago }} <br v-html="br"> {{ job.domain }}</small>
        </p>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style scoped>
    .main{
        padding: 15px;
    }
</style>