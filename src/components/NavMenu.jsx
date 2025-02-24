import style from "./NavMenu.module.css"
import { useLocation } from 'react-router-dom';
import {useState} from "react";

function NavBar() {
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(false);



    return (
        <nav className={style.NavBar}>
            <a href="/" className={style.homeTitle}>
                Home
            </a>
            <div className={style.menu} onClick={() => {
                setOpenMenu(!openMenu)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`${openMenu ? style.open : ""}`}>
                <li className={location.pathname === '/todos' ? style.active : ''}>
                    <a href="/todos">List</a>
                </li>
                <li className={location.pathname === '/about' ? style.active : ''}>
                    <a href="/about">About</a>
                </li>
                <li className={location.pathname === '/subscribe' ? style.active : ''}>
                    <a href="/subscribe">Subscribe</a>
                </li>
                <li className={location.pathname === '/contact' ? style.active : ''}>
                    <a href="/contact">Contact</a>
                </li>
               
            </ul>
        </nav>
    )

}
 export default NavBar