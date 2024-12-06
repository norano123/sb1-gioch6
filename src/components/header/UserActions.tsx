import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BsCameraVideo, BsBell } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import Button from '../ui/Button';
import { useAuthStore } from '../../store/authStore';

const UserActions: FC = () => {
  const { isAuthenticated, user, logout } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-4">
        <Link to="/register">
          <Button>S'inscrire</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link to="/studio">
        <Button variant="icon">
          <BsCameraVideo className="text-xl" />
        </Button>
      </Link>
      <Button variant="icon">
        <BsBell className="text-xl" />
      </Button>
      <div className="relative group">
        <Button variant="icon">
          {user?.avatar ? (
            <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full" />
          ) : (
            <AiOutlineUser className="text-xl" />
          )}
        </Button>
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
          <div className="py-1">
            <Link to={`/channel/${user?.channelName}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Ma chaîne
            </Link>
            <Link to="/studio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              YouTube Studio
            </Link>
            <button
              onClick={logout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserActions;