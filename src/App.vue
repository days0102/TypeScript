<template>
  <div style="background: #ffffff;">
    <div class="left-page">
      <div style="height: 80px; width: 100%; text-align: center">
<!--          <a-avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">-->
<!--            <template #icon>-->
<!--              <AntDesignOutlined />-->
<!--            </template>-->
<!--          </a-avatar>-->

        <div>
          <a-avatar v-if="loginFlag" :size="32" :src="avatar" style="margin-top: 3px">
            <template #icon><AntDesignOutlined /></template>
          </a-avatar>
          <a-image v-else
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0530%252Ff6edf0a2j00qtvxya000cc000hs00ckc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646807044&t=5a7b75520cd219996f97fbbecd60bc05"
            style="height: 80px"></a-image>
        </div>
        <div>
          <p style="margin: 0">{{account}}</p>
        </div>
        <div style="margin-top: 5px;">
          <a-button v-if="loginFlag" danger :size="small" style=";padding:0 8px;border-radius: 8px;font-size: 12px;height: 22px;line-height: 22px" @click="logout">退出</a-button>
        </div>
      </div>
      <div class="menu" style="border-radius: 8px">
<!--        <a-menu-->
<!--          v-model:openKeys="openKeys"-->
<!--          v-model:selectedKeys="selectedKeys"-->
<!--          style="background-color: #f7f8fa; width: 100%"-->
<!--          :mode="mode"-->
<!--          :theme="theme"-->
<!--          :inline-collapsed="collapsed"-->
<!--        >-->

<!--          <a-sub-menu-->
<!--            key="sub1"-->
<!--            style="background-color: #f7f8fa">-->

<!--            <template #icon>-->
<!--              <home-outlined />-->
<!--            </template>-->
<!--            <template #title>站点首页</template>-->
<!--            <a-menu-item key="1" @click="Gohome">学会概况</a-menu-item>-->
<!--            <a-menu-item key="2">站点导航</a-menu-item>-->
<!--          </a-sub-menu>-->
<!--          <a-sub-menu key="sub2">-->
<!--            <template #icon>-->
<!--              <user-add-outlined />-->
<!--            </template>-->
<!--            <template #title>入会申请</template>-->
<!--            <a-menu-item key="3">提交申请</a-menu-item>-->
<!--            <a-menu-item key="4">申请状态</a-menu-item>-->
<!--          </a-sub-menu>-->
<!--          <a-sub-menu key="sub3">-->
<!--            <template #icon>-->
<!--              <book-outlined />-->
<!--            </template>-->
<!--            <template #title>在线学习</template>-->
<!--            <a-menu-item key="5" @click="Readarticle">浏览文章</a-menu-item>-->
<!--            <a-menu-item key="6" @click="CreateArticle">发布文章</a-menu-item>-->
<!--            <a-menu-item key="7" @click="test">发布视频</a-menu-item>-->
<!--            <a-menu-item key="8">内容管理</a-menu-item>-->
<!--          </a-sub-menu>-->
<!--        </a-menu>-->


        <a-menu
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          theme="theme"
          :inline-collapsed="collapsed"
        >
          <a-sub-menu
            key="sub1"
            style="background-color: #f7f8fa">

            <template #icon>
              <home-outlined />
            </template>
            <template #title>站点首页</template>
            <a-menu-item key="1" @click="Gohome">学会概况</a-menu-item>
            <a-menu-item key="2">站点导航</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #icon>
              <user-add-outlined />
            </template>
            <template #title>入会申请</template>
            <a-menu-item key="3">提交申请</a-menu-item>
            <a-menu-item key="4">申请状态</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #icon>
              <book-outlined />
            </template>
            <template #title>在线学习</template>
            <a-menu-item key="5" @click="Readarticle">浏览文章</a-menu-item>
            <a-menu-item key="6" @click="CreateArticle">发布文章</a-menu-item>
            <a-menu-item key="7" @click="test">发布视频</a-menu-item>
            <a-menu-item key="8">内容管理</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </div>
    <div class="right-page">
      <div class="head" style="border-radius: 5px;margin-right: 5px;margin-top: 5px">
        <div style="float: left;padding-left: 8px">
          <h1 class="title" style="color: whitesmoke; font-size: xx-large;letter-spacing: 3px;font-weight: bold">欧美学生会</h1>
        </div>
        <div v-if="loginFlag" style="float: right;margin-right: 10px">
          <a-avatar :size="40" :src="avatar">
