import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../type'
import toast from 'react-hot-toast'
import { productData } from '@/constants/data'

export interface StoreState{
  productData:Product[], 
  userInfo:null | string,
  orderData: [], 
  wishlist: Product[]
}

const initialState: StoreState= {
    productData: [],
    userInfo: null,
    orderData: [], 
    wishlist: []
  }

  export const slicer = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
      addToCart: (state,action) => {
        const existingProduct = state.productData.find((item:Product) => item._id === action.payload._id)
        if(existingProduct){
          existingProduct.quantity += action.payload.quantity
        }else{
          state.productData.push(action.payload)
        }
      }, 
      addToWishlist: (state,action) => {
        const existingProduct = state.wishlist.find((item:Product) => item._id === action.payload._id)
        !existingProduct && state.wishlist.push(action.payload)
      },
      
      removeFromWishlist: (state,action) => {
        state.wishlist = state.wishlist.filter((item:Product) => item._id !== action.payload._id)

      },
      increaseQuantity: (state,action)=> {
        const existingProduct = state.productData.find((item:Product) => item._id === action.payload._id)
        existingProduct && existingProduct.quantity++;
      },
      decreaseQuantity: (state,action)=> {
        const existingProduct = state.productData.find((item:Product) => item._id === action.payload._id)
        if(existingProduct?.quantity === 1){
          state.productData = state.productData.filter(item => item._id !== existingProduct._id);
        }else{
          existingProduct && existingProduct.quantity--;
        }
      }, 
      deleteProduct : (state, action) => {
        state.productData = state.productData.filter(item => item._id !== action.payload);
      }, 
      resetCart : (state) => {
        state.productData = []
      },
      addUser: (state,action) => {
        state.userInfo = action.payload;
      }, 
      deleteUser : (state) => {
        state.userInfo = null
      }
    },
  })

  export const {addToCart,addToWishlist, removeFromWishlist, increaseQuantity, decreaseQuantity, deleteProduct, resetCart, addUser, deleteUser} = slicer.actions;

  export default slicer.reducer;