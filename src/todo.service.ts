import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Todos, Prisma } from '@prisma/client';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async todo(
    todosWhereUniqueInput: Prisma.TodosWhereUniqueInput,
  ): Promise<Todos | null> {
    return this.prisma.todos.findUnique({
      where: todosWhereUniqueInput,
    });
  }

  async todos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TodosWhereUniqueInput;
    where?: Prisma.TodosWhereInput;
    orderBy?: Prisma.TodosOrderByWithRelationInput;
  }): Promise<Todos[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.todos.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createTodo(data: Prisma.TodosCreateInput): Promise<Todos> {
    return this.prisma.todos.create({
      data,
    });
  }

  async deleteTodo(id: number): Promise<Todos> {
    return this.prisma.todos.delete({
      where: { id },
    });
  }
}
