import { Outlet } from 'react-router-dom';
import SidebarItem from './sidebar-item';
import './sidebar.css';

const sidebars: Array<SidebarItemInterface> = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
];

export default function Sidebar() {
  return (
    <div className='sidebar'>
      {sidebars.map((sidebar: SidebarItemInterface) => (
        <SidebarItem key={sidebar.label} to={sidebar.to} label={sidebar.label} />
      ))}
      <Outlet />
    </div>
  );
}
