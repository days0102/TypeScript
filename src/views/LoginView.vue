<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  onServerPrefetch,
  onScopeDispose,
  onRenderTracked,
  onRenderTriggered,
  reactive,
  watch,
  ref
} from "vue";
import { message } from "ant-design-vue";
import router from "@/router";


export default defineComponent({
  name: "VueComponentSkeleton",
  components: {},

  props: { title: { type: String, default: "" } },

  computed: {
    // 计算属性
  },
  watch: {
    // 数据监听
  },
  setup() {
    // console.log("setup");
    // onRenderTracked((e) => {
    //   // onRenderTracked函数——状态追踪
    //   // 它会追踪页面上**所有**响应式变量和方法的状态，即我们在setup中return出去的值，
    //   // 一旦页面有更新，他都会进行追踪，然后生成一个event对象，我们通过event对象来查找程序的问题所在
    //   // - key 那边变量发生了变化
    //   // - newValue 更新后变量的值
    //   // - oldValue 更新前变量的值
    //   // - target 目前页面中的响应变量和函数
    //   console.log("onRenderTracked", e);
    // });
    //
    // onRenderTriggered((e) => {
    //   // 它不像onRenderTracked函数，这个函数不会跟踪所有值的变化，而是给你变化值的信息，并
    //   // 且新值和旧值都会给你明确的展示出来
    //   // - key 那边变量发生了变化
    //   // - newValue 更新后变量的值
    //   // - oldValue 更新前变量的值
    //   // - target 目前页面中的响应变量和函数
    //   console.log("onRenderTriggered", e);
    // });
    //
    // onBeforeMount(() => {
    //   // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    //   console.log("onBeforeMount");
    // });
    // onMounted(() => {
    //   console.log("onMounted");
    // });
    // onBeforeUpdate(() => {
    //   // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以
    //   // 在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
    //   console.log("onBeforeUpdate");
    // });
    // onUpdated(() => {
    //   // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
    //   // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
    //   // 然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环
    //   console.log("onUpdated");
    // });
    // onBeforeUnmount(() => {
    //   // 实例销毁之前调用。在这一步，实例仍然完全可用。
    //   console.log("onBeforeUnmount");
    // });
    // onUnmounted(() => {
    //   // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事
    //   // 件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
    //   console.log("onUnmounted");
    // });
    // onActivated(() => {
    //   // 激活<keep-alive>组件时
    //   console.log("onActivated");
    // });
    // onDeactivated(() => {
    //   // 离开<keep-alive>组件时
    //   console.log("onDeactivated");
    // });
    // onErrorCaptured(() => {
    //   // 当捕获一个来自子孙组件的异常时激活钩子函数
    //   console.log("onErrorCaptured");
    // });
    // onServerPrefetch(() => {
    //   console.log("onServerPrefetch");
    // });
    // onScopeDispose(() => {
    //   console.log("onScopeDispose");
    // });

    const counter = ref(0);
    watch(counter, (newValue, oldValue) => {
      if (+newValue !== 6) {
        return;
      }

      console.log("it is 6");
    });

    return reactive({
      greeting: "hello",
      name: "",
      gender: "",
      counter,
      user: "",
      cert: "",
    });
  },

  // beforeCreate() {
  //   // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
  //   console.log("beforeCreate");
  // },

  created() {
    // 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，
    //  属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
    console.log("created");
  },

  methods: {

    login() {
      // @ts-ignore
      console.log(this.$root.loginFlag)
      let url = "/api/login";

      fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        redirect: "follow",
        body: JSON.stringify({
          user: this.user,
          cert: this.cert
        })
      })
        .then((result) => {
          console.log(result);
          return result.json();
        })
        .then((result) => {
          if (!result) {
            message.error("null response");
            return;
          }
          if (result.status !== 0) {
            message.error(result.msg);
            return;
          }
          //console.log(result)
          message.success(result.msg);
          // @ts-ignore
          this.$root.loginFlag=true
          // @ts-ignore
          this.$root.avatar=result.user.avatar
          // @ts-ignore
          this.$root.account=this.user
          // @ts-ignore
          console.log(this.$root.loginFlag)
          this.$router.push('/home')
        })
        .catch((err) => {
          console.log(err);
          message.error(err);
        });
    },
    goto(url: any) {
      router.push(url);
    }
  }
});
</script>

<template>
  <div class="app-entry login-main">
    <div class="login">
      <div class="field">
        <a-input
          v-model:value="user"
          class="username"
          placeholder="请输入用户名"
        ></a-input>
      </div>
      <div class="field">
        <a-input
          type="password"
          v-model:value="cert"
          class="password"
          placeholder="请输入口令"
        ></a-input>
      </div>
      <div class="btn-wrapper">
        <a-button @click="login" class="btn-login" type="primary">登录</a-button>
        <router-link to="/register">
          <a-button @click="goto('/register')" class="btn-register" type="primary">注册</a-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app-entry {
  .login {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding-top: 6em;

    .field {
      border: 2px;
      padding: 0.5em;

      .username,
      .password {
        width: 16em;
      }
    }

    .btn-wrapper {
      .btn-login {
        width: 8em;
        margin-top: 0.5em;
        border-radius: 30px;
      }

      .btn-register {
        width: 8em;
        margin-left: 0.5em;
        margin-top: 0.5em;
        border-radius: 30px;
      }
    }
  }
}
</style>