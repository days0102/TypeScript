<template>
  <div style="background-color: antiquewhite;">
<!--    <h1 style="text-align: center">Detail</h1>-->
<!--    <h2 style="text-align: center">{{ $route.params }}</h2>-->

<!--    <template v-if="flag">-->
<!--      <div class="example">-->
<!--        <a-spin size="large"/>-->
<!--      </div>-->
<!--    </template>-->
<!--    <template v-else>-->
    <h1 style="text-align: center;" >{{this.article.title}}</h1>
    <div v-html="this.article.content"></div>
<!--    <p style="text-align: center;font-size: x-large">{{this.article.content}}</p>-->
<!--    <a-textarea style="font-size: x-large;background-color: antiquewhite"  readonly="readonly" v-model:value="this.article.content" placeholder="1~200字" :rows="auto" />-->
<!--    </template>-->
  </div>
  <!--  <div style="background-color: aquamarine">-->
  <!--    <h1 style="text-align: center">Details</h1>-->
  <!--    <h2 style="text-align: center">路由参数{{$route.params}}</h2>-->
  <!--    &lt;!&ndash;评论列表&ndash;&gt;-->
  <!--    <div class="comment-body">-->
  <!--      &lt;!&ndash;评论表单&ndash;&gt;-->
  <!--      <CommentForm v-if="parentCommentId===-1" :realParentCommentId="-1" @parentEvent="toClick"></CommentForm>-->
  <!--      <h3 class="ui-dividing-header">Comments | {{ commentCount }} 条评论</h3>-->
  <!--      <h3 v-if="commentCount===0" class="ui-header">快来抢沙发！</h3>-->
  <!--      &lt;!&ndash;评论内容&ndash;&gt;-->
  <!--      <div v-for="comment in comments" :key="comment.id" class="comment">-->
  <!--        &lt;!&ndash;父评论内容&#45;&#45;用户名 头像 内容&ndash;&gt;-->
  <!--        <span :id="`comment-${comment.id}`" class="anchor"></span>-->
  <!--        <div class="image-avatar"><img :src="comment.avatar" style="width: 40px;border-radius:50%;">-->
  <!--        </div>-->
  <!--        <div class="content">-->
  <!--          <a :href="comment.website!=''&&comment.website!=null?comment.website:null" class="nickname"-->
  <!--             rel="external nofollow noopener"-->
  <!--             target="_blank">{{ comment.nickname }}</a>-->
  <!--          <el-tag v-if="comment.isAdminComment==1" class="label" effect="dark" size="mini" type="info">博主</el-tag>-->
  <!--          <span class="date">{{ comment.createTime }}</span>-->
  <!--          <el-button size="mini" type="primary" @click="setReply(comment.id)">回复</el-button>-->
  <!--          <div class="text" v-html="comment.content"></div>-->
  <!--        </div>-->
  <!--        &lt;!&ndash;子评论&ndash;&gt;-->
  <!--        <div v-if="comment.replyComments.length>0" class="comments">-->
  <!--          <div v-for="reply in comment.replyComments" :key="reply.id" class="comment">-->
  <!--            <span :id="`comment-${reply.id}`" class="anchor"></span>-->
  <!--            <div class="image-avatar">-->
  <!--              <img :src="reply.avatar" style="width: 40px;border-radius:50%;">-->
  <!--            </div>-->
  <!--            <div class="content">-->
  <!--              <a :href="reply.website!=''&&reply.website!=null?reply.website:null" class="nickname"-->
  <!--                 rel="external nofollow noopener"-->
  <!--                 target="_blank">{{ reply.nickname }}</a>-->
  <!--              <el-tag v-if="reply.isAdminComment==1" class="label" effect="dark" size="mini" type="info">博主</el-tag>-->
  <!--              <span class="date">{{ reply.createTime }}</span>-->
  <!--              <div class="text">-->
  <!--                <a :href="`#comment-${comment.id}`"-->
  <!--                   style="text-decoration-line: none;margin-right: 8px;font-weight: bold;color: #333333">@{{ reply.parentCommentNickname-->
  <!--                  }}</a>-->
  <!--                <div style="display: inline" v-html="reply.content">-->
  <!--                </div>-->
  <!--              </div>-->
  <!--              <div class="actions">-->
  <!--                <el-button size="mini" type="primary" @click="setChildrenReply(reply.id)">回复</el-button>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <el-card v-for="comment in comments" :body-style="{padding: '0px'}" class="home-main-column-middle-card" style="margin-bottom: 15px;padding: 10px;margin-right: 15px">
    <span class="home-title" style="text-align: left;">
        <span style="float: left;margin-top: 10px">
          <a-avatar :size="32" :src=comment.avatar>
