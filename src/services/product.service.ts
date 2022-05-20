import { kebabCase } from "lodash";

import * as productDal from "../dal/product.dal";
import { GetAllProductsFilters } from "../dal/types";
import { ProductInput, ProductOutput } from "../db/models/product";

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
    let slug = kebabCase(payload.name);
    const slugExists = await productDal.checkSlugExists(slug);
    payload.slug = slugExists ? `${slug}-${Math.floor(Math.random() * 1000)}` : slug

    return productDal.create(payload);
}

export const update = async (id: number, payload: Partial<ProductInput>): Promise<ProductOutput> => {
    if(payload.name){
        let slug = kebabCase(payload.name);
        const slugExists = await productDal.checkSlugExists(slug);

        payload.slug = slugExists ? `${slug}-${Math.floor(Math.random() * 1000)}` : slug
    }
    return productDal.update(id, payload);
}

export const getById = async (id: number): Promise<ProductOutput> => {
    return productDal.getById(id);
}

export const delteById = async (id: number): Promise<boolean> => {
    return productDal.deleteById(id);
}


export const getAll = async (filters?: GetAllProductsFilters): Promise<ProductOutput[]> => {
    return productDal.getAll(filters);
}
