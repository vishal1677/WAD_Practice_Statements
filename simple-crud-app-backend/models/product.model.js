const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    rollno: {
      type: String,
      required: [true, "Please enter product name"],
    },
    wadmarks: {
      type: Number,
      required: true,
      default: 0,
    },
    cnsmarks: {
      type: Number,
      required: true,
      default: 0,
    },
    ccmarks: {
      type: Number,
      required: true,
      default: 0,
    },
    dsbdamarks:  {
      type: Number,
      required: true,
      default: 0,
    },
    aimarks:  {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;