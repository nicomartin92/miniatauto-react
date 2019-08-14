export const deleteStock = (value) => {
    return {
        type: 'UPDATE__STOCK',
        stock: value
    }
}