
import { NavBar } from "./components/NavBar/NavBar";
import { ItemsListContainer } from "./components/ItemsListContainer/ItemsListContainer";
import "bulma/css/bulma.min.css";
import "./App.css";


function App() {
    return (
        <div className="contenedor">
            <NavBar/>
            <ItemsListContainer greeting={'Bienvenido a tu tienda de decoración!'}/>
        </div>
    )
}

export default App;