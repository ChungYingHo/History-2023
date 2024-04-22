import Item from './Item/Item'
import styles from './Cart.module.css'
import { useContext } from "react"
import CartContext from './CartContext'

export default function Cart(){
    const { cart, total } = useContext(CartContext)

    return(
        <section className={styles.container}>
            <div className={styles.cart_container}>
                <h3>購物籃</h3>

                {/* 購物車內容 */}
                {cart.map(item =>{
                    return(
                        <Item item={item} key={item.id}/>
                )})}

                <div className={styles.price}>
                    <p><b>運費</b></p>
                    <p>免費</p>
                </div>
                <div className={styles.total}>
                    <p><b>小計</b></p>
                    <p>${total}</p>
                </div>
            </div>
        </section>
    )
}