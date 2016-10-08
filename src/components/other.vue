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
        }
    }
</script>
<template>
<ul>
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