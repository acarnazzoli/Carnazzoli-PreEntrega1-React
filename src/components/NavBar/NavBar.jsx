import { CartWidget } from "./Components/CartWidgets/CartWidget";
import "bulma/css/bulma.css";



export const NavBar = () => {
    return (
        <>
            <nav className="navbar is-danger">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        Paneles-FT
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
            <CartWidget />
        </>
    )
};