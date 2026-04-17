import { IAuthRepository } from "../ports/auth.repository";
import { AuthResponse } from "../domain/auth";

export class AuthService {
  constructor(private readonly authRepository: IAuthRepository) {}

  async login(password: string): Promise<AuthResponse> {
    const response = await this.authRepository.login(password);
    return response.data;
  }
}
