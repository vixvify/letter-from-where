import { ApiResponse } from "@/infra/interface/response";
import { IData, ICreateData } from "../domain/data";

export interface IDataRepository {
  getData(): Promise<ApiResponse<IData[]>>;
  createData(data: ICreateData): Promise<ApiResponse<IData>>;
}
