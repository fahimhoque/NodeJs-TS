import { Product } from "../../interfaces";
import { ProductOutput } from "../../db/models/product";

export const toProduct = (product: ProductOutput): Product => {
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        slug: product.slug,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        deletedAt: product.deletedAt,
    };
}