import "./cart-dropdown.styles.scss";

import { useDispatch, useSelector } from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import React from "react";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { useHistory } from "react-router-dom";

const CartDropdown = () => {
  const  cartItems=useSelector(selectCartItems)
  const dispatch=useDispatch();
  const history=useHistory();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toogleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};


export default CartDropdown;
