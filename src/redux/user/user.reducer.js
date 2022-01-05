  import {userActionTypes} from './user.types'

  const INITAIL_STATE={
       currentUser:null
   }
   
   const userReducer =(state=INITAIL_STATE,action) => {
          switch (action.type) {
              case userActionTypes.SET_CURRENT_USER:
                  return {
                      ...state,
                      currentUser :action.payload
                  }
                  
          
              default:
                  return state;
          }
   }

   export default userReducer;