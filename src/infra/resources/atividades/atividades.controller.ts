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
import { AtividadesService } from './atividades.service';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
// import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { ApiTags } from '@nestjs/swagger';
import { UUIDGuard } from '../utils/uuidguard/uuidguard.guard';
import { StartAtividadeDto } from './dto/start-atividade.dto';
import { EndAtividadeDto } from './dto/end-atividade.dto';

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
  @UseGuards(UUIDGuard) // Aplicando o guard
  findOne(@Param('id') id: string) {
    return this.atividadesService.findOne(id);
  }

  @Patch('start/:id')
  startAtividade(
    @Param('id') id: string,
    @Body() updateAtividadeDto: StartAtividadeDto,
  ) {
    return this.atividadesService.iniciarAtividade(
      id,
      updateAtividadeDto.horario_de_incio,
    );
  }
  @Patch('end/:id')
  endAtividade(
    @Param('id') id: string,
    @Body() updateAtividadeDto: EndAtividadeDto,
  ) {
    return this.atividadesService.finalizarAtividade(
      id,
      updateAtividadeDto.horario_de_termino,
    );
  }
  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateAtividadeDto: UpdateAtividadeDto,
  // ) {
  //   return this.atividadesService.update(id, updateAtividadeDto);
  // }

  @Delete(':id')
  @UseGuards(UUIDGuard)
  remove(@Param('id') id: string) {
    return this.atividadesService.remove(id);
  }
}
