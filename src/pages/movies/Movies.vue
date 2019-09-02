<template>
  <div class="movie-container">
    <nav>
      <ul>
        <li>
          北京
          <span class="yo-ico"></span>
        </li>
        <li>
          <ul>
            <li>正在热映</li>
            <li>即将上映</li>
          </ul>
        </li>
        <li>
          <van-icon tag="span" name="search" color="#e54847" size=".25rem" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'
Vue.use(Icon)

export default {
  
}
</script>

<style lang="stylus" scoped>
@import "~styles/border.styl"
// @font-face {
//   font-family: 'my-icon';
//   src: url('./my-icon.ttf') format('truetype');
// }

// .my-icon {
//   font-family: 'my-icon';
// }

// .my-icon-extra::before {
//   content: '\e626';
// }

.movie-container
  nav
    height .44rem
    > ul
      height 100%
      display flex
      padding 0 .15rem
      border-bottom solid 1px #ccc
      > li
        &:nth-child(1)
          flex 65
          font-size .15rem
          display flex
          align-items center
          color #666
          border1px(2px, 3)
          span
            font-size .12rem
            &::after
              content: '\f033'
        &:nth-child(2)
          flex 265
        &:nth-child(3)
          flex 45
          display flex
          justify-content flex-end
          align-items center

</style>