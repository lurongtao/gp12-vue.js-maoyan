<template>
  <div class="button-block" data-id="1215605">
    <div class="btn" :class="showInfo.class"><span class="fix">{{showInfo.title}}</span></div>
  </div>
</template>

<script>
let buttonInfo = [
  {},
  {
    class: 'toggle-wish-btn',
    title: '想看'
  },
  {},
  {
    class: 'normal',
    title: '购票'
  },
  {
    class: 'pre',
    title: '预售'
  }
]
export default {
  props: ['showst'],
  computed: {
    showInfo() {
      return buttonInfo[this.showst]
    }
  },
}
</script>

<style lang='stylus' scoped>

</style>