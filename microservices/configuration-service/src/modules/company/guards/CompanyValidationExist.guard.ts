import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { ICompanyRepository } from '../interfaces/repositories/ICompanyRepository';

@Injectable()
export class CompanyValidationExistGuard implements CanActivate {
  constructor(
    @Inject('CompanyRepository') private compRepo: ICompanyRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = await context.switchToHttp().getRequest();

    const comp = await this.compRepo.findById({ id: req.id });

    if (!comp) throw new RpcException('Empresa não encontrada');

    return true;
  }
}
