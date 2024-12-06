import { FC } from 'react';
import { Link } from 'react-router-dom';
import { formatViews, formatDate } from '../../utils/formatters';

interface VideoInfoProps {
  channelTitle: string;
  channelAvatar: string;
  title: string;
  views: number;
  publishedAt: string;
}

const VideoInfo: FC<VideoInfoProps> = ({
  channelTitle,
  channelAvatar,
  title,
  views,
  publishedAt,
}) => {
  return (
    <div className="flex gap-3 mt-3">
      <img
        src={channelAvatar}
        alt={channelTitle}
        className="h-9 w-9 rounded-full"
      />
      <div>
        <h3 className="font-semibold line-clamp-2">{title}</h3>
        <Link to={`/channel/${channelTitle}`} className="text-sm text-gray-600 hover:text-black">
          {channelTitle}
        </Link>
        <div className="text-sm text-gray-600">
          {formatViews(views)} vues • {formatDate(publishedAt)}
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;