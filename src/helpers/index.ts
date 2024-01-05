export const getProduct = async() => {
    const res = await fetch("http://localhost:3000/api/products");
    if(!res.ok){
        throw new Error("Failed to fetch product");
    }
    return res.json();
}