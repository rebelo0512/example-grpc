import { lastValueFrom } from 'rxjs';
import { CompanyInterface } from 'src/shared/modules/grpc-client/configuration-service/interfaces/grpc/ICompanyGrpcService';
import { IGrpcServices } from 'src/shared/modules/grpc-client/interfaces/IGrpcServices';

export class CompanyFindByIdService {
  static async handle(
    { companyGrpcService }: IGrpcServices,
    id: number,
  ): Promise<CompanyInterface> {
    return lastValueFrom(companyGrpcService.findById({ id }));
  }
}
