"use client";
import { List } from "lucide-react";
import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { getallproducts } from "../../../_utils/ProductApi.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/ProductSlice.js";
const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mx-3">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default ProductList;
