import { Router, Request, Response } from "express";

import * as productController from "../controllers/product";
import { CreateProductDTO } from "../dto/product.dto";

const productRouter = Router();

productRouter.post("/create", async (req: Request, res: Response) =>{
    const payload: CreateProductDTO = req.body;
    const result = await productController.create(payload);

    return res.status(201).json({
        message: "Product created",
        data: result
    });
});

export default productRouter;