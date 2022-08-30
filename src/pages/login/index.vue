<!--
 * @Author: cest
 * @Date: 2022-08-30 10:18:36
 * @LastEditTime: 2022-08-30 15:40:02
 * @LastEditors: cest
 * @FilePath: /authorization/src/pages/login/index.vue
 * @Description: 登录页面
-->
<script lang="ts" setup>
const form = ref({
  name: '',
  password: '',
})
</script>

<template lang="pug">
.flex.flex-1.items-center
  .login-wrap.margin-x-auto.border.border-solid.border-white.rounded-xl.flex.flex-col.items-center
    .margin-y-xl.padding-y-xl
      //- 头像
      .avatar.border-solid.border-white.border-4.rounded-full.flex.items-center.justify-center.overflow-hidden
        .icon.icon-24gl-user
    .width-full
      .justify-between.margin.padding
        el-form(:model="form")
          .padding-y-sm
            el-form-item
              el-input(
                size="large"
                v-model="form.name"
                placeholder="邮箱"
                )
                template(#prefix)
                  .icon.icon-24gl-envelope
          .padding-y-sm
            el-form-item
              el-input(
                size="large"
                v-model="form.password"
                placeholder="登录密码"
                type="password")
                template(#prefix)
                  .icon.icon-24gl-lock
          .padding-y-sm
            el-form-item
              el-button(
                round
                size="large") 登录
    //- 登录
    .width-full
      .flex.justify-between.margin.padding
        .text-sm.text-white 立即注册
        .text-sm.text-white 忘记密码
</template>

<route lang="yaml">
meta:
  layout: login
</route>

<style lang="stylus" scoped>
  @import './stylus/index.styl'
</style>