<!--            <template #icon><UserOutlined /></template>-->
          </a-avatar>
        </div>
        <div v-else style="float: right">
          <router-link to="/login">
            <a-button style="border-radius: 30px;width: 100px;margin-right: 15px">
              登录/注册
            </a-button>
          </router-link>
        </div>
<!--        <div style="float: right">-->
<!--          <a-input-search-->
<!--            v-model:value="value"-->
<!--            placeholder="input search text"-->
<!--            enter-button-->
<!--            @search="onSearch"-->
<!--            style="padding-top: 25px;padding-right: 15px"-->
<!--          ></a-input-search>-->
<!--        </div>-->
      </div>
      <div class="page">
        <div>
          <router-view v-if="isRouterAlive">

          </router-view>
        </div>
      </div>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<style lang="less" scoped>
.right-page {
  float: right;
  width: 85%;
}

.head {
  line-height: 80px;
  height: 80px;
  //width: 1260px;
  background:black;
}

.title {
  margin-left: 15px;
  width: auto;
}

.page {
  clear: both;
}

.left-page {
  float: left;
  width: 15%;
}

.menu {
  margin-top: 20px;
  width: 95%;
  height: 650px;
  background: #ffffff;
  //clear: both;
}
</style>

<script lang="ts">
// https://www.jianshu.com/p/d3ffec2a3a0b
import { defineComponent, reactive, toRefs, ref, watch } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  SettingOutlined,
  //头像
  AntDesignOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined
} from "@ant-design/icons-vue";
import type { MenuMode, MenuTheme } from "ant-design-vue";
import router from "@/router";

let loginFlag=false
let avatar=""
let account=""

export default defineComponent({
  loginFlag,
  avatar,
  account,
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,

    //头像
    AntDesignOutlined,

    CalendarOutlined,
    SettingOutlined
  },
  setup() {

    const value = ref<string>("");

    const onSearch = (searchValue: string) => {
      console.log("use value", searchValue);
      console.log("or use this.value", value.value);
    };


    // const state = reactive({
    //   mode: "inline" as MenuMode,
    //   theme: "light" as MenuTheme,
    //   selectedKeys: ["1"],
    //   openKeys: ["sub1"]
    // });
    // const changeMode = (checked: boolean) => {
    //   state.mode = checked ? "vertical" : "inline";
    // };
    // const changeTheme = (checked: boolean) => {
    //   state.theme = checked ? "dark" : "light";
    // };

    const state = reactive({
      collapsed: false,
      selectedKeys: [],
      openKeys: [],
      preOpenKeys: [],
    });

    // watch(
    //   () => state.openKeys,
    //   (_val, oldVal) => {
    //     state.preOpenKeys = oldVal;
    //   },
    // );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return {
      value,
      onSearch,
      ...toRefs(state),
      // changeMode,
      // changeTheme,
      toggleCollapsed,
    };
  },
  provide(){
    return{
      reload: this.reload
    }
  },
  created() {
    if(this.screenWidth<1025){
      if(!this.collapsed){
        this.toggleCollapsed()
      }
    }
  },
  data(){
    return{
      loginFlag:false,
      avatar:"",
      account,
      isRouterAlive:true,
      screenWidth:document.body.clientWidth,
      //collapsed:false
    }
  },
  mounted() {

    window.onresize = () => {
      return (() => {
        this.screenWidth= document.body.clientWidth
      })()
    }
  },
  watch:{
    screenWidth(){
      console.log(this.screenWidth)
      if(this.screenWidth<1025){
        //this.collapsed=true
        console.log(this.collapsed)
        if(!this.collapsed)
          this.toggleCollapsed()
        // this.changeMode(false)
      }else{
        if(this.collapsed){
          this.toggleCollapsed()
        }
        //this.collapsed=false
        // this.changeMode(true)
      }
    }
  },
  methods: {
    logout(){
      loginFlag=false
      account=""
      avatar=""
      this.$router.go(0)
    },
    reload(){
      this.isRouterAlive=false
      this.$nextTick(function(){
        this.isRouterAlive=true
      })
    },
    Gohome() {
      console.log(loginFlag)
      router.push("/home");
    },
    Readarticle() {
      router.push("/article");
      //console.log("Hello");
    },
    CreateArticle(){
      router.push("/create");
    },
    test(){
      router.push("/blank")
    }
  }
});
</script>
