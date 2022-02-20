<template>
  <div class="home-container">

    <el-card v-for="article in pageArticle" :body-style="{padding: '5px'}" class="home-main-column-middle-card">
      <div class="home-title" style="text-align: left">
        <span style="float: left">
          <a-avatar :size="64" :src=article.avatar>
<!--            <template #icon><UserOutlined /></template>-->
          </a-avatar>
        </span>
        <span style="float: left;padding-left: 15px">

            <h2 @click="toLink(article.id)" style="color: blue;margin-bottom: 5px">{{ article.title }}</h2>

          <p style="color: #a6a8a8; font-size: small;">
            <span style="margin-right: 15px">创建时间:{{ article.create_at["Time"] }}</span>
            <span style="margin-right: 15px">更新时间:{{ article.update_at["Time"] }}</span>
          </p>
        </span>
        <div style="clear: both"></div>
      </div>
      <div style="width: 20%; float: left;border-radius: 8px;overflow: hidden;max-height: 150px">
        <img :src=article.figure class="image" style="width: 100%;height: auto" />
      </div>
      <div style="font-size: 14px;width: 75%;float: left; margin-left: 15px;">
        <h3
          style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;">
          {{ article.description }}</h3>
        <p style="margin-top: 10px">
          <span v-if="article.like" style="margin-right: 15px" @click="liked(article)">
            <LikeFilled @click="" />{{ article.likes }}
          </span>
          <span v-else style="margin-right: 15px;" @click="liked(article)">
            <LikeOutlined @click="" />{{ article.likes }}
          </span>

          <span v-if="article.star" style="margin-right: 15px" @click="disliked(article)">
            <DislikeFilled @click="" />{{ article.stars }}
          </span>
          <span v-else style="margin-right: 15px" @click="disliked(article)">
            <DislikeOutlined @click="" />{{ article.stars }}
          </span>

        </p>
      </div>

      <div style="clear: both"></div>

      <!--阅读全文按钮-->
      <!--      <div class="div-btn" style="clear: both;">-->
      <!--        <a-button type="primary">阅读全文</a-button>-->
      <!--      </div>-->
    </el-card>

    <div style="float: right;margin-bottom: 30px;margin-right: 20px">
      <el-pagination
        v-model:currentPage="currentPage"
        :page-size="pageSize"
        :small="false"
        :disabled="false"
        :background="true"
        layout="total, prev, pager, next"
        :total="total"
        hide-on-single-page="hide-on-single-page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>

    </div>
  </div>
</template>


<script>
import { defineComponent, ref } from "vue";
import { StarOutlined, LikeOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons-vue";

import { RouterLinkStub } from "@vue/test-utils";

export default defineComponent({
  name: "ListArticle.vue",
  components: {
    RouterLinkStub,
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
    UserOutlined
  },
  setup() {
    return {};
  },
  data() {
    return {
      articles: [],
      pageArticle: [],
      currentPage: 1,
      total: 0,
      pageSize: 3,
      pageShow: 0,
      like: false,
      dislike: false
    };
  },
  methods: {
    liked(article){
      if(!article.star){
        article.like=!(article.like)
        if(article.like){
          article.likes++;
        }else{
          article.likes--;
        }
      }
    },
    disliked(article){
      if(!article.like){
        article.star=!(article.star)
        if(article.star){
          article.stars++;
        }else{
          article.stars--;
        }
      }
    },

    handleSizeChange() {

    },
    handleCurrentChange(newCurrentPage) {
      this.currentPage = newCurrentPage;
      // console.log("new:"+newCurrentPage)
      let left = (this.currentPage - 1) * 3;
      let right = (this.currentPage - 1) * 3 + 3;
      if (right < this.total) {
        this.pageArticle = this.articles.slice(left, right);
      } else {
        this.pageArticle = this.articles.slice(left, this.total);
      }
      //console.log(this.pageArticle);
    },
    toLink(id) {
      this.$router.push({
        path: "/detail/" + id
      });
    },
    getData() {
      this.axios.get("/api/articles").then((response) => {
        //console.log(response)
        //@ts-ignore
        if (response.data.status === 0) {
          console.log(response.data.articles);
          if (response.data.articles != null) {
            this.total = (response.data.articles).length;
            this.articles = response.data.articles;
            this.pageArticle = this.articles.slice(0, (this.pageSize < this.total ? this.pageSize : this.total));
          }
        }
      });
    }
  },
  created() {
    this.getData();
    //console.log(this.blogs)
  }

});
</script>

<style scoped>
.home-container {

}

/*.home-description-markdown-body {*/
/*  text-align: left;*/
/*}*/
home-description-markdown-body {
  text-align: left !important;
}

.image {
  width: 100%;
  height: auto;
}

.home-main-column-middle-card {
  background-color: white;
  margin-bottom: 40px;

  padding: 20px 41px;

}

.home-title {
  text-align: center;
}

.home-page {
  text-align: center;
}

.home-title {
  margin-bottom: 20px;
}

.div-btn {
  text-align: center;
}

.blog-link:link, .blog-link:visited {
  text-decoration: none;
  color: black;


}

.home-main-column-middle-card:hover {
  -webkit-box-shadow: #ccc 0px 10px 10px;
  -moz-box-shadow: #ccc 0px 10px 10px;
  box-shadow: #ccc 0px 10px 10px;
}

.home-page {
  text-align: center;
}

.color-btn {

  text-decoration-line: none;
  padding: 11px 20px;
  color: white;
  font-size: 13px;
  background: linear-gradient(to right, #56ccf2, #2f80ed);
  border-radius: 15px;
  min-width: 90px;

}

.div-btn {
  padding: 14px 5px 30px 5px;
  margin-top: 7px;

}
</style>