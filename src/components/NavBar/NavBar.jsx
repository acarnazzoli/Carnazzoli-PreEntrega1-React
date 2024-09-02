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
                            Inicio
                        </a>
                        <a className="navbar-item" href="#">
                            Productos
                        </a>
                        <a className="navbar-item" href="#">
                            Nosotros
                        </a>
                        <a className="navbar-item" href="#">
                            Contacto
                        </a>
                    </div>
                </div>
            </nav>
            <h1>Paneles FT</h1>
            <CartWidget />
        </>
    )
};