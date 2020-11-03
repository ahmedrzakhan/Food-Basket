import React from "react"
import CheckBoxInputs from "../checkBoxInputs/CheckBoxInputs"
import styles from "./CheckedInputContainer.module.css"


const checkBoxInputs = ["Fruits and Vegetables", "Nature's Best", "Nature's Basket", "Raw Pressery", "Jain Farm Fresh", "American Garden", "Tomato Cherry", "Yummiez"]
const listHeading = "Brands"
function CheckedInputContainer()
{
    return(
        <div className={styles.checkedInputsContainer}>
            <CheckBoxInputs checkBoxInputsArr={checkBoxInputs} listHeading={listHeading} />
        </div>
    )
}

export default CheckedInputContainer