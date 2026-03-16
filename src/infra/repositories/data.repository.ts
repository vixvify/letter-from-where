import http from "@/lib/http";
import { ApiResponse } from "../interface/response";
import { IDataRepository } from "@/core/ports/data.repository";
import { IData, ICreateData } from "@/core/domain/data";

export class DataRepository implements IDataRepository {
  async getData(): Promise<ApiResponse<IData[]>> {
    const response = await http.get<ApiResponse<IData[]>>(`/data`);
    return response.data;
  }

  async createData(data: ICreateData): Promise<ApiResponse<IData>> {
    const response = await http.post<ApiResponse<IData>>(`/data`, data);
    return response.data;
  }
}
