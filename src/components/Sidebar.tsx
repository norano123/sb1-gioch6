import { FC } from 'react';
import { AiFillHome, AiOutlineHistory, AiOutlineLike } from 'react-icons/ai';
import { MdSubscriptions, MdVideoLibrary } from 'react-icons/md';
import { RiVideoLine } from 'react-icons/ri';
import SidebarItem from './sidebar/SidebarItem';

const Sidebar: FC = () => {
  return (
    <div className="w-64 bg-white fixed h-full left-0 top-14 p-4">
      <div className="space-y-4">
        <SidebarItem to="/" icon={<AiFillHome />} label="Accueil" />
        <SidebarItem to="/shorts" icon={<RiVideoLine />} label="Shorts" />
        <SidebarItem to="/subscriptions" icon={<MdSubscriptions />} label="Abonnements" />
        <hr />
        <SidebarItem to="/library" icon={<MdVideoLibrary />} label="Bibliothèque" />
        <SidebarItem to="/history" icon={<AiOutlineHistory />} label="Historique" />
        <SidebarItem to="/liked" icon={<AiOutlineLike />} label="Vidéos J'aime" />
      </div>
    </div>
  );
};

export default Sidebar;