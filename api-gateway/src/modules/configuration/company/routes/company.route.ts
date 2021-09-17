import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CompanyInterface,
  ICompanyGrpcService,
} from 'src/shared/modules/grpc-client/configuration-service/interfaces/grpc/ICompanyGrpcService';
import { CompanyFindByIdService } from '../services/company/CompanyFindById.service';
import { CompanyGetAllService } from '../services/company/CompanyGetAll.service';

@Controller()
export class CompanyRoute implements OnModuleInit {
  private companyGrpcService: ICompanyGrpcService;

  constructor(@Inject('CONFIGURATION_PKG') private clientGrpc: ClientGrpc) {}

  onModuleInit(): void {
    this.companyGrpcService =
      this.clientGrpc.getService<ICompanyGrpcService>('CompanyService');
  }

  @Get()
  getAll(): Promise<CompanyInterface[]> {
    return CompanyGetAllService.handle({
      companyGrpcService: this.companyGrpcService,
    });
  }

  @Get('/:id')
  findById(@Param('id') id: number): Promise<CompanyInterface> {
    return CompanyFindByIdService.handle(
      {
        companyGrpcService: this.companyGrpcService,
      },
      id,
    );
  }
}
