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

    editor.create();
  }
}
</script>

<style scoped>

</style>
