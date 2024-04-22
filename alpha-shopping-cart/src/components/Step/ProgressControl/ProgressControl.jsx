import NextBtn from '../../Button/NextBtn/NextBtn'
import PrevBtn from '../../Button/PrevBtn/PrevBtn'
import SubmitBtn from '../../Button/SubmitBtn/SubmitBtn'
import styles from './ProgressControl.module.css'
import { useContext } from 'react'
import StepContext from '../StepContext'
import CartContext from '../../Cart/CartContext'

export default function ProgressControl({page, setPage}){
    const handleNextPage = () => setPage(prevPage => prevPage = prevPage + 1)
    const handlePrevPage = () => setPage(prevPage => prevPage = prevPage - 1)

    const {total} = useContext(CartContext)
    const {info} = useContext(StepContext)
    const handleSubmit = ()=>{
        alert(`確認下單\n總價：${total}\n持卡人姓名：${info.cardName}\n卡號：${info.cardNumber}\n有效期限：${info.dates}\nCCC/CCV：${info.ccc}`)
        console.log(`確認下單\n總價：${total}\n持卡人姓名：${info.cardName}\n卡號：${info.cardNumber}\n有效期限：${info.dates}\nCCC/CCV：${info.ccc}`)
    }

    return(
        <section className={styles.container}>
            {page === 1 && 
            <div className={styles.step1}>
                <NextBtn onClick={handleNextPage}/>
            </div>
            }

            {page === 2 && 
            <div className={styles.other_steps}>
                <PrevBtn onClick={handlePrevPage}/>
                <NextBtn onClick={handleNextPage}/>
            </div>
            }
            
            {page === 3 && 
            <div className={styles.other_steps}>
                <PrevBtn onClick={handlePrevPage}/>
                <SubmitBtn onClick={handleSubmit}/>
            </div>
            }
        </section>
    )
}