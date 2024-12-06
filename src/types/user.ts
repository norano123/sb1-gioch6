export interface User {
  id: string;
  email: string;
  username: string;
  channelName: string;
  avatar?: string;
  isMonetized: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  username: string;
  channelName: string;
}