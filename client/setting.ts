import Env from './next.config.js';
const isProd = process.env.NODE_ENV === 'production';

const setting = {
  isProd,
  basePath: Env.basePath,
  apiPath: isProd ? '' : 'http://localhost:8000',
  wsPath: isProd ? null : 'ws://localhost:8000',
  title: '🐦 my-simple-chat-room-rb 🐦',
};

export default setting;
