import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from '../../redux/cart/cart.selector'

const CartIcon = ({ toggleCartHidden,itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps =(state)=>({
  itemCount : selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatxh) => ({
  toggleCartHidden: () => dispatxh(toogleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);