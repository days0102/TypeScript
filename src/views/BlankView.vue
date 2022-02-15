<template>
  <div>
    <WangEditor @acceptEditor="acceptEditor"></WangEditor>
  </div>
</template>
<script lang="ts">

import WangEditor from "../components/WangEditor.vue"
export default {
  components:{
    WangEditor
  },
  methods:{
    //接受富文本编辑器数据
    acceptEditor(html: any){
      console.log(html)
    }
  }
}

</script>
