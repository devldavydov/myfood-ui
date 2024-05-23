import axios from "axios";
import { IApiResponse } from "./Common";

export interface IFood {
  key: string;
  name: string;
  brand: string;
  cal100: number;
  prot100: number;
  fat100: number;
  carb100: number;
  comment: string;
}

export async function getFoodList() {
  const resp = await axios.get<IApiResponse>("/api/food");

  let respFood: IFood[] = [];
  for (let f of resp.data.data) {
    respFood.push({
      key: f.key,
      name: f.name,
      brand: f.brand,
      cal100: f.cal100,
      fat100: f.fat100,
      carb100: f.carb100,
      comment: f.comment,
    } as IFood);
  }

  return respFood;
}
