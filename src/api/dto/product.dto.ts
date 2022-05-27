import { Optional } from "sequelize/types"

export type CreateProductDTO = {
    name: string;
    price: number;
    description: string;
    slug?: string;
}

export type UpdateIngredientDTO = Optional<CreateProductDTO, 'name'>

export type FilterIngredientsDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}