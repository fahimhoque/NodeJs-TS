import {Router, Request, Response} from 'express';

const productRouter = Router();


productRouter.get(`/all`, async (req: Request, res: Response) => {
    res.status(200).json({
        message: "List All Product",
    });
});

productRouter.get(`/:id`, async (req: Request, res: Response) => {
    res.status(200).json({
        message: "Get Product By Id",
    });
});

productRouter.post(`/create`, async (req: Request, res: Response) => {
    res.status(200).json({
        message: "Create Product",
    });
});

productRouter.put(`/update/:id`, async (req: Request, res: Response) => {
    res.status(200).json({
        message: "Update Product",
    });
});


export default productRouter;