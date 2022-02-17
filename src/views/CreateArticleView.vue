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
  <div class="clearfix" style="float:left;margin-top:10px">
    <a-upload
      v-model:file-list="fileList"
      action="/api/upload-img"
      list-type="picture-card"
      @preview="handlePreview"
      :beforeUpload="handleBeforeUpload"
    >
      <div v-if="fileList.length < 1">
        <plus-outlined />
        <div class="ant-upload-text">上传图片</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
  <div style="float: right;margin-top: 10px;margin-right: 30px">
    <a-button type="primary" style="border-radius: 8px;width: 100px;height: 80px" @click="postArticle">发布文章</a-button>
    <a-button @click="clear" style="border: 0 ;background-color: rgb(234,233,233); color: #868686;border-radius: 8px;margin-left: 20px ;width: 100px;height: 80px;margin-top: 10px">清空内容</a-button>
  </div>
  <div style="clear: both;"></div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import WangEditor from "../components/WangEditor.vue"

import { PlusOutlined } from '@ant-design/icons-vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';
import { message } from "ant-design-vue";

import router from "@/router";

function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default defineComponent({
  components:{
    PlusOutlined,
    WangEditor
  },
  setup() {

    const previewVisible = ref<boolean>(false);
    const previewImage = ref<string | undefined>('');

    const fileList = ref<UploadProps['fileList']>([

    ]);

    const handleCancel = () => {
      previewVisible.value = false;
    };
    const handlePreview = async (file: UploadProps['fileList'][number]) => {
      if (!file.url && !file.preview) {
        file.preview = (await getBase64(file.originFileObj)) as string;
      }
      previewImage.value = file.url || file.preview;
      previewVisible.value = true;
    };
    const handleChange = ({ fileList: newFileList }: UploadChangeParam) => {
      fileList.value = newFileList;
    };


    const title = ref<string>('');
    const description = ref<string>('');
    const content = ref<string>('');
    return {
      //图片上传
      previewVisible,
      previewImage,
      fileList,
      handleCancel,
      handlePreview,
      handleChange,

      title,
      description,
      content
    };
  },
  methods:{
    
    //上传图片前的钩子
    handleBeforeUpload(file: any, fileList: any){
      console.log(file)
      console.log("beforeUpload")
      //@ts-ignore
      if(this.$root.account==""){
        return false;
      }else {
        return true;
      }
    },

    clear(){
      this.title="";
      this.description=""
      this.content="";
    },


    //接受富文本编辑器数据
    acceptEditor(html: any){
      console.log(html)
      this.content=html

    },
    postArticle(){
      if(this.$root.account==""){
        console.log("请先登录")
        this.$router.push("/login")
        message.error("请先登录")
        return 
      }
      if(this.title!="" && this.description!="" && this.content!=""){
        this.axios.post("/api/article/create",{
          create_by:this.$root.account,
          title:this.title,
          description:this.description,
          content:this.content,
          //@ts-ignore
          //user:this.$root.account
        }).then((res)=>{
          console.log(res)
          if(res.data.status==0){
            message.success("发布成功")
            this.$router.push("/article")
          }
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