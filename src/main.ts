/*
 * @Author: cest
 * @Date: 2022-08-30 10:02:50
 * @LastEditTime: 2022-08-30 14:04:46
 * @LastEditors: cest
 * @FilePath: /authorization/src/main.ts
 * @Description: 编辑描述内容
 */
import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/color-ui/stylus/index.styl'
import './assets/stylus/index.styl'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)
