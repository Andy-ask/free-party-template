// 不可变数据代替 react useState
import { useImmer } from 'use-immer';
// redux 的钩子
import { useSelector, useDispatch } from 'react-redux';
// 切片 State 暴露出来的钩子
import { decrement, increment, incrementByAmount, synchronizeAmount, incrementAsync, selectCount } from './counterSlice';
// 当前页面的 scss
import './counter.scss';
import axios from 'axios';

export default function Counter() {
  // redux 切片的 state
  const count = useSelector(selectCount);
  // redux 钩子
  const dispatch = useDispatch();

  // 不可变数据
  const [number, updateValue] = useImmer({
    value: '',
    value2: 0,
  });

  // 设置数据
  function setValue(v: string) {
    updateValue((draft) => {
      draft.value = v;
      draft.value2 = v ? Number(v) : 0;
    });
  }

  const countMap = new Map([
    // 增加，redux 方法
    ['add', () => dispatch(increment())],
    // 减少，redux 方法
    ['sub', () => dispatch(decrement())],
    // 直接添加
    [
      'addDirectly',
      () => {
        dispatch(incrementByAmount(number.value2));
      },
    ],
    // 异步添加
    ['incrementAsync', () => dispatch(incrementAsync(number.value2))],
    // 同步数据
    ['synchronizeCount', () => dispatch(synchronizeAmount(number.value2))],
    // 同步随机数
    [
      'randomCount',
      () => {
        axios.get('/api/getData').then((res) => {
          dispatch(synchronizeAmount(res.data.data));
        });
      },
    ],
  ]);

  return (
    <div className='counter-box'>
      <div className='box-item'>
        <h1>例 1</h1>
        <span>这是 redux slice 的例子</span>
        <span>Value: {count}</span>
        <div className='mt-3'>
          <button onClick={countMap.get('add')}>增加</button>
          <button onClick={countMap.get('sub')}>减少</button>
          <button onClick={countMap.get('randomCount')}>随机数据</button>
        </div>
      </div>
      <div className='box-item'>
        <h1>例 2</h1>
        <span>这是 redux 与 react hooks 交互的例子</span>
        <input placeholder='设置添加或同步的数值' value={number.value} onChange={(e) => setValue(e.target.value)} />
        <div className='mt-3'>
          <button onClick={countMap.get('addDirectly')}>直接添加</button>
          <button onClick={countMap.get('incrementAsync')}>异步添加</button>
          <button onClick={countMap.get('synchronizeCount')}>同步数据</button>
        </div>
      </div>
    </div>
  );
}
