import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const envUrl = process.env.EXPO_PUBLIC_API_URL_LOCAL;

export const api = axios.create({
  baseURL: envUrl,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export interface IApiResponse {
  code: number;
  error: string;
  status: string;
}

api.interceptors.response.use(
  (response: AxiosResponse<IApiResponse>) => {
    return response;
  },
  (error: AxiosError<IApiResponse>) => {
    if (error.response) {
      return error;
    } else if (error.request) {
      return error;
    }
  }
);

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const requestInfo = `[${config.method?.toUpperCase()}] - ${config.url}`;
  console.log(requestInfo);
  return config;
});
