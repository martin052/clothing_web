import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems containsproductToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    //If found, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
        ?
        { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
        );
    }

    // return new array with modified cartItems/ new cart item
    return [...cartItems, { ...productToAdd, quantity: 1}]
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {}, // Add this function
    cartCount: 0,
    clearItemFromCart: () => {},
    cartTotal: 0,
  });


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart= (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const removeItemFromCart = (productToRemove) => {
        // Find the index of the item to remove
        const itemIndex = cartItems.findIndex(
          (cartItem) => cartItem.id === productToRemove.id
        );
      
        if (itemIndex !== -1) {
          // Create a new array with updated quantity or remove the item if quantity is 1
          const newCartItems = cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 0,
                }
              : cartItem
          );
      
          setCartItems(newCartItems.filter((item) => item.quantity > 0));
        }
      };
    const clearItemFromCart = (cartItemToClear) => {
  const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
  setCartItems(updatedCartItems);
};
    
      useEffect(() => {
        const newCartCount = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        );
        setCartCount(newCartCount);
      }, [cartItems]);

    const value = {
        isCartOpen, 
        setIsCartOpen,
        removeItemFromCart, 
        addItemToCart,
        clearItemFromCart,
        cartItems, 
        cartCount,
        cartTotal};


    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};