import styles from "./Navbar.module.css"

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <h1 className="">AstroEra</h1>
            <ul className={styles.navbarlist}>
                <li><a href="#">James Web</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Top Fans</a></li>
                <li><a href="#">Score</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
        </nav>
    );
}

export default Navbar