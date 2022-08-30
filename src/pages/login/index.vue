<!--
 * @Author: cest
 * @Date: 2022-08-30 10:18:36
 * @LastEditTime: 2022-08-30 18:10:01
 * @LastEditors: cest
 * @FilePath: /authorization/src/pages/login/index.vue
 * @Description: 登录页面
-->
<script lang="ts" setup>
import CryptoJS from 'crypto-js'
import JSEncrypt from '~/utils/jsencrypt/lib/index'
const msg = '123'
// 我的私钥给你签名
const myPrivateKey = `MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ
WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR
aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB
AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv
xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH
m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd
8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF
z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5
rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM
V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe
aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil
psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz
uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876`
// 发送我的公钥给你签字认领
const myPublicKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN
FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76
xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4
gwQco1KRMDSmXSMkDwIDAQAB`
// 用你的公钥，加密消息
const yourPublicKey = ''

console.log('JSEncrypt', JSEncrypt)

const rsa = new JSEncrypt()
// 第一步加密 - 用你的公钥加密
// 第二步签名 - 用我的私钥签名
// 第三步发送 - 签名的消息和我的公钥
rsa.setPrivateKey(myPrivateKey)
const signature = rsa.sign(msg, CryptoJS.SHA256, 'sha256')
console.log('signature:', signature)
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
