import express from 'express';

import livereload from 'livereload';
import connectLivereload from 'connect-livereload';

import path from 'path';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { config as dotEnvConfig } from 'dotenv';
import cors from 'cors';

import { requestLogger, errorLogger } from './middlewares/logger';
import errorHandler from './middlewares/errorHandler';

import corsOptions from './utils/corsOptions';

import { NotFoundError } from './errors';

import limiter from './utils/limiter';

dotEnvConfig();

const helmetConfig = {
  useDefaults: true,
  directives: {
    defaultSrc: ["'self'", 'https://auth.nomoreparties.co/', 'https://messenger.ntlstl.dev/', 'https://ya-praktikum.tech/api/v2/', 'https://localhost:3001/', 'wss://ya-praktikum.tech/ws/'],
    scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://auth.nomoreparties.co/', 'https://messenger.ntlstl.dev/', 'https://ya-praktikum.tech/api/v2/', 'https://localhost:3001/', 'wss://ya-praktikum.tech/ws/'],
    connectSrc: ["'self'", 'https://auth.nomoreparties.co/', 'https://messenger.ntlstl.dev/', 'https://ya-praktikum.tech/api/v2/', 'https://localhost:3001/', 'wss://ya-praktikum.tech/ws/'],
    styleSrc: ["'self'", "'unsafe-inline'", 'https://messenger.ntlstl.dev/', 'https://ya-praktikum.tech/api/v2/', 'https://localhost:3001/', 'wss://ya-praktikum.tech/ws/'],
    imgSrc: ["'self'", 'https://messenger.ntlstl.dev/', 'https://ya-praktikum.tech/api/v2/', 'https://localhost:3001/', 'wss://ya-praktikum.tech/ws/'],
  },
};

const port = process.env.PORT ?? 3000;

const app = express();

// app.use(cors());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(limiter);

if (process.env.NODE_ENV === 'production') {
  app.use(helmet.hidePoweredBy());
  app.use(helmet.contentSecurityPolicy(helmetConfig));
}

if (process.env.NODE_ENV === 'development') {
  const liveReloadServer = livereload.createServer();

  liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
      liveReloadServer.refresh('/');
    }, 100);
  });

  app.use(connectLivereload());
}

app.use('/static', express.static(path.resolve(process.cwd(), 'static')));
app.use(express.static(path.resolve(__dirname), { extensions: ['css', 'js'] }));

app.get('/service-worker.js', (_req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'service-worker.js'));
});

app.get('*', (_req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, 'index.html'));
});

app.use('*', () => {
  throw new NotFoundError('HTTP 404 Not Found');
});

app.use(errorLogger);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
