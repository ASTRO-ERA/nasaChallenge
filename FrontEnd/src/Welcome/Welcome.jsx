import sitting from "../assets/sitting.png"
import walking from "../assets/walking.png"
import styles from "./Welcome.module.css"
import Button from "../Button/Button"

const Welcome=() =>{
    return(
        <>
            <div className={styles.container}>
                <img className={styles.sitting} src={sitting}></img>
                <h1 className={styles.h1}>Let&apos;s start our journey to space</h1>
                <Button/>
            </div>
            <img className={styles.walking} src={walking}></img>
        </>
    )
}

export default Welcome 