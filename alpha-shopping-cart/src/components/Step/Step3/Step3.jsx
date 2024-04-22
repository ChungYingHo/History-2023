import styles from './Step3.module.css'
import { useContext } from 'react'
import StepContext from '../StepContext'

export default function Step3(){
    const {setInfo} = useContext(StepContext)

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  }

    return(
        <section className={styles.container}>
            <h3 className={styles.title}>付款資訊</h3>
            <form className={styles.form}>
                <div className={`${styles.group} ${styles.name}`}>
                    <div>持卡人姓名</div>
                    <input type="text" placeholder="John Doe" className={styles.input} name="cardName" onChange={handleInputChange}/>
                </div>

                <div className={`${styles.group} ${styles.card_number}`}>
                    <div>卡號</div>
                    <input type="text" placeholder="1111 2222 3333 4444" className={styles.input} name="cardNumber" onChange={handleInputChange}/>
                </div>

                 <div className={`${styles.group} ${styles.dates}`}>
                    <div>有效期限</div>
                    <input type="text" placeholder="MM/YY" className={styles.input} name="dates" onChange={handleInputChange}/>
                </div>

                <div className={`${styles.group} ${styles.ccc}`}>
                    <div>CVC / CCV</div>
                    <input type="text" placeholder="123" className={styles.input} name="ccc" onChange={handleInputChange}/>
                </div>
            </form>
        </section>
    )
}