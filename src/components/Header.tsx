import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import Button from './ui/Button';
import SearchBar from './header/SearchBar';
import UserActions from './header/UserActions';

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white h-14 flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-4">
        <Button variant="icon">
          <AiOutlineMenu className="text-2xl" />
        </Button>
        <Link to="/" className="flex items-center gap-1">
          <img src="/youtube-logo.png" alt="YouTube" className="h-5" />
        </Link>
      </div>

      <SearchBar />
      <UserActions />
    </header>
  );
};

export default Header;