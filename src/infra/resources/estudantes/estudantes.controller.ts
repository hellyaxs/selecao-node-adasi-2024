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
import { EstudantesService } from './estudantes.service';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';
import { UUIDGuard } from '../utils/uuidguard/uuidguard.guard';

@ApiTags('estudantes')
@Controller('estudantes')
export class EstudantesController {
  constructor(private readonly estudantesService: EstudantesService) {}

  @Post()
  create(@Body() createEstudanteDto: CreateEstudanteDto) {
    return this.estudantesService.create(createEstudanteDto);
  }

  @Get()
  findAll() {
    return this.estudantesService.findAll();
  }

  @Get(':id')
  @UseGuards(UUIDGuard)
  findOne(@Param('id') id: string) {
    return this.estudantesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(UUIDGuard)
  update(
    @Param('id') id: string,
    @Body() updateEstudanteDto: UpdateEstudanteDto,
  ) {
    return this.estudantesService.update(id, updateEstudanteDto);
  }

  @Delete(':id')
  @UseGuards(UUIDGuard)
  remove(@Param('id') id: string) {
    return this.estudantesService.remove(id);
  }
}
