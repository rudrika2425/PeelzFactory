import React, { createContext } from 'react'
import { product } from '../data/product';

export const ShopContext=createContext(null);
//initilaizes new context
// A React API used to create a context for managing global state.
const ShopContextProvider = (props) => {
    const contextValue={product};
  return (
    
    <ShopContext.Provider value={contextValue}>
     {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
