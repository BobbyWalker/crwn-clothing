export const addItemToCart = (cartItems, item) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id)

    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1}
                : cartItem)
    }

    return [...cartItems, { ...item, quantity: 1}]
}

export const deleteItemFromCart = (cartItems, item) => cartItems.filter(cartItem => cartItem.id !== item.id)

export const removeItemFromCart = (cartItems, item) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id)

    if(existingCartItem.quantity === 1) {
        return deleteItemFromCart(cartItems, item)
    } else {
        return cartItems.map(cartItem => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
    }
}

