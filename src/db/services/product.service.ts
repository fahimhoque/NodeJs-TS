import { kebabCase } from "lodash";

import * as productDAL from "../dal/product";
import { GetAllProductFilters } from "../dal/types";
import { ProductInput, ProductOutput } from "../models/product";

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
    let slug = kebabCase(payload.name);
    const slugExists = await productDAL.checkSlugExists(slug);

    payload.slug = slugExists ? `${slug}-${Math.floor(Math.random() * 1000)}` : slug
    return productDAL.create(payload);
}