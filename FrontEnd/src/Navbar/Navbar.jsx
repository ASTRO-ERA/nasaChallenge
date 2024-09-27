// eslint-disable-next-line no-unused-vars
import style from "./Navbar.module.css"

function Navbar(){
    return(
        <nav>
            <h1 className="">AstroEra</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">James Web</a></li>
                <li><a href="#">Top Fans</a></li>
                <li><a href="#">Score</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
        </nav>
    );
}

export default Navbar