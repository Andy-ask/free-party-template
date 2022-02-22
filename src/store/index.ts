// 配置 Store
import { configureStore } from '@reduxjs/toolkit';
// 增强存储
import { reduxBatch } from '@manaflair/redux-batch';
// redux 执行日志
import logger from 'redux-logger';
// 切片 State
import counterReducer from '/@/components/counter/counterSlice';

// 初始化 State
const preloadedState = {};

export default configureStore({
  // 切片 State
  reducer: {
    counter: counterReducer,
  },
  // 中间件
  middleware: (getDefaultMiddleware: Function) => getDefaultMiddleware().concat(logger),
  // 关闭 devTools
  devTools: import.meta.env.NODE_ENV !== 'production',
  // 预装入 State
  preloadedState,
  // 增强 Reducer
  enhancers: [reduxBatch],
});
