<template>
  <div style="width: 100%">
    <a-list bordered="bordered" item-layout="vertical" size="default" :pagination="pagination" :data-source="listData"
            style="margin-left: 5px">
      <template #footer>
        <div>

        </div>
      </template>
<!--      <template #renderItem="{ item }">-->
      <div v-for="item in listData">
        <a-list-item key="item.title">
          <template #actions>
          <span v-for="{ type, text } in actions" :key="type">
            <component :is="type" style="margin-right: 8px;" @click="func(text)" />
            {{ text }}
          </span>
          </template>
          <template #extra>
            <img
              width="250"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </template>
          <a-list-item-meta :description="item.description">
            <template #title>
              <!--              <a :href="item.href">{{ item.title }}</a>-->
              <router-link to="/article/detail"><a>{{ item.title }}</a></router-link>
            </template>
            <template #avatar>
              <a-avatar :src="item.avatar" />
            </template>
          </a-list-item-meta>
          {{ item.content }}
        </a-list-item>
      </div>
    </a-list>
  </div>


</template>

<script lang="ts">
// export default {
//   name: "ArticleView.vue"
// };
import { StarOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons-vue";
import Vue, { defineComponent, reactive, ref, watch } from "vue";
import dayjs from "dayjs";
import VueAxios from "vue-axios";
import axios from "axios";
type action = Record<string, string>;

let listData: Record<string, string>[] = [];

let sourceData=[]

let dataFlag: boolean;

// for (let i = 0; i < 20; i++) {
//   listData.push({
//     href: "https://www.antdv.com/",
//     title: `ant design vue part ${i}`,
//     avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//     description:
//       "Ant Design, a design language for background applications, is refined by Ant UED Team.",
//     content:
//       "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
//   });
// }

export default defineComponent({
  components: {
    StarOutlined,
    LikeOutlined,
    MessageOutlined
  },
  setup() {
    dataFlag = false;
    console.log(dataFlag);
    const pagination = {
      onChange: (page: number) => {
        console.log(page);
      },
      pageSize: 3
    };
    const actions = ref<action[]>([
      { type: "StarOutlined", text: "666" },
      { type: "LikeOutlined", text: "156" },
      { type: "MessageOutlined", text: "2" }
    ]);
    return {
      //列表
      listData,
      pagination,
      actions,
      dataFlag
    };
  },
  // data(){
  //   fetch("/api/test", {
  //     method: "POST"
  //   }).then((result) => {
  //     return result.json();
  //   }).then((result) => {
  //     for(let i=0;i<(result.articles).length;i++){
  //       let article=JSON.parse(result.articles[i]["content"]);
  //       console.log(article["title"]+i)
  //       console.log("second:"+listData.length)
  //       listData.push({
  //         href: "https://www.baidu.com",
  //         title: article["title"],
  //         description: dayjs().toString(),
  //         content: article["content"]
  //       });
  //     }
  //   });
  //   return listData;
  // },
  created() {
    console.log("created");
    // this.axios
    //   .post("/api/article")
    //   .then(res => {
    //     console.log("axios_res:")
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    console.log("getArticles:")
    this.getArticles()
  },
  mounted() {
    // setTimeout(() => {
    // }, 10000);
    console.log("mounted");
    //console.log(dataFlag);

  },
  methods: {
    func(text: string) {
      let x = Number(text);
      x++;
      text = x.toString();
      console.log(text);
    },
    test() {
      console.log("test");
      let url = "/api/test";
      fetch(url, {
        method: "POST"
      }).then((result) => {
        console.log(result);
        return result.json();
      }).then((result) => {
        return result.articles;
      });
    },
    getArticles(){
      listData.push({
        //href: "https://www.baidu.com",
        title: "title",
        description: dayjs().toString(),
        content: "content"
      });
      console.log(listData)

      console.log("first:" + listData.length);
      this.axios.get("/api/test").then((response) => {
        //console.log(response)
        console.log(response.data.articles)
        for(let i=0;i<(response.data.articles).length;i++) {
          console.log(JSON.parse(response.data.articles[i].content))
          listData.push(JSON.parse(response.data.articles[i].content))
        }
        console.log(listData)

        console.log("second:" + response.data.articles.length);
      })
      console.log("third:" + listData.length);

      // fetch("/api/test", {
      //   method: "POST"
      // }).then((result) => {
      //   console.log("fetch_result:")
      //   console.log(result)
      //   return result.json();
      // }).then((result) => {
      //  //console.log(result)


        // for (let i = 0; i < (result.articles).length; i++) {
        //
        //   let article = JSON.parse(result.articles[i]["content"]);
        //   console.log(article["title"] + i);
        //   console.log("second:" + listData.length);
        //   listData.push({
        //     href: "https://www.baidu.com",
        //     title: article["title"],
        //     description: dayjs().toString(),
        //     content: article["content"]
        //   });
        // }
      //});

    }
  }
});
</script>

<style scoped>

</style>