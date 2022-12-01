import { allProducts } from '../mocks/allProduct';

export const shoppingCartInitialState = [];

export const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_SHOPPING_CART':
      const requestedProduct = allProducts.find((product) => product.id === action.payload.request.id);
      const newState = [...state];
      newState.push({
        productData: requestedProduct,
        quantity: action.payload.request.quantity,
      });
      return newState;
  }
  return state;
};
