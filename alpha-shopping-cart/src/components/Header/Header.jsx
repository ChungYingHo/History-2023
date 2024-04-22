import styles from './Header.module.css'
import {ReactComponent as Search} from '../../icons/search.svg'
import {ReactComponent as Cart} from '../../icons/cart.svg'
import {ReactComponent as Moon} from '../../icons/moon.svg'
import {ReactComponent as Logo} from '../../icons/logo.svg'

export default function Header(){
    return(
        <header>
            <nav className={styles.navbar}>
                <ul className={styles.service}>
                    <li className={styles.nav_item}>
                        <a href="#">男款</a>
                    </li>
                    <li className={styles.nav_item}>
                        <a href="#">女款</a>
                    </li>
                    <li className={styles.nav_item}>
                        <a href="#">最新消息</a>
                    </li>
                    <li className={styles.nav_item}>
                        <a href="#">客製商品</a>
                    </li>
                    <li className={styles.nav_item}>
                        <a href="#">聯絡我們</a>
                    </li>
                </ul>

                <div className={styles.logo}><Logo /></div>

                <ul className={styles.tools}>
                    <li className={styles.tool}><Search /></li>
                    <li className={styles.tool}><Cart /></li>
                    <li className={styles.tool}><Moon /></li>
                </ul>
            </nav>
        </header>
        
    )
}