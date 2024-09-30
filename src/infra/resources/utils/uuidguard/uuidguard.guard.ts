import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { validate as validateUUID } from 'uuid';

@Injectable()
export class UUIDGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const uuid = request.params.id; // ajuste conforme sua necessidade

    if (!uuid || !validateUUID(uuid)) {
      throw new BadRequestException('UUID fornecido é inválido.');
    }

    return true;
  }
}
