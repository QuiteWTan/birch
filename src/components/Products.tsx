
import { getProducts } from "@/helpers";
import React from "react";
import Container from "./Container";
import ProductsData from "./ProductsData";
import { Product } from "../../type";
import { motion } from "framer-motion";

const Products = async () => {
  const {productData} = await getProducts();

  return (
    <Container>
      <h1 className='text-2xl md:text-3xl lg:text-5xl font-rubik mt-8 mb-2'>
            <span className="text-orange-500">RECOMMENDED PRODUCTS </span>
            BY REAL ARTISTS
            <br />
            FOR REAL PEOPLE
      </h1>
      <p className=' text-gray-400 font-urbanist pb-2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
          
          {
              productData?.map((item: Product, index:number) => (
                  !item?.isNew && <div key={index}><ProductsData item={item} key={item._id} /></div>
              ))
          }
      </div>
    </Container>
  );
};

export default Products;