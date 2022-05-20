import { Op } from "sequelize";
import { isEmpty } from "lodash";

import { Product } from "../db/models";
import { GetAllProductsFilters } from "./types";
import { ProductInput, ProductOutput } from "../db/models/product";

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
    const product = await Product.create(payload);
    return product;
}

export const findOrCreate = async (payload: ProductInput): Promise<ProductOutput> => {
    const [product] = await Product.findOrCreate({
        where: {
            name: payload.name,
        },
        defaults: payload,
    });
    return product;
}

export const update = async (id: number, payload: Partial<ProductInput>) : Promise<ProductOutput> => {
    const product = await Product.findByPk(id);
    if (!product) {
        throw new Error("Product not found");
    }
    const updatedIngredient = await product.update(payload);
    return updatedIngredient;
}

export const getById = async (id: number): Promise<ProductOutput> => {
    const product = await Product.findByPk(id);
    if (!product) {
        throw new Error("Product not found");
    }
    return product;
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedProductCount = await Product.destroy({
        where: {
            id,
        },
    });
    return !!deletedProductCount;
}

export const getAll = async (filters?: GetAllProductsFilters): Promise<ProductOutput[]> => {
    return Product.findAll({
        where: {
            ...(filters?.isDeleted && { deletedAt: { [Op.ne]: null } }),
        },
        ...((filters?.isDeleted) && {paranoid: true})
    });
}

export const checkSlugExists = async (slug: string): Promise<boolean> => {
    const productWithSlug = await Product.findOne({
        where: {
            slug,
        },
    });
    return !isEmpty(productWithSlug);
}

