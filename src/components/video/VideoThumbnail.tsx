import { FC } from 'react';
import { Link } from 'react-router-dom';

interface VideoThumbnailProps {
  id: string;
  thumbnail: string;
  title: string;
  duration: string;
}

const VideoThumbnail: FC<VideoThumbnailProps> = ({ id, thumbnail, title, duration }) => {
  return (
    <Link to={`/watch/${id}`} className="relative">
      <img
        src={thumbnail}
        alt={title}
        className="w-full aspect-video object-cover rounded-xl"
      />
      <span className="absolute bottom-1 right-1 bg-black text-white text-sm px-2 py-1 rounded">
        {duration}
      </span>
    </Link>
  );
};

export default VideoThumbnail;