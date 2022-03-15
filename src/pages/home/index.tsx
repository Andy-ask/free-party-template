import './home.scss';

function Home() {
  return (
    <div className='home'>
      <img src='../../../favicon.svg' alt='' />
      <p>
        <span>free party cli 集成了 vite react redux redux-toolkit immer react-router axios mockjs sass 基本上实现了 react 全家桶</span>
      </p>
      <p>
        <span>
          关于 redux 与 redux-toolkit、immer 的使用方式，我已经放在了 about 页面（对应文件 /src/pages/about），需要可以自行查看，更多请查阅官网
        </span>
      </p>
      <div>
        <a href='https://cn.vitejs.dev/'>vite 官网</a>
        <a href='https://redux-toolkit.js.org/'>react 官网</a>
        <a href='https://redux.js.org/'>redux 官网 </a>
        <a href='https://redux-toolkit.js.org/'>redux-toolkit 官网</a>
        <a href='https://immerjs.github.io/immer/'>immer 官网</a>
        <a href='https://v5.reactrouter.com/web/guides/quick-start'>react-router 官网</a>
        <a href='https://v5.reactrouter.com/web/guides/quick-start'>react-router 官网</a>
        <a href='http://www.axios-js.com/'>axios 中文网 </a>
        <a href='http://mockjs.com/'>mockjs 官网</a>
        <a href='https://sass-lang.com/'>sass 官网</a>
      </div>
    </div>
  );
}

export default Home;
