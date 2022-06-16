 import * as types from './actionTypes'    //import every thing from actionTypes

 const initialstate = {
    products : [],
    error : '',
    loading : true,
 };

 const reducer = (state = initialstate, action) =>{
    const{type, payload} = action;              //geting payload and action from itself
    switch(type){ 
        case types.FETCH_DATA_REQUEST :
            return {
                ...state,
                error: '',
                loading : true,   
            };
        case types.FETCH_DATA_SUCCESS :
            return {
                ...state,
                products: payload,
                error: '',
                loading : false
            }
        case types.FETCH_DATA_FAILURE :
            return {
                ...state,
                error: payload,
                loading : false,
            }
        default : 
        return state;
    }
 }