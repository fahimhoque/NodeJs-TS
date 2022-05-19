import sequelize from "../config";
import { DataTypes, Model, Optional } from "sequelize";

interface ProductAttributes {
    id: number;
    name: string;
    price: number;
    description: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export interface ProductInput extends Optional<ProductAttributes, "id" | 'slug'> { }
export interface ProductOutput extends Required<ProductAttributes> { }

class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
    public id!: number;
    public name!: string;
    public price!: number;
    public description!: string;
    public slug!: string;

    // TimeStamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
},{
    sequelize: sequelize,
    timestamps: true,
});

export default Product;