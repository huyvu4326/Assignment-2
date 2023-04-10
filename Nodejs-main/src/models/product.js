import { string } from "joi";
import mongoose from "mongoose";
import mongoosePaginate  from "mongoose-paginate-v2"
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: String,
    description: {
      type: String
    },
    link: {
      type: String
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true, versionKey: false }
);
productSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productSchema);
