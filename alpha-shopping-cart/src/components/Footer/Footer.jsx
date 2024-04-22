import styles from './Footer.module.css'
import {ReactComponent as Logo} from '../../icons/logo.svg'
import {ReactComponent as Ig} from '../../icons/ig.svg'
import {ReactComponent as Fb} from '../../icons/fb.svg'
import {ReactComponent as Whatsapp} from '../../icons/whatsapp.svg'

export default function Footer(){
    return(
        <footer>
            <div className={styles.container}>
                <div className={styles.logo}><Logo /></div>
                <section className={styles.group}>
                    <h4>客戶服務</h4>
                    <div className={styles.content}>
                        <a href="#">運送說明</a>
                        <a href="#">退換貨相關</a>
                        <a href="#">付款資訊</a>
                        <a href="#">FAQ</a>
                    </div>
                </section>

                <section className={styles.group}>
                    <h4>關於我們</h4>
                    <div className={styles.content}>
                        <a href="#">品牌故事</a>
                        <a href="#">媒體聯繫</a>
                        <a href="#">Press kit</a>
                    </div>
                </section>

                <section className={styles.group}>
                    <h4>資訊</h4>
                    <div className={styles.content}>
                        <a href="#">隱私權政策</a>
                        <a href="#">Cookie</a>
                        <a href="#">GDPR</a>
                    </div>
                </section>

                <section className={styles.group}>
                    <h4>追蹤 ALPHA Shop</h4>
                    <a href='#'>+886 02123-45678</a>
                    <div className={styles.icon_container}>
                        <div className={styles.icon}><Fb /></div>
                        <div className={styles.icon}><Ig /></div>
                        <div className={styles.icon}><Whatsapp /></div>
                    </div>
                </section>
            </div>
        </footer>
            
    )
}