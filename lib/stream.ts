import api from '@shared/api/client';

export const getStreams = async () => {
  const res = await api.get('/streams');
  return res.data;
};

export const startStream = async (data: any) => {
  const res = await api.post('/streams/start', data);
  return res.data;
};