import './cart-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemFromCart, addItemToCart } = useContext(CartContext);

  const handleRemoveItem = () => {
    if (quantity > 1) {
      // If quantity is greater than 1, decrement by 1
      removeItemFromCart(cartItem);
    } else {
      // If quantity is 1, remove the item from the cart
      removeItemFromCart(cartItem);
    }
  };

  const handleAddItem = () => {
    addItemToCart(cartItem); // Pass the cartItem to add
  };

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <div className='quantity'>
          <span className='arrow' onClick={handleRemoveItem}>
            -
          </span>
          <span className='value'> {quantity} </span>
          <span className='arrow' onClick={handleAddItem}>
            +
          </span>
        </div>
        <span className='price'>Price: £{price}</span> {/* Add this line */}
      </div>
    </div>
  );
};

export default CartItem;
