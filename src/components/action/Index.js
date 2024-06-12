export const setProducts = (item) => {
    return {
        type: "SET_PRODUCTS",
        payload: item
    }
}

export const selectProduct = (product) => {
    return {
        type: "SELECT_PRODUCT",
        payload: product
    }
}
