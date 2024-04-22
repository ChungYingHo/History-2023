import { createContext, useState } from 'react'
import items from './items'

const CartContext = createContext()

export function CartProvider({children}){
    // 這一段是為了更改資料狀態
    const [cart, setCart] = useState(items)
    // 用已知購物車資料計算總價
    const total = cart.reduce((acc, item) => {
        let sumItemPrice = item.quantity * item.price
        return acc + sumItemPrice
    }, 0)

    return(
        <CartContext.Provider value={{ cart, setCart, total }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext