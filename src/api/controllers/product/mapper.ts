import {Product} from '../../interfaces'
import { ProductOutput } from "../../../db/models/product";

export const toProduct = (product: ProductOutput): Product => {
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        slug: product.slug,
        description: product.description,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        deletedAt: product.deletedAt,
    }
}