
import { Entities } from "../types/gameTypes";


export const createSystemWrapper = (system: (entities: Entities, args: any) => Entities) => {
  return system;
};