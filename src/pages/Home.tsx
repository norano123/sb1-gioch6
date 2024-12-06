import { FC, useEffect } from 'react';
import VideoCard from '../components/video/VideoCard';
import { useVideoStore } from '../store/videoStore';

const Home: FC = () => {
  const { videos, loading, error, fetchVideos } = useVideoStore();

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="pt-14 pl-64 flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-14 pl-64 flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="pt-14 pl-64">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;