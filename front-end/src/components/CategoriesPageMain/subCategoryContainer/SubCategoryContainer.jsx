import React from "react"
import SubCategoryItems from "../subCategoryItems/SubCategoryItems"
import styles from "./SubCategoryContainer.module.css"

const SubCategoryItemsArr = ["Fruits", "Exotic Fruits", "Daily Vegetables", "Exotic Vegetables", "Baby tender Vegetables", "Canned & Frozen", "Cold Press Fresh"]
const SubCategoryHeader= "Fruits & Vegetables"
function SubCategoryContainer()
{
    return(
        <div>
            <SubCategoryItems SubCategoryItemsArr={SubCategoryItemsArr} SubCategoryHeader={SubCategoryHeader} />
        </div>
    )
}

export default SubCategoryContainer