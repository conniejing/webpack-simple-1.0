<template>
    <h2>test</h2>
    <p>{{msg}}</p>
</template>

<script>
    import other from './other.vue'
    export default{
        data () {
           return {
                msg: "test"
            }
        }
    }
</script>