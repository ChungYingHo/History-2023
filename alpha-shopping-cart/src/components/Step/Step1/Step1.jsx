import styles from './Step1.module.css'
import countries from './country'

export default function Step1(){
    return(
        <section className={styles.container}>
            <h3 className={styles.title}>寄送地址</h3>
            <form className={styles.form}>

                <div className={`${styles.group} ${styles.person_title}`}>
                    <div>稱謂</div>
                    <select className={styles.input} defaultValue='mr'>
                        <option value="mr">先生</option>
                        <option value="ms">女士</option>
                        <option value="mx">不明</option>
                    </select>
                </div>

                <div className={`${styles.group} ${styles.name}`}>
                    <div>姓名</div>
                    <input type="text" placeholder="請輸入姓名" className={styles.input} />
                </div>

                <div className={`${styles.group} ${styles.phone}`}>
                    <div>電話</div>
                    <input type="tel" placeholder="請輸入行動電話" className={styles.input} />
                </div>

                <div className={`${styles.group} ${styles.email}`}>
                    <div>Email</div>
                    <input type="email" placeholder="請輸入電子郵件" className={styles.input} />
                </div>

                <div className={`${styles.group} ${styles.country}`}>
                    <div>縣市</div>
                    <select required className={styles.input}>
                        {countries.map((country) => (
                            <option key={country.value} value={country.value}>
                                {country.label}
                            </option>
                        ))}
                    </select>
                  </div>

                  <div className={`${styles.group} ${styles.location}`}>
                    <div>地址</div>
                    <input type="text" placeholder="請輸入地址" className={styles.input} />
                  </div>
            </form>
        </section>
    )
}