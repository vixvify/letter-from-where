import { DataRepository } from "./repositories/data.repository";
import { DataService } from "@/core/service/data.service";
import { AuthRepository } from "./repositories/auth.repository";
import { AuthService } from "@/core/service/auth.service";

const dataRepository = new DataRepository();
export const dataService = new DataService(dataRepository);

const authRepository = new AuthRepository();
export const authService = new AuthService(authRepository);
