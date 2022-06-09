<template>
    <div>
        <ul class="jobs-list">
            <li v-for="job in this.$store.state.jobs" v-bind:key="job.id" class="post">
                 <div class="points">
                    {{ job.points || 0 }}
                </div>
                <div>
                      <p class="jobs-title">
                          <a :href="job.url">{{ job.title }}</a>
                      </p>
                      <small class="link-text">
                           {{ job.time_ago }} by 
                           <a :href="job.url" class="link-text-name">{{ job.domain }}</a>
                      </small>
                </div>
            </li>
        </ul>
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

.jobs-list{
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
.jobs-title{
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