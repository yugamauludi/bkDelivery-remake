import {createSlice, current} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0,
        cartList: [],
    },
    reducers: {
        addProduct: (state, action) => {
            let payload = action.payload
            let carts = [...current(state.cartList)]
            if (carts.length) {
                let index = carts.map(cas => cas.title).indexOf(payload.title)
                if (index !== -1) {
                    let cart = carts[index]
                    carts[index] = {
                        ...cart,
                        quantity: cart.quantity + payload.quantity
                    }
                    state.cartList = carts
                }
                else state.cartList.push(action.payload)
            }
            else state.cartList.push(action.payload)
        },
        removeProduct: (state, action) => {
            let payload = action.payload
            let carts = [...current(state.cartList)]
            if (carts.length) {
                let index = carts.map(cas => cas.title).indexOf(payload.title)
                if (index !== -1) {
                    carts.splice(index,1)
                    state.cartList = carts
                }
            }
        },
        updateQuantity: (state, action) => {
            let payload = action.payload
            let carts = [...current(state.cartList)]
            if (carts.length) {
                let index = carts.map(cas => cas.title).indexOf(payload.title)
                if (index !== -1) {
                    let cart = carts[index]
                    if (payload.quantity < cart.quantity && cart.quantity === 1) carts.splice(index,1)
                    else carts[index] = payload
                    state.cartList = carts
                }
            }
        },
    },
})

export const { addProduct, removeProduct, updateQuantity } = cartSlice.actions

export const cartList = (state) => state.cart.cartList

export default cartSlice.reducer
