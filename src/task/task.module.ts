import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

@Module({
  providers: [
    TaskResolver, 
    TaskService,
  ],
  imports: [
    TypeOrmModule.forFeature([Task]),
  ],
})
export class TaskModule {}
