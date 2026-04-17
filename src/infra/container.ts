import { DataRepository } from "./repositories/data.repository";
import { DataService } from "@/core/service/data.service";

const dataRepository = new DataRepository();
export const dataService = new DataService(dataRepository);
