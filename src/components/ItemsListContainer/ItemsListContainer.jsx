
import "./components/ItemsListContainer.css"

export const ItemsListContainer = ({greeting}) => {
    return (
        <div className="items">
            <h2>{greeting}</h2>
        </div>
    )
}