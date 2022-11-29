<template>
  <div>
    <el-menu router  class="el-menu-demo" mode="horizontal" >
      <el-menu-item  index="/">论坛</el-menu-item>
      <el-menu-item v-if="isAdmin"  index="/add">发表</el-menu-item>
      <el-menu-item v-if="!v_login"  index="/login">登录</el-menu-item>

    </el-menu>
    <div class="line"></div>


  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "BolgHeader",
  data(){
    return{
    }
  },
  computed:{
    ...mapState('loginAbout',['v_login','isAdmin']),
  },


}
</script>

<style scoped>
ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #cccccc;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}

.router-link-active{
  background: rgba(255,255,255,0.8);
  color: #444;
}
</style>