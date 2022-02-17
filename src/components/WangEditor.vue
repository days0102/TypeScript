<template>
  <div id="main" >

  </div>
</template>

<script>

import E from "wangeditor"

export default {
  name: 'Editor',
  data(){
    return{
      content:"",
      editor: ""
    }
  },

  methods:{

  },
  mounted () {
    //this.initE();//
    const editor=new E('#main');

    // 取消自动 focus
    editor.config.focus = false

    // 配置图片 server 接口地址
    editor.config.uploadImgServer = '/api/upload-img'

    editor.config.menus = [
      'head',
      'bold',
      'italic',
      'underline',
      'strikeThrough',

      'fontSize',
      'fontName',
      'foreColor',
      'backColor',
      'lineHeight',
      'justify',
      // 'quote',
      'indent',
      'emoticon',
      // 'table',
      'code',
      'link',
      'splitLine',
      'list',
      'image',
      'undo',
      'redo',
    ]
    // 配置 onchange 回调函数
    editor.config.onchange =  (newHtml)=> {
      console.log("change 之后最新的 html", newHtml);
      this.$emit('acceptEditor',newHtml)
      console.log(editor.txt.text())
    };
    // 配置触发 onchange 的时间频率，默认为 200ms
    editor.config.onchangeTimeout = 500; // 修改为 500ms

    //上传图片的回调函数
    editor.config.uploadImgHooks = {
      // 上传图片之前
      before: (xhr) =>{
        console.log(xhr)

        // 可阻止图片上传
        return {
          prevent: this.$root.account==="",
          msg: '请先登录'
        }
      },
      // 图片上传并返回了结果，图片插入已成功
      success: function(xhr) {
        console.log('success', xhr)
      },
      // 图片上传并返回了结果，但图片插入时出错了
      fail: function(xhr, editor, resData) {
        console.log('fail', resData)
      },
      // 上传图片出错，一般为 http 请求的错误
      error: function(xhr, editor, resData) {
        console.log('error', xhr, resData)
      },
      // 上传图片超时
      timeout: function(xhr) {
        console.log('timeout')
      },
      // 图片上传并返回了结果，想要自己把图片插入到编辑器中
      // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
      customInsert: function(insertImgFn, result) {
        // result 即服务端返回的接口
        console.log('customInsert', result)

        // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
        insertImgFn(result.data[0])
      }
    }

    editor.create();
  }
}
</script>

<style scoped>

</style>
