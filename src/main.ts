import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { WsAdapter } from '@nestjs/platform-ws';

// import { ChatModule } from './chat/chat.module';

// import { ChatModule } from './chat/chat.module';
// 'http://localhost:3001'
// const CORS_CONFIG = {
//   origin: true,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  await app.listen(3000);
  // app.useWebSocketAdapter(new SocketAdapter(app));
}
bootstrap();
