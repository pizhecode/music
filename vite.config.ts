import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  base: '/music/', // 确保与 Vue Router 的 base 路径一致
  plugins: [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      },
      scss: {
        additionalData: `@import "@/styles/variables.scss";@import 'aplayer/dist/APlayer.min.css';
`

      }
    }
  },
  server: {
    port: 4399,
    open: false,
    // proxy: {
    //   '/': {
    //     target: '真实接口服务地址',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/music/, 'music')
    //   }
    // }
  },
})
