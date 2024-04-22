import styles from './Item.module.css'
import {ReactComponent as Minus} from '../../../icons/minus.svg'
import {ReactComponent as Plus} from '../../../icons/plus.svg'
import { useContext } from "react"
import CartContext from '../CartContext'


export default function Item({item}){
    // 引進資料狀態
    const { cart, setCart } = useContext(CartContext)
    // 點擊按鈕更新購物車商品數量的函示
    const handleUpdated = amount=>{
        const updatedCart = cart.map(cartItem=>
            cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + amount} : cartItem)
        if(amount === -1){
            item.quantity > 0 && setCart(updatedCart)
        } else{
            setCart(updatedCart)
        }
    }


    return(
        <div className={styles.product_container}>
            <img src={item.img} alt={item.name} className={styles.img} />
            <div className={styles.product_info}>
                <div className={styles.left_area}>
                    <span className={styles.product_name}>{item.name}</span>
                    <div className={styles.product_controller}>
                        {/* 商品數量大於0才可以減1 */}
                        <Minus className={styles.btn} onClick={()=>handleUpdated(-1)}/>
                        <span className={styles.product_count}>{item.quantity}</span>
                        <Plus className={styles.btn} onClick={()=>handleUpdated(1)}/>
                    </div>
                </div>
                <span className={styles.price}>${item.price * item.quantity}</span>
            </div>
        </div>
    )
}
