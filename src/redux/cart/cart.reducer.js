import { CartActionTypes } from "./cart.types";

const INITIAL_STATE={
    hidden :true,
}

const cartRdeucer =(state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case CartActionTypes.TOOGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
            
    
        default:
            return state;
    }
}

export default cartRdeucer;