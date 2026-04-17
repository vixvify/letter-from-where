import http from "@/lib/http";
import { ApiResponse } from "../interface/response";
import { IDataRepository } from "@/core/ports/data.repository";
import { IData, ICreateData } from "@/core/domain/data";
import { parseSchema } from "@/lib/validation";
import { createDataSchema } from "@/core/domain/data.schema";

export class DataRepository implements IDataRepository {
  async getData(): Promise<ApiResponse<IData[]>> {
    const response = await http.get<ApiResponse<IData[]>>(`/api/get-data`);
    return response.data;
  }

  async createData(data: ICreateData): Promise<ApiResponse<IData>> {
    const payload = parseSchema(createDataSchema, data);
    const response = await http.post<ApiResponse<IData>>(
      `/api/create-data`,
      payload,
    );
    return response.data;
  }
}
