import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductByID,
} from "../controllers/productController.js";

router.route("/").get(getProducts);

router.route("/:id").get(getProductByID);

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {})
// );

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {})
// );

export default router;
