import { categoryModel } from "./category.model";

export interface productModel {
  productCode: String,
  title: String,
  imagePath: String,
  description: String,
  price: Number,
  category: categoryModel,
  manufacturer: String,
  available: Boolean,
  createdAt: Date,
}