<!--            <template #icon><UserOutlined /></template>-->
          </a-avatar>
        </span>
        <span style="float: left;padding-left: 15px">
          <span style="color: mediumaquamarine">
            {{comment.username}}
          </span>
          <span style="margin-left: 30px;color: #a6a8a8; font-size: small;">
            评论时间:{{ comment.create_at["Time"] }}
          </span>
        </span>
        <span v-if="comment.oneself" style="float: right">
          <a-button @click="deleteComment(comment.id)" type="dashed" danger style="font-size: small;" size="small">删除</a-button>
        </span>
        <span style="clear: both"></span>
    </span>
    <div style="font-size: small;width: 75%;float: left; margin-left: 15px;">
      <p style="font-size: medium;margin-top: 10px">
        {{comment.content}}
      </p>
      <p style="margin: 5px 0;padding: 0">
          <span v-if="comment.like" style="margin-right: 15px" @click="liked(comment)">
            <LikeFilled @click="" />{{ comment.likes }}
          </span>
        <span v-else style="margin-right: 15px;" @click="liked(comment)">
            <LikeOutlined @click="" />{{ comment.likes }}
          </span>

        <span v-if="comment.star" style="margin-right: 15px" @click="disliked(comment)">
            <DislikeFilled @click="" />{{ comment.stars }}
          </span>
        <span v-else style="margin-right: 15px" @click="disliked(comment)">
            <DislikeOutlined @click="" />{{ comment.stars }}
          </span>

      </p>
    </div>

    <div style="clear: both"></div>

    <!--阅读全文按钮-->
    <!--      <div class="div-btn" style="clear: both;">-->
    <!--        <a-button type="primary">阅读全文</a-button>-->
    <!--      </div>-->
  </el-card>

  <div>
    <div style="padding-left: 8px">
      <a-avatar :size="32" style="float: left;height: auto" :src="this.$root.avatar">
<!--            <template #icon><UserOutlined /></template>-->
      </a-avatar>
    </div>
    <div style="float: left;padding-left: 15px;width: 85%">
      <a-textarea v-model:value="value" placeholder="1~200字" :rows="4" />
    </div>
    <div style="float: left;">
      <div>
        <a-button @click="postComment" type="primary" style="border-radius: 5px;margin: 10px 10px">发布评论</a-button>
      </div>
      <div>
        <a-button @click="back" style="border-radius: 5px;margin: 10px 10px">返回上级</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// export default {
//   name: "Articledetail.vue"
// };
import { defineComponent, ref } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import CommentForm from "../components/CommentForm.vue";
import { message } from "ant-design-vue";

dayjs.extend(relativeTime);
type Comment = Record<string, string>;


