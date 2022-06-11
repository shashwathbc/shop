//Action function will get called in reducer.js there we will check the type , only if it matches the data will get added


// an initial state to store the data that is getting added
const INIT_STATE = {
    carts : []
};

export const cartreducer = (state=INIT_STATE , action) => {
  switch(action.type){
      case "ADD_CART" :
        // return {
        //     // carts: [action.payload]   //this will add the data in cart but the problem will be if we add any other item then it will get replaced by this new data
        //     //to solve that we will do this:
        //     ...state,
        //     carts:[...state.carts,action.payload]  //but this also has a problem whenever we add the same
        //     // item again it gets added again but not show as quantity
        // }
//to solve all these we will write a const itemindex and find if item exist in cart ,if it does we will increment it by 1
const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
if(ItemIndex >= 0){
  state.carts[ItemIndex].qnty += 1   //qnty from json data
}else{
  const temp = {...action.payload , qnty:1}
  return {
    ...state,
    carts:[...state.carts , temp]
  }
}
      case "DELETE_ITEM" : 
        const data = state.carts.filter((el)=> el.id !== action.payload);
        return {
          ...state , 
          carts:data
        }


        case "RMV_ONE" : 
        const ItemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);
        if(state.carts[ItemIndex_dec].qnty >= 1){
            const dltitem = state.carts[ItemIndex_dec].qnty -= 1;
            console.log([...state.carts,dltitem]);
               
            return {
              ...state , 
              carts: [...state.carts]
            }
        }else if(state.carts[ItemIndex_dec].qnty === 1){
          const data = state.carts.filter((el) => el.id  !== action.payload.id);
          return {
            ...state,
            carts:data
          }
        }

        default : return state
  }
}

