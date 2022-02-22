import Mock from 'mockjs';

const doMain = '/api/';

Mock.mock(doMain + 'getData', () => {
  return {
    code: 200,
    message: 'OK',
    data: Math.round(Math.random() * 30) + 20,
  };
});
