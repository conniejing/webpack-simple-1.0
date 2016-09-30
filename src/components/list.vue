<script>
    export default{
        data () {
            return {
                peoples:[{
                    name: "小红",
                    age:20
                }, {
                    name: "张三",
                    age: 12
                }, {
                    name: "三五",
                    age: 78
                },  {
                    name: "阿文",
                    age: 22
                }, {
                    name: "李六",
                    age: 78
                }, ],
                birthday: null
            }
        },
        route: {
            data: function(transition){
                transition.next();
            },
            activate: function(transition){
                transition.next();
            }
        }
    }
</script>
<template>
    <h1>H1</h1>
<ul>
    <li v-for="person in peoples">
        {{person.name}} : {{person.age}}
    </li>
</ul>
</template>
<style scoped>
li{
    height: 30px;
    line-height: 30px;
    list-style: none;
}
h1 {
    color: blue;
}
</style>