import styles from './Step2.module.css'
import { useState } from 'react'

export default function Step2(){
    // 記錄物流選擇的狀態
    const [logistics, setLogistics] = useState('standard')
    const handleSelected = e => setLogistics(e.target.value)

    return(
        <section className={styles.container}>
            <h3 className={styles.title}>運送方式</h3>
            <form className={styles.form}>
                <label className={styles.group}>
                    {/* 新增 value, checked判斷式, onChange 來管理更新狀態 */}
                    <input 
                        type="radio" 
                        className={styles.input} 
                        name='standard_logistics'
                        value='standard' 
                        checked={logistics === 'standard'} 
                        onChange={handleSelected}/>

                    <div className={styles.ratio_info}>
                        <div className={styles.text_container}>
                            <div className={styles.text}>標準運送</div>
                            <div className={styles.price}>免費</div>
                        </div>
                        <div className={styles.days}>約 3~7 個工作天</div>
                    </div>
                </label>

                <label className={styles.group}>
                    <input 
                        type="radio" 
                        className={styles.input} 
                        name='DHL_logistics'
                        value='DHL' 
                        checked={logistics === 'DHL'} 
                        onChange={handleSelected}/>
                        
                    <div className={styles.ratio_info}>
                        <div className={styles.text_container}>
                            <div className={styles.text}>DHL 貨運</div>
                            <div className={styles.price}>$ 500</div>
                        </div>
                        <div className={styles.days}>48 小時內送達</div>
                    </div>
                </label>
            </form>
        </section>
    )
}