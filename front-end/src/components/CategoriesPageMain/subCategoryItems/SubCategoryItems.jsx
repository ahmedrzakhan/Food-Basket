import React from "react"
import styles from "./SubCategoryItems.module.css"

function SubCategoryItems(props)
{
    const {SubCategoryItemsArr} = props
    return(
        <div>
            <ul className={styles.SubCategoryItem}>
                {SubCategoryItemsArr.map(item => {

                    <li>{item} </li>
                })}
            </ul>
        </div>
    )
}
export default SubCategoryItems