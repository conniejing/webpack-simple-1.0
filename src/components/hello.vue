<style scoped>
    div{ text-shadow: 1px 1px 10px #000; }
</style>

<template>
    <div>
        <h1>{{hello}}</h1>
    </div>
    <my-header></my-header>
</template>

<script>
    import MyHeader from './Header.vue';
    export default{
        data () {
           return {
                hello:"这里是嵌套路由！"
            }
        },
        components: {
            MyHeader
        }
    }
</script>
