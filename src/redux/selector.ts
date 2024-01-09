import { createSelector } from '@reduxjs/toolkit';
import { StateProps } from '../../type';  
import { StoreState } from './slicer';

// Assuming the slice name is 'shopping'
const selectWishlist = (state: StoreState) => state.wishlist;

export const isProductInWishlist = (productId: number) =>
  createSelector(selectWishlist, (wishlist) =>
    wishlist?.some((item) => item._id === productId)
  );