export default defineComponent({
  inject:['reload'],
  components: { CommentForm },
  setup() {
    //评论
    const comments = ref<Comment[]>([]);
    const submitting = ref<boolean>(false);
    const value = ref<string>("");
    const handleSubmit = () => {
      if (!value.value) {
        return;
      }

      submitting.value = true;

      setTimeout(() => {
        submitting.value = false;
        comments.value = [
          {
            author: "Han Solo",
            avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: value.value,
            datetime: dayjs().fromNow()
          },
          ...comments.value
        ];
        value.value = "";
      }, 1000);
    };

    return {
      //评论
      comments,
      submitting,
      value,
      handleSubmit
    };
  },
  data(){
    let article={
      title:"",
      content:""
    }
    //let flag:boolean
    return{
      //flag:true,
      article,
      like:0,
      dislike:0
    }
  },
  async created() {
    //console.log(login)
    await this.getComments();
    // await this.getArticle();

  },
  mounted(){

  },
  methods: {
    liked(comment: { star: any; like: boolean; likes: number; }){
      if(!comment.star) {
        comment.like = !(comment.like)
        if(comment.like){
          comment.likes++;
        }else{
          comment.likes--;
        }
      }
    },
    disliked(comment: { like: any; star: boolean; stars: number; }) {
      if (!comment.like) {
        comment.star = !(comment.star)
        if (comment.star) {
          comment.stars++;
        } else {
          comment.stars--;
        }
      }
    },

    deleteComment(id:number){
      //console.log(id)
      this.axios.post("/api/comment/delete",{
        id:id
      }).then((res)=>{
        if(res.data.status==0){
          //@ts-ignore
          this.reload()
        }
      })
    },
    postComment(){
      console.log(this.value)
      if(this.value==""){
        return
      }
      // @ts-ignore
      console.log(this.$root.account)
      // @ts-ignore
      if(this.$root.account==""){
        this.$router.push('/login')
        message.error("请先登录")
      }
      this.axios.post("/api/post",{
        comment_to:this.$route.params.id,
        // @ts-ignore
        create_by:this.$root.account,
        content:this.value,
        stars:0,
        likes:0,
        comments:0
      }).then((response) => {
        //console.log(response.data)
        if(response.data.status==0){
          //@ts-ignore
          this.reload()
          // let id=this.$route.params.id
          // this.$router.go(-1)
          // this.$router.push({
          //   path:'/blank',
          // })
          // this.$router.go(-1)
          // this.$router.push({
          //   path:'/detail/'+id,
          // })
        }
      })
    },
    async getComments() {

      //console.log(this.$route.params);
      this.axios.post("/api/comment", {
        id: this.$route.params.id
      }).then((response) => {
        // console.log("GetComment")
        //console.log(response.data);
        if (response.data.status == 0) {
          // console.log(response.data)
          if (response.data.comments != null) {
            //console.log("Comment");
            // console.log(response.data.comments);
            this.comments = response.data.comments;
            for(let i=0;i<this.comments.length;i++){
              //@ts-ignore
              if(this.comments[i].create_by==this.$root.account){
                //@ts-ignore
                this.comments[i].oneself=1
              }
              else{
                //@ts-ignore
                this.comments[i].oneself=0
              }
            }
          }
          if(response.data.articles!=null){
            this.article = response.data.articles[0]
          }
        }
      });
      // fetch("/api/comment",{
      //   method:'post',
      //
      // })
    },
    async getArticle(){

      this.axios.post("/api/article",{
        id:this.$route.params.id
      }).then((res)=>{
        console.log("getArticle")
        if(res.data.status==0) {
          //console.log(res.data)
          this.article = res.data.articles[0]
          //this.flag=false
        }
      })
    },
    back(){
      this.$router.push("/article");
    }
  }
});
</script>

<style scoped>
.comment-body {
  padding: 5px 35px 15px 22px;
}

.comment {
  padding-right: 2em !important;
  padding-left: 1em !important;
  margin: 7px 0px 0px;
  padding-top: 7px;
}

.comments {
  padding: 42px 0px 24px 31.5px;
  margin: -28px 0px -10px 17.5px;
  border-left: 1px #ccc solid;
}

.content {
  margin-left: 0px;
  display: inline-block;
  width: auto;
  vertical-align: top;
}

.image-avatar {
  display: inline-block;
  width: 49px;
  vertical-align: top;
}

.label {
  margin-left: 5px;
}

.nickname {
  font-weight: bolder;
  font-size: 14px;
  color: #000;
  text-decoration-line: none;
}

.comment .el-button {
  margin-left: 5px;
  padding: 4px 5px;
}

.text {
  white-space: pre-wrap !important;
  margin: 7px 0px;
  line-height: 1.5;
  font-size: 14px;
}

.date {
  color: gray;
  font-size: 10px;
  margin-left: 5px;
}

.anchor {
  height: 55px;
  margin-top: -55px;
  visibility: hidden;
}
.home-main-column-middle-card:hover {
  -webkit-box-shadow: #ccc 0px 8px 8px;
  -moz-box-shadow: #ccc 0px 8px 8px;
  box-shadow: #ccc 0px 8px 8px;
}
</style>