"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductCOntroller_1 = require("../controllers/ProductCOntroller");
const router = (0, express_1.Router)();
router.get("/", ProductCOntroller_1.getProducts);
router.post("/", ProductCOntroller_1.createProduct);
exports.default = router;
