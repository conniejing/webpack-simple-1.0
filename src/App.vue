<template>
    <h1>{{ msg }}</h1>
    <a v-link="{ name: 'index' }">index</a>
    <a v-link="{ name: 'hello' }">hello</a>
    <a v-link="{ name: 'list' }">list</a>
    <a v-link="{ name: 'other' }">other</a>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Index!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
