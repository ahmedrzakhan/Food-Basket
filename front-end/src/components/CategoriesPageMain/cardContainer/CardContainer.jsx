import React from "react"
import AddButton from "../addButton/AddButton"
import styles from "./CardContainer.module.css"



function CardContainer(props)
{
    

    return(
        <>
            {props.foodItemDetails.map(item => {

                return(
                    <div className={styles.productCard}>
                        <img height="300px" src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b05894c9-bafd-45af-95bf-30fe304d242c_425x425.jpg" alt="fruits and veggies" />
                        <div>
                            <img height="20px" src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/8ab57ed4-47e0-426a-8382-f4c89b11826a.png" alt="delivery" /> <span style={{color:"#880033", fontSize: "15px", fontWeight:"600"}}>DELIVERY IN 60 MINUTES </span>
                        </div>
                        <p> {item.name} </p>
                        <p> {item.qty} </p>
                        <span className={styles.mrpBorder}>MRP ₹{item.price} </span>  <AddButton/>
                    </div>
                )
            })}
            
        </>
    )
}

export default CardContainer