import { CartWidget } from "./Components/CartWidgets/CartWidget";
import "bulma/css/bulma.css";
import "./Components/NavBar.css"



export const NavBar = () => {
    return (
        <>
            <nav className="navbar is-danger">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img src="/logo.png" alt="Logo" />
                    </a>
                    <div className="navbar-burger burger" data-target="navbarMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="#">
                            Dormitorios
                        </a>
                        <a className="navbar-item" href="#">
                            Espacios Comunes
                        </a>
                        <a className="navbar-item" href="#">
                            Infantiles
                        </a>
                        <a className="navbar-item" href="#">
                            Oficinas
                        </a>
                    </div>
                </div>
            </nav>
            <h1>Paneles FT</h1>
            <CartWidget />
        </>
    )
};