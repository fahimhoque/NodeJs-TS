import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    "backend",
    "root",
    "11814152Arnob",  
    {
        host: "127.0.0.1",
        dialect: "mysql",
    }
);


export default sequelize;