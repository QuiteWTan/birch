import { productData } from "@/constants/data";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ;

export const getProducts = async() => {
    const res = await fetch(`${API_BASE_URL}/api/products`);
    if(!res.ok){
        throw new Error("Failed to fetch product");
    }
    
    return res.json();
}

export const calculatePercent = (oldPrice:any, price:any) => {
    return !!parseFloat(price) && !!parseFloat(oldPrice) ? (100-(oldPrice /price) * 100).toFixed(0) : 0;
}

export const getSingleProduct = (_id:number) => {
    const item = productData.find((product) => product._id  === _id);
    return item
}

export const getTrendingProducts = async() => {
    const res = await fetch(`${API_BASE_URL}/api/trendingproducts`);
    if(!res.ok){
        throw new Error("Failed to fetch product");
    }
    
    return res.json();
}