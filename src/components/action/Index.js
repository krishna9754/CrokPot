export const setProducts = (item) => {
    return {
        type: "SET_PRODUCTS",
        payload: item
    }
}

export const selectProduct = (id) => {
    return {
        type: "SELECT_PRODUCT",
        payload: id
    }
}
