import express from "express";
import { ProductsController } from "../../controllers/admin/products-controller.js";
import { Cloudinary } from "../../helpers/cloudinary.js";

const router = express.Router();

router.post(
  "/upload-image",
  Cloudinary.upload.single("my_file"),
  ProductsController.handleImageUpload
);

router.post("/add", ProductsController.addProduct);
router.put("/edit/:id", ProductsController.editProduct);
router.delete("/delete/:id", ProductsController.deleteProduct);
router.get("/get", ProductsController.fetchAllProducts);

export const AdminProductsRoutes = router;
