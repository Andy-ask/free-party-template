import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
// gzip 压缩
import viteCompression from 'vite-plugin-compression';

// 路径转换
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  // 获取.env文件里定义的环境变量
  const env: any = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [react(), viteCompression()],
    // 项目根目录（index.html 文件所在的位置）
    root: env.VITE_ROOT || './',
    // 开发或生产环境服务的公共基础路径
    base: env.VITE_BASE_URL || '/',
    build: {
      outDir: './build', // 打包输出目录
      cssCodeSplit: false, //默认true,将css分割提取到css文件中，false将全部css提取到一个文件里
    },
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    clearScreen: false, // 关闭vite清屏
    envPrefix: 'FP_', // env 环境变量前缀，默认 VITE_
    envDir: './envs', // 加载 env 目录
    server: {
      https: env.VITE_HTTPS == 'true', // 启用 TLS + HTTP/2
      host: true, // 监听所有地址
      port: env.VITE_PORT || '3000', // 环境变量启动端口
      strictPort: false, // 端口占用是否关闭应用程序
      open: `${env.VITE_HTTPS == 'true' ? 'https' : 'http'}://localhost:${env.VITE_PORT || '3000'}`, // 启动打开网址
      proxy: {
        // 代理配置
        '/api': {
          target: env.VITE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  });
};
