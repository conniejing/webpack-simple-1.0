<script>
    // require("../css/other.css");
    
    require("../vendors/jquery/datepicker/bootstrap-datepicker.js");
    require("../vendors/jquery/datepicker/datepicker3.css");

    export default{
        data () {
            return {
                msg: 'other vue',
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
        },
        ready(){   
            // console.log($);         
            $('.datepicker').datepicker({
                format: "yyyy-mm-dd",
                language: "zh-CN",
                todayBtn: 'linked',
                autoclose:true
            });
            $.ajax({
                url: "/mock/users/login?userName=admin&pwd=123456",
                method: 'GET',
                dataType: "json",
                async: true,
                contentType: "application/json; charset=utf-8"
            }).fail(function(data){
                console.warn(data);
            }).done(function(data){
                console.log(data);
            });
        }
    }
</script>
<template>
<ul>
    <p>AAAAA</p>
    <h1>{{msg}}</h1>
    <h2>生日：{{birthday}}</h2>
    <input class="datepicker" type="text" v-model="birthday" />
</ul>
</template>
<style scoped>
li{
    height: 30px;
    line-height: 30px;
    list-style: none;
}

h1 {
    color: red;
}
</style>