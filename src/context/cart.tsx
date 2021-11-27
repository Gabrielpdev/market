import React ,{ createContext, ReactNode, useContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: Product[];
  addNewProduct: (product: Product) => void;
  removeCart: (id: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps){
  const [cart, setCart] = useState<Product[]>([]);

  function addNewProduct(product: Product){
    if(cart.find(item => item.id === product.id)){
      setCart(
        cart.map(item => {
          if(item.id === product.id){
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item;
        })
      )
    }else  {
      const newCart = [...cart, product];
  
      setCart(newCart);
    }
  }

  function removeCart(id: number){
    const filteredCart = cart.filter(item => item.id !== id);
    setCart(filteredCart);
  }

  return(
    <CartContext.Provider value={{
      cart,
      addNewProduct,
      removeCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){
  const context = useContext(CartContext);
  
  return context;
}