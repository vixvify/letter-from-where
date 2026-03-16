import { IData, ICreateData } from "../domain/data";
import { IDataRepository } from "../ports/data.repository";

export class DataService {
  constructor(private readonly dataRepository: IDataRepository) {}

  async getData(): Promise<IData[]> {
    const response = await this.dataRepository.getData();
    return response.data;
  }

  async createData(data: ICreateData): Promise<IData> {
    const response = await this.dataRepository.createData(data);
    return response.data;
  }
}
