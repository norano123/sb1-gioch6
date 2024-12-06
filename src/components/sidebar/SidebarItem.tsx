import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
  to: string;
  icon: ReactNode;
  label: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ to, icon, label }) => {
  return (
    <Link to={to} className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg">
      <span className="text-2xl">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;