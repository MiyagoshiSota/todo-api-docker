import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TodosService } from './todo.service';
import { Todos as TodosModel } from '@prisma/client';

@Controller('todo')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private todosService: TodosService,
  ) {}
  
  @Get('all')
  async getTodoList(): Promise<TodosModel[]> {
    return this.todosService.todos({
      where: {},
    });
  }

  @Post('add')
  async addTodo(
    @Body() postData: { todo: string; body: string },
  ): Promise<TodosModel> {
    return this.todosService.createTodo(postData);
  }

  @Delete('delete/:id')
  deleteTodo(@Param('id') id: string){
    return this.todosService.deleteTodo(+id);
  }
}
