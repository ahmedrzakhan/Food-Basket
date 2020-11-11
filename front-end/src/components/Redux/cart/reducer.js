import {ADD_PROD, SUB_PROD} from "./actionTypes"

const initState = {

    cartArrData: []
}

const cartReducer = (state = initState, action) => {

    switch(action.type)
    {
        case ADD_PROD:
            JSON.stringify(localStorage.setItem(`${action.payload.id}`, action.payload))
            return{
                ...state,
                cartArrData: []
            }
    }

}

export default cartReducer
