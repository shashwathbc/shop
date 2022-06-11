//wheen ever tha dayta in body is clcicked this function will run and we pass type and set the data in payload
//this function will get called in reducer.js there we will check the type , 
//only if it matches the data will get added

export const ADD = (item) => {
    return {
        type : "ADD_CART",
        payload : item
    }
}

export const DELETE = (id) => {
    return {
        type : "DELETE_ITEM",
        payload : id
    }
}


//remove individual item :
export const REMOVE = (item) => {
    return {
        type : "RMV_ONE",
        payload : item
    }
}