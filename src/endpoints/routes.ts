import express from 'express';

const router = express.Router();

// create read update delete

router.post("/product/create", (req, res) => {
    res.send("create product");
});

router.get("/product/getall", (req, res) => {
    res.send("get all product");
});

router.get("/product/get/:id", (req, res) => {
    res.send("get product by id");
});

router.post("/product/update", (req, res) => {
    res.send("update product");
});

router.post("/product/delete", (req, res) => {
    res.send("delete product");
});

export default router;