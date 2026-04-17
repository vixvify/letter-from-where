import { ApiResponse } from "@/infra/interface/response";
import { AuthResponse } from "../domain/auth";

export interface IAuthRepository {
  login(password: string): Promise<ApiResponse<AuthResponse>>;
}
