import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AtividadesService } from './atividades.service';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('atividades')
@Controller('atividades')
export class AtividadesController {
  constructor(private readonly atividadesService: AtividadesService) {}

  @Post()
  create(@Body() createAtividadeDto: CreateAtividadeDto) {
    return this.atividadesService.create(createAtividadeDto);
  }

  @Get()
  findAll() {
    return this.atividadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atividadesService.findOne(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateAtividadeDto: UpdateAtividadeDto,
  // ) {
  //   return this.atividadesService.update(id, updateAtividadeDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atividadesService.remove(id);
  }
}
