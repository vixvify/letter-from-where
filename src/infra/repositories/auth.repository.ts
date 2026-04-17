import http from "@/lib/http";
import { ApiResponse } from "../interface/response";
import { IAuthRepository } from "@/core/ports/auth.repository";
import { AuthResponse } from "@/core/domain/auth";

export class AuthRepository implements IAuthRepository {
  async login(password: string): Promise<ApiResponse<AuthResponse>> {
    try {
      const response = await http.post<ApiResponse<AuthResponse>>(
        `/api/auth/login`,
        { password },
      );

      return response.data;
    } catch (err: unknown) {
      throw err;
    }
  }
}
