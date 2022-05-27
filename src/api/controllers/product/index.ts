import { ProductInput } from "../../../db/models/product";
import * as service from "../../../db/services/product.service";
import { CreateProductDTO } from "../../dto/product.dto";
import { Product } from "../../interfaces";
import * as mapper from "./mapper";


export const create = async (payload: CreateProductDTO): Promise<Product> => {
    return mapper.toProduct(await service.create(payload as ProductInput));
}