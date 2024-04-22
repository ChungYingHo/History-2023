import styles from './Step.module.css'
import StepProgress from "./StepProgress/StepProgress";
import Step1 from "./Step1/Step1";
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3'
import ProgressControl from './ProgressControl/ProgressControl';
import { useState } from 'react';

export default function Step(){
    const [page, setPage] = useState(1)

    return(
        <section className={styles.container}>
            <h2 className={styles.title}>結帳</h2>
            <div className={styles.progress}><StepProgress page={page}/></div>
            <div className={styles.step}>
                {page === 1 && <Step1 />}
                {page === 2 && <Step2 />}
                {page === 3 && <Step3 />}
            </div>
            <div className={styles.progress_control}><ProgressControl page={page} setPage={setPage}/></div>
        </section>
    )
}