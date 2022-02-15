<template>
  <div class="register">
    <div class="field">
      <a-input style="border: 5px;"
               v-model:value="user"
               class="username"
               placeholder="请输入用户名" />
      <div>
        <a-input style="border: 5px; margin-top: 10px"
                 v-model:value="cert"
                 class="password"
                 placeholder="请输入密码" />
      </div>
    </div>
    <div>
      <a-button @click="test" type="primary" style="margin-top: 10px; border-radius: 30px">注册</a-button>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,

  reactive,
  watch,
  ref
} from "vue";
import { message } from "ant-design-vue";

export default defineComponent({
  name: "Register",

  setup() {
    console.log("Setup");
    return reactive({
      user: "",
      cert: ""
    });
  },
  methods: {
    test() {
      console.log("test");
      let url = "/api/test";
      fetch(url, {
        method: "POST",
        //JSON.stringify()函数将一个对象或值转换成json字符串
        body: JSON.stringify({
          user: this.user,
          cert: this.cert
        })
      }).then((result)=>{
        console.log(result)
        return result.json()
      }).then((result)=>{
        console.log(result.articles)
      });
    },
    register() {
      //alert("注册");
      let url = "/api/register";
      fetch(url, {
        method: "POST",
        //JSON.stringify()函数将一个对象或值转换成json字符串
        body: JSON.stringify({
          user: this.user,
          cert: this.cert
        })
      })
        .then((result) => {
          //result为一个Response对象
          return result.json();
        })
        .then((result) => {
          if (result.status !== 0) {
            message.warn(result.msg);
            return;
          }
          message.success(result.msg);
        });
    }
  }

});
</script>

<style lang="less" scoped>
.register {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  padding-top: 6em;

  .field {
    margin: 1px;
    padding: 1em;
    //outline: none;

    .username,
    .password {
      width: 16em;
    }
  }
}
</style>
