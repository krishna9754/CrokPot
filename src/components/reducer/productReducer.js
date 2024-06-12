const initialState = {
    Product: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return{
                ...state,
                Product: action.payload
            }
        case 'SELECT_PRODUCT':
        default:
            return state
    }
}

export default productReducer
