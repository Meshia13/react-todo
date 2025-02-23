import NavBar from './NavMenu';
import style from './Welcome.module.css'

export default function Welcome() {
    return (
        <div >
            <NavBar />
            <main >
                <h1> 
                    <span className={style.welcomeText}>Welcome!</span>
                    <span className={style.welcomeEmoji}>👋</span>
                </h1>
                {/* <p>
                    Explore our features and enjoy a seamless experience with our application.
                </p> */}
                <a href="/todos"  className={style.button}>
                    Create Your List
                </a>
            </main>
        </div>
    );
}

