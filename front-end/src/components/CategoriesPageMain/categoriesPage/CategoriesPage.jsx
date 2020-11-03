import React from "react"
import CardContainer from "../cardContainer/CardContainer"
import CheckedInputContainer from "../checkedInputContainer/CheckedInputContainer"
import styles from "./CategoriesPage.module.css"

const fruitsVeggieNames = [{name: "Apple Royal Gala - New Zealand", qty: "1kg", price: 280}, {name: "Custard Apple", qty: "1kg", price: 280}, {name: "Pear Green - Imported", qty: "1kg", price: 280}, {name: "Avocado-imported", qty: "1kg", price: 280}, {name: "Peach-imported", qty: "1kg", price: 280}, {name: "Blueberry - Exotic", qty: "1kg", price: 280}]

function CategoriesPage()
{
    return(
        <>
            <div className={styles.itemsDisplay}>
                <CardContainer foodItemDetails={fruitsVeggieNames} />
                <CheckedInputContainer />
            </div>
        </>
    )
}

export default CategoriesPage