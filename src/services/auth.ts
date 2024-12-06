import axios from 'axios';
import { LoginCredentials, RegisterCredentials, User } from '../types/user';

const API_URL = 'https://api.youtube.com/auth';

export const loginUser = async (credentials: LoginCredentials): Promise<User> => {
  const { data } = await axios.post(`${API_URL}/login`, credentials);
  return data;
};

export const registerUser = async (credentials: RegisterCredentials): Promise<User> => {
  const { data } = await axios.post(`${API_URL}/register`, credentials);
  return data;
};

export const uploadVideo = async (videoData: FormData): Promise<void> => {
  await axios.post(`${API_URL}/videos/upload`, videoData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};