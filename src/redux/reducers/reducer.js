//Action function will get called in reducer.js there we will check the type , only if it matches the data will get added


// an initial state to store the data that is getting added
const INIT_STATE = {
    carts : []
};

export const cartreducer = (state=INIT_STATE , action) => {
  switch(action.type){
      case "ADD_CART" :
        return {
            // carts: [action.payload]   //this will add the data in cart but the problem will be if we add any other item then it will get replaced by this new data
            //to solve that we will do this:
            ...state,
            carts:[...state.carts,action.payload]
        }

        default : return state
  }
}