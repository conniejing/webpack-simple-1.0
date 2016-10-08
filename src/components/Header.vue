<template>
    <header class="main-header">
        <a href="javascript:void(0)" class="sidebar-toggle" data-toggle="offcanvas" role="button"></a>
        <a v-link="{ name: 'index' }" class="logo">云蜂车共享客户版  <span v-text="user"></span></a>
    </header>
</template>

<script>
    export default{
        data () {
           return {
                user: "connie"
            }
        }
    }
</script>