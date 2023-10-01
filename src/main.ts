import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('GYM RES API')
    .setDescription('Endpoints for gym system')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      bearerFormat: 'Bearer token',
      in: 'header',
      scheme: 'bearer',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);

  console.log(`App running on :${process.env.PORT}`);
}
bootstrap();
