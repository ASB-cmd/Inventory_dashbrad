import { Router } from "express";
import { createProduct, getProducts } from "../controllers/ProductCOntroller";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);

export default router;
