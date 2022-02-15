<template>
  <div style="width: 300px; height: 180px">
  <a-carousel autoplay>
    <div><a-image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091021%2Fd5pifglp3gvd5pifglp3gv.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646821682&t=fb8776d1e91d0c0e23d36a491ee06fc1" /></div>
    <div><a-image src="https://img1.baidu.com/it/u=1860317508,2896020636&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" /></div>
    <div><a-image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F5822c8859fc97.jpg%3Fdown&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646821682&t=7a012e02fc86172468bd55725d141c68" /></div>
    <div><a-image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F59%2F52%2F02%2F595202f509d9646250e024be7cacfd7f.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646821682&t=41f123628caec8834a4e04ade9df7d0b" /></div>
  </a-carousel>
  </div>
  <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px'}" style="margin-top: 15px">
    <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Dayjs } from 'dayjs';

export default defineComponent({
  setup() {
    const value = ref<Dayjs>();
    const onPanelChange = (value: Dayjs, mode: string) => {
      console.log(value, mode);
    };

    return {
      value,
      onPanelChange,
    };
  },
});
</script>

<style lang="less" scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 180px;
  line-height: 180px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>