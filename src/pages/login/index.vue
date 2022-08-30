<!--
 * @Author: cest
 * @Date: 2022-08-30 10:18:36
 * @LastEditTime: 2022-08-30 13:36:57
 * @LastEditors: cest
 * @FilePath: /authorization/src/pages/login/index.vue
 * @Description: 编辑描述内容
-->
<script lang="ts" setup name="Login">

</script>

<template lang="pug">
.flex
  .login-wrap.margin-x-auto.border.border-solid.border-white.rounded-xl.flex.flex-col.items-center
    .margin-y-xl.padding-y-xl
      //- 头像
      .avatar.border-solid.border-white.border-4.rounded-full.flex.items-center.justify-center.overflow-hidden
        .icon.icon-24gl-user
    //- 用户名
    //- 登录密码
    //- 登录
</template>

<route lang="yaml">
meta:
  layout: login
</route>

<style lang="stylus" scoped>
  @import './stylus/index.styl'
</style>
