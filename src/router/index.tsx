import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import RouterView from './router-view';

const routes: Array<RouteInterface> = [
  { path: '/', element: () => import('/@/pages/home') },
  { path: '/about', element: () => import('/@/pages/about') },
];

export default function () {
  return (
    <BrowserRouter>
      <RouterView Routes={routes} />
      <Sidebar />
    </BrowserRouter>
  );
}
