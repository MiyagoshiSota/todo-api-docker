import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { TodosService } from './todo.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,PrismaService,TodosService],
})
export class AppModule {}
