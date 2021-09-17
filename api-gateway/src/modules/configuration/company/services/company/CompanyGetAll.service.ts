import { lastValueFrom } from 'rxjs';
import { CompanyInterface } from 'src/shared/modules/grpc-client/configuration-service/interfaces/grpc/ICompanyGrpcService';
import { IGrpcServices } from 'src/shared/modules/grpc-client/interfaces/IGrpcServices';

export class CompanyGetAllService {
  static async handle({
    companyGrpcService,
  }: IGrpcServices): Promise<CompanyInterface[]> {
    const { companies } = await lastValueFrom(companyGrpcService.getAll({}));

    return companies;
  }
}
