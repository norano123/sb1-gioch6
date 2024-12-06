import axios from 'axios';

const YOUTUBE_API_KEY = 'AIzaSyDJbh4xwOh2Qc_5oRrNVt5vhxDqwzQG-Rw';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

const youtubeApi = axios.create({
  baseURL: YOUTUBE_API_URL,
  params: {
    key: YOUTUBE_API_KEY,
    part: 'snippet,statistics,contentDetails',
    maxResults: 50,
  },
});

export const searchVideos = async (query: string) => {
  const { data } = await youtubeApi.get('/search', {
    params: {
      q: query,
      type: 'video',
    },
  });

  const videoIds = data.items.map((item: any) => item.id.videoId).join(',');
  const { data: videosData } = await youtubeApi.get('/videos', {
    params: {
      id: videoIds,
    },
  });

  return videosData.items.map((item: any) => ({
    id: item.id,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url,
    channelTitle: item.snippet.channelTitle,
    channelId: item.snippet.channelId,
    views: parseInt(item.statistics.viewCount),
    publishedAt: item.snippet.publishedAt,
    duration: formatDuration(item.contentDetails.duration),
  }));
};

export const getPopularVideos = async () => {
  const { data } = await youtubeApi.get('/videos', {
    params: {
      chart: 'mostPopular',
      regionCode: 'FR',
    },
  });

  return data.items.map((item: any) => ({
    id: item.id,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url,
    channelTitle: item.snippet.channelTitle,
    channelId: item.snippet.channelId,
    views: parseInt(item.statistics.viewCount),
    publishedAt: item.snippet.publishedAt,
    duration: formatDuration(item.contentDetails.duration),
  }));
};

const formatDuration = (duration: string) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');

  let result = '';
  if (hours) result += `${hours}:`;
  result += `${minutes.padStart(2, '0')}:`;
  result += seconds.padStart(2, '0');

  return result;
};