<template>
  <div class="components-input-demo-size">
    <a-input style="width: 99%" v-model:value="title" size="large" placeholder="请输入标题" />
  </div>
  <div class="components-input-demo-size">
    <a-textarea style="width: 99%;" v-model:value="description" size="large" placeholder="请输入简介" />
  </div>
<!--  <div class="components-input-demo-size">-->
<!--    <a-textarea style="width: 99%;" v-model:value="content" placeholder="请输入文章内容" :rows="15" />-->
<!--  </div>-->
  <div v-html="this.content"></div>
  <div>
    <WangEditor @acceptEditor="acceptEditor"></WangEditor>
  </div>
  <div>
    <a-button @click="postArticle">提交</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import WangEditor from "../components/WangEditor.vue"

export default defineComponent({
  components:{
    WangEditor
  },
  setup() {
    const title = ref<string>('');
    const description = ref<string>('');
    const content = ref<string>('');
    return {
      title,
      description,
      content
    };
  },
  methods:{
    //接受富文本编辑器数据
    acceptEditor(html: any){
      console.log(html)
      this.content=html

    },
    postArticle(){
      if(this.title!="" && this.description!="" && this.content!=""){
        this.axios.post("/api/article/create",{
          title:this.title,
          description:this.description,
          content:this.content,
          //@ts-ignore
          user:this.$root.account
        }).then((res)=>{
          console.log(res)
        })
      }
    }
  }
});
</script>
<style scoped>
.components-input-demo-size .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>