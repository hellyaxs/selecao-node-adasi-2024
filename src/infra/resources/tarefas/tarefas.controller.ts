import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { ApiTags } from '@nestjs/swagger';
import { UUIDGuard } from '../utils/uuidguard/uuidguard.guard';

@ApiTags('tarefas')
@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Post()
  create(@Body() createTarefaDto: CreateTarefaDto) {
    return this.tarefasService.create(createTarefaDto);
  }

  @Get()
  findAll() {
    return this.tarefasService.findAll();
  }

  @Get(':id')
  @UseGuards(UUIDGuard)
  findOne(@Param('id') id: string) {
    return this.tarefasService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(UUIDGuard)
  update(@Param('id') id: string, @Body() updateTarefaDto: UpdateTarefaDto) {
    return this.tarefasService.update(id, updateTarefaDto);
  }

  @Delete(':id')
  @UseGuards(UUIDGuard)
  remove(@Param('id') id: string) {
    return this.tarefasService.remove(id);
  }
}
