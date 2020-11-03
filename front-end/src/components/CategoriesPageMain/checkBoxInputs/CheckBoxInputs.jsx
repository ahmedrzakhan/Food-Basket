import React from "react"
import styles from "./CheckBoxInputs.module.css"

function CheckBoxInputs(props)
{
    const {checkBoxInputsArr} = props

    const checkBoxChange = (e) => {

        if([e.target.name] === e.target.value)
        {
            e.target.checked = !e.target.checked
        }
        
    }

    console.log(checkBoxInputsArr)

    return(
        <>
            <div style={{marginLeft: "-20px"}}>
                <h4 className={styles.listHeading}> {props.listHeading} </h4>
                <ul className={styles.checkBoxesList}>
                    {checkBoxInputsArr.map(item => {

                        return(

                            <li> 
                                <input id={item} type="checkbox" name={item} value={item} onChange={checkBoxChange}/>
                                <label for={item}>{item} </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        </>
    )
}

export default CheckBoxInputs