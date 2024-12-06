import { FC, FormEvent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useVideoStore } from '../../store/videoStore';
import Input from '../ui/Input';
import Button from '../ui/Button';

const SearchBar: FC = () => {
  const { searchQuery, setSearchQuery, searchForVideos } = useVideoStore();

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    await searchForVideos();
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center flex-1 max-w-2xl mx-4">
      <div className="flex flex-1">
        <Input
          type="text"
          placeholder="Rechercher"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          type="submit"
          className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200"
        >
          <AiOutlineSearch className="text-xl" />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;