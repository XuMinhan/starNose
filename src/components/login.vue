<template>
  <div class="login-container">

    <el-form @submit.native.prevent :model="form" ref="ruleForm" label-width="35%"
             class="demo-ruleForm"
             style="

                border: 2px solid;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

              background-color:#e8e8e8;:2px solid #bebbbb;  text-align:left; border-radius: 18px;width:70%;
              margin-left: 15% ; height:500px ;margin-top: 50px"
    >
      <h2 style="margin-left: 45% ;padding-top: 120px">登录</h2>

      <el-form-item label="手机号" style="" prop="phone">
        <el-input v-model="form.phone" style="width: auto"></el-input>
      </el-form-item>

      <el-button type="primary" style="margin-left: 5%" @click="sendCode">发送验证码</el-button>


      <el-form-item label="验证码" prop="code">
        <el-input v-model="form.code" style="width: auto"></el-input>
      </el-form-item>
      <el-button type="primary" style="margin-left: 5%" @click="login">登录</el-button>


    </el-form>


  </div>
</template>

<script>


var formData = new FormData();

import {mapMutations} from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "login",

  data() {


    return {
      form: {
        phone: "",
        code: "",
      },

    };
  },
  computed: {},

  methods: {
    ...mapMutations('tokenAbout', {setToken: 'setToken'}),

    sendCode() {
      formData.set('phone', this.form.phone)

      this.$axios({
        method: "post",
        data: formData,
        url: "/user/code",
      }).then((res) => {
        console.log(res.data)
        if (res.data.success == false) {
          window.alert(res.data.errorMsg)
        }
      })
    }
    ,
    login() {
          this.$axios({
            method: "post",
            url: "/user/login",
            data: {
              phone:this.form.phone,
              code:this.form.code
            }
          }).then((res) => {
            //
            console.log(res.data)
            if (res.data.success==false){
              window.alert(res.data.errorMsg)
            }else {
              this.setToken(res.data.data)
              this.$router.push('/operate')

            }
          })
    },
  },
  mounted() {
  },


}

</script>

<style scoped>

</style>