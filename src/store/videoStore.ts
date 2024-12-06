import { create } from 'zustand';
import { getPopularVideos, searchVideos } from '../services/youtube';
import { Video } from '../types/video';

interface VideoStore {
  videos: Video[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fetchVideos: () => Promise<void>;
  searchForVideos: () => Promise<void>;
}

export const useVideoStore = create<VideoStore>((set, get) => ({
  videos: [],
  loading: false,
  error: null,
  searchQuery: '',
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  fetchVideos: async () => {
    try {
      set({ loading: true, error: null });
      const videos = await getPopularVideos();
      set({ videos, loading: false });
    } catch (error) {
      set({ error: 'Erreur lors du chargement des vidéos', loading: false });
    }
  },
  
  searchForVideos: async () => {
    const { searchQuery } = get();
    if (!searchQuery.trim()) return;
    
    try {
      set({ loading: true, error: null });
      const videos = await searchVideos(searchQuery);
      set({ videos, loading: false });
    } catch (error) {
      set({ error: 'Erreur lors de la recherche', loading: false });
    }
  },
}));