import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

function createRouter(Router: Array<RouteInterface>): JSX.Element {
  // 懒加载实现方法
  function lazy(Component): JSX.Element {
    return (
      <Suspense fallback={<div>loading....</div>}>
        <Component />
      </Suspense>
    );
  }
  return (
    <Routes>
      {Router.map((route: RouteInterface) => {
        return <Route path={route.path} key={route.path} element={lazy(React.lazy(route.element))} />;
      })}
    </Routes>
  );
}

export default function RouterView(props: RouterViewInterface) {
  return createRouter(props.Routes);
}
