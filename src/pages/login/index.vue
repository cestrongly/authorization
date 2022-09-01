<!--
 * @Author: cest
 * @Date: 2022-08-30 10:18:36
 * @LastEditTime: 2022-08-31 11:40:19
 * @LastEditors: cest
 * @FilePath: /authorization/src/pages/login/index.vue
 * @Description: 登录页面
-->
<script lang="ts" setup>
import CryptoJS from 'crypto-js'
import JSEncrypt from '~/utils/jsencrypt/lib/index'
const msg = 'hello world'

// 生成我的秘钥
const rsa = new JSEncrypt()

// 我的私钥给你签名
const myPrivateKey = rsa.getPrivateKey()
  .replace('-----BEGIN RSA PRIVATE KEY-----', '')
  . replace('-----END RSA PRIVATE KEY-----', '')
// 发送我的公钥给你签字认领
const myPublicKey = rsa.getPublicKey()
  .replace('-----BEGIN PUBLIC KEY-----', '')
  .replace('-----END PUBLIC KEY-----', '')
// 用你的公钥，加密消息
const yourPublicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3lcNOhUwySR1ONlugEKdFNmnaCPJWipx0OrUgOpdIseBc99P8aQg+ziSkmyQ7V8MnyVL5NwRH5Y3Kj9eRY3dTG0y0EtV1V3O7KUSW/DyhnqB8ixWl8UCYQUtaBImkl0wKaycvBPePSSpI4Wa288xYPxJWfzYy/LLWOBE8PkyH8zeRVQOqiVitAOd+ohQ8n6g94o753v7m9qa02TA/Q+Qjv/XyS592AlR7jqBJhpW9AWBGdx8Z2bj9nrbmxt0K7ba03IYRn1hgNr3M/E7S196+jW5gQR88uBMHygMaxJHK0KVviqAInjJeixA3FaQEl73iG2uWBu5Q6g+K0m8eH0PiwIDAQAB'
const yourPrivateKey = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDeVw06FTDJJHU42W6AQp0U2adoI8laKnHQ6tSA6l0ix4Fz30/xpCD7OJKSbJDtXwyfJUvk3BEfljcqP15Fjd1MbTLQS1XVXc7spRJb8PKGeoHyLFaXxQJhBS1oEiaSXTAprJy8E949JKkjhZrbzzFg/ElZ/NjL8stY4ETw+TIfzN5FVA6qJWK0A536iFDyfqD3ijvne/ub2prTZMD9D5CO/9fJLn3YCVHuOoEmGlb0BYEZ3HxnZuP2etubG3QrttrTchhGfWGA2vcz8TtLX3r6NbmBBHzy4EwfKAxrEkcrQpW+KoAieMl6LEDcVpASXveIba5YG7lDqD4rSbx4fQ+LAgMBAAECggEAMIqI1LlzoTZYcUTnHxFsAfVS2yWU/B5wItBh/JMuKj2sQYPrjDHtEWvUdCtHqMsrkkMuQpTZGDBPcuXKyxyhx+G/SkJoRuDoIDoZvADqsfllDV4ouZHFZzEeLK5pxWKa9T4+KcGcr3SliJ/Oo1akzSvHR+Iv4rbrNkggRQviqZZESsswaVg4qDSCFxAcYipb6T+Yx64gmuvXTstn1tpuC/8SPRAps1hm2KAuYzHCHT3SaWlau18FBeMrXdzsQQQjAU4M3t3NeVRlwjbxgQNQlLT0IR9slEMgIWiC+UukXUTLqfQAn2aV7Sf2SvCzWE2ZoH6VRirHm2p0UZ9lQHl0gQKBgQD8PJmigRTS/youZTK8uigE41KhxH+1JId0tQgXJ+veyKIC5BKyPHu+iukwQdVaSvpKVJIRnX3RgP0Pq6dYGgAj5+T0u7zEmQ51qXwoC3O864Ocpf8mWeBwrC8G5PBMPpDMXewSnDRu7ZxlaiEnVpXCQOjbkrn6c01/Cq9ZNmziGwKBgQDhqENrJh57OvKWPOhyeHxuo90aeL5vYms6QPPXGE0wHwUMAAwAOBtij1l+D/7BRsgWyxeHi9RPa0Dw6vCHdWbFtX+S0HvUYu87pLXZfqvyTUplLIuR7vVUY9w+iBcAIf39gAazmb9tcp7TKfFOhYUvA/Rd4vBHHMCqKA0hxnzfUQKBgEncmQScFfP/YmO5oJThUky0IINcXiU2MDA9vsPBHfHcAI0mKk9lJLtURBqsfIR3Rjmz8B4WZzyNMA2Br3w+COJ6ynHb89gCFdjgq4myaM7ejGi3tzKMyQtVcGPtcGxzOcWOj02XzkbZb53G6TRyx2HdzhJWMf2j/AKCp3xRUqsXAoGBAJjMkEJIwJEfHE7BFYEVtuRQTxJyujjAAu2iN7rpeLLh/k/e5EFtvJVjjey/tfh4Dlro0Jj3BR9197Zqz85Zn+q2eJkYVRE+oNHZOU356UKcNYkGvcdmcHbhW6x4CGMNoWf7Pg51SFs7JvLDzuMlpEZuvhSo65yrioZtsl6xgbLRAoGBAJyeksCNyZ7b1GT0cXwvL4mtx+3nk+BWWQOAqqkWPRe6UBdL5wiGyYnSbou9FJ3VOCpfX9eqOookjAKCwUkTv2MUvBLzCYYUbtTIjHtTzM2gpD+RflZ8UGqWVuXUr/NDRuMw9mSSHgXUOTxLcTrlOa5NXHZtVhMTR/NNFKrGV5Ye'
console.log('myPrivateKey:', myPrivateKey)
console.log('myPublicKey:', myPublicKey)

// 第一步加密 - 用你的公钥加密
rsa.setPublicKey(yourPublicKey)
const encryptMsg = rsa.encrypt(msg)
console.log('加密 - 用你的公钥加密:', encryptMsg)
// 第二步签名 - 用我的私钥签名
rsa.setPrivateKey(myPrivateKey)
const signature = rsa.sign(encryptMsg as string, CryptoJS.SHA256, 'sha256')
console.log('签名 - 用我的私钥签名:', signature)
// 第三步发送 - 签名的消息和我的公钥
rsa.setPrivateKey(myPrivateKey)
// 签字
rsa.setPublicKey(myPublicKey)
const verify = rsa.verify(encryptMsg as string, signature as string, CryptoJS.SHA256)
console.log('认签 - 用我的公钥认签:', verify ? '通过' : '未通过')
// 解密 - 用你的秘钥解密
rsa.setPrivateKey(yourPrivateKey)
const result = rsa.decrypt(encryptMsg as string)
console.log('解密 - 用你的私钥解密，解密结果：', result)

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
