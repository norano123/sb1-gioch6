import { FC } from 'react';
import { Video } from '../../types/video';
import VideoThumbnail from './VideoThumbnail';
import VideoInfo from './VideoInfo';

interface VideoCardProps {
  video: Video;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="flex flex-col">
      <VideoThumbnail
        id={video.id}
        thumbnail={video.thumbnail}
        title={video.title}
        duration={video.duration}
      />
      <VideoInfo
        channelTitle={video.channelTitle}
        channelAvatar={video.channelAvatar}
        title={video.title}
        views={video.views}
        publishedAt={video.publishedAt}
      />
    </div>
  );
};

export default VideoCard;