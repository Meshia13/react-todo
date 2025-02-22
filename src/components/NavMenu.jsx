import style from "./NavMenu.module.css"

function NavBar() {

    return (
        <nav className={style.NavBar}>
            <a href="/" className="home-title">
                Home
            </a>

            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/todos">ToDo</a>
                </li>
            </ul>
        </nav>
    )

}
 export default NavBar