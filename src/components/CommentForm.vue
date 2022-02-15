<template>
  <!-- 评论输入表单 -->
  <div class="form">
    <h3>
      发表评论
      <el-button v-show="this.realParentCommentId !== -1" class="m-small" size="mini" type="primary"
                 @click="toSendParentId()">取消回复
      </el-button>
    </h3>
    <el-form ref="formRef" :model="commentForm" :rules="rules" size="small">
      <el-input v-model="commentForm.content" :class="'textarea'" :rows="5" :validate-event="false" maxlength="250"
                placeholder="评论千万条，友善第一条" show-word-limit type="textarea"></el-input>

      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item prop="nickname">
            <el-input >
              <i slot="prefix" class="el-input__icon el-icon-user"></i>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item prop="email">
            <el-popover ref="emailPopover" content="用于接收回复邮件" placement="bottom" trigger="focus"></el-popover>
            <el-input >
              <i slot="prefix" class="el-input__icon el-icon-message"></i>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item prop="website">
            <el-popover ref="websitePopover" content="可以让我参观一下吗😊" placement="bottom" trigger="focus"></el-popover>
            <el-input placeholder="你的网站（可选）">
              <i slot="prefix" class="el-input__icon el-icon-map-location"></i>
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :offset="1" :span="5">
          <el-form-item>
            <!-- 接口节流  -->
            <el-button size="medium" type="primary"  v-throttle="[postForm,`click`,30000]"  @mouseenter.native="beforePost">发表评论</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>


  </div>
</template>

<script>
export default {
  name: "CommentForm",
  props: {
    realParentCommentId: {
      type: Number,
      default: '-1'
    },
    realParentCommentNickname: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      commentForm: {
        content: "",
        nickname: "",
        email: "",
        website: "",
        avatar: "",
        blogId: 0,
        parentCommentId: this.realParentCommentId,
        isAdminComment: -1,
        qq: "",
        parentCommentNickname: this.realParentCommentNickname
      },
    }
  },
  methods: {
    created() {
      if (this.$route.id) {
        this.commentForm.blogId = this.$route.id
      } else {
        alert("error")
        return false
      }
    },
  }
}
</script>

<style scoped>
.form h3 {
  margin: 5px;
  font-weight: 500 !important;
}
.form .m-small {
  margin-left: 5px;
  padding: 4px 5px;
}
.el-form .textarea {
  margin-top: 5px;
  margin-bottom: 15px;
}
.el-form textarea {
  padding: 6px 8px;
}
.el-form textarea, .el-form input {
  color: black;
}
.el-form .el-form-item__label {
  padding-right: 3px;
}
</style>