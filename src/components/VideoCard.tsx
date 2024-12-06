import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Video } from '../types/video';

interface VideoCardProps {
  video: Video;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="flex flex-col">
      <Link to={`/watch/${video.id}`} className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full aspect-video object-cover rounded-xl"
        />
        <span className="absolute bottom-1 right-1 bg-black text-white text-sm px-2 py-1 rounded">
          {video.duration}
        </span>
      </Link>
      <div className="flex gap-3 mt-3">
        <img
          src={video.channelAvatar}
          alt={video.channelTitle}
          className="h-9 w-9 rounded-full"
        />
        <div>
          <h3 className="font-semibold line-clamp-2">{video.title}</h3>
          <Link to={`/channel/${video.channelTitle}`} className="text-sm text-gray-600 hover:text-black">
            {video.channelTitle}
          </Link>
          <div className="text-sm text-gray-600">
            {video.views.toLocaleString()} vues • {video.publishedAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;