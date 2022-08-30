<!--
 * @Author: cest
 * @Date: 2022-08-30 10:27:44
 * @LastEditTime: 2022-08-30 13:05:20
 * @LastEditors: cest
 * @FilePath: /authorization/src/layouts/login.vue
 * @Description: 编辑描述内容
-->
<script setup lang="ts">
import './stylus/login/index.styl'
</script>

<template lang="pug">
main(class="login background-image px-4 py-10 text-center text-gray-700 dark:text-gray-200")
  RouterView
  Footer
  div(class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm")
    | [Login Layout]
</template>
