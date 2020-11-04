import React from "react";
import CardContainer from "../cardContainer/CardContainer";
import styles from "./CategoriesPage.module.css";
import TopNav from "./../../dashboard/TopNavBar/TopNav";

const fruitsVeggieNames = [
  { name: "Apple Royal Gala - New Zealand", qty: "1kg", price: 280 },
  { name: "Custard Apple", qty: "1kg", price: 280 },
  { name: "Pear Green - Imported", qty: "1kg", price: 280 },
  { name: "Avocado-imported", qty: "1kg", price: 280 },
  { name: "Peach-imported", qty: "1kg", price: 280 },
  { name: "Blueberry - Exotic", qty: "1kg", price: 280 },
  { name: "Custard Apple", qty: "1kg", price: 280 },
  { name: "Custard Apple", qty: "1kg", price: 280 },
  { name: "Custard Apple", qty: "1kg", price: 280 },
  { name: "Custard Apple", qty: "1kg", price: 280 },
  { name: "Custard Apple", qty: "1kg", price: 280 },
];

const checkBoxInputsArr = [
  "Fruits and Vegetables",
  "Nature's Best",
  "Nature's Basket",
  "Raw Pressery",
  "Jain Farm Fresh",
  "American Garden",
  "Tomato Cherry",
  "Yummiez",
];

const listHeading = "Brands";

const SubCategoryItemsArr = [
  "Fruits",
  "Exotic Fruits",
  "Daily Vegetables",
  "Exotic Vegetables",
  "Baby tender Vegetables",
  "Canned & Frozen",
  "Cold Press Fresh",
];

const SubCategoryHeader = "Fruits & Vegetables";

const dietaryLifestyle = [
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
];
function CategoriesPage() {
  const checkBoxChange = (e) => {
    if ([e.target.name] === e.target.value) {
      e.target.checked = !e.target.checked;
    }
  };

  const checkBoxClick = (e) => {
    if (e.target.checked === true) {
      alert(e.target.value);
    }
  };

  return (
    <>
      <TopNav />
      <div style={{ clear: "both" }}></div>
      <div style={{ display: "block", margin: "10px 30px" }}>
        <div className={styles.itemsDisplay}>
          <div className={styles.InputsContainer}>
            <div className={styles.FilterClearAll}>
              <p style={{ textAlign: "center" }}>FILTER</p>
              <p
                style={{
                  textAlign: "right",
                  fontSize: "10px",
                  paddingTop: "10px",
                  paddingRight: "5px",
                }}
              >
                CLEAR ALL
              </p>
            </div>
            <div
              style={{
                marginLeft: "-20px",
                height: "250px",
                overflowY: "scroll",
                paddingRight: "30px",
                width: "220px",
                padding: "10px",
              }}
            >
              <h4 className={styles.listHeading}> {SubCategoryHeader} </h4>
              <ul className={styles.checkBoxesList}>
                {SubCategoryItemsArr.map((item) => {
                  return <li style={{ fontSize: "12px" }}>{item}</li>;
                })}
              </ul>
            </div>
            <div
              style={{
                border: "1px solid rgb(240, 245, 244)",
                height: "0.5px",
                margin: "2px 5px",
              }}
            ></div>
            <div
              style={{
                marginLeft: "-20px",
                height: "250px",
                overflowY: "scroll",
                paddingRight: "30px",
                width: "220px",
                padding: "10px",
              }}
            >
              <h4 className={styles.listHeading}> {listHeading} </h4>
              <ul className={styles.checkBoxesList}>
                {checkBoxInputsArr.map((item) => {
                  return (
                    <li style={{ fontSize: "12px" }}>
                      <input
                        id={item}
                        type="checkbox"
                        name={item}
                        value={item}
                        onClick={checkBoxClick}
                        onChange={checkBoxChange}
                      />
                      <label htmlFor={item}>{item} </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              style={{
                border: "1px solid rgb(240, 245, 244)",
                height: "0.5px",
                margin: "2px 5px",
              }}
            ></div>
            <div
              style={{
                marginLeft: "-20px",
                height: "250px",
                overflowY: "scroll",
                paddingRight: "30px",
                width: "220px",
                padding: "10px",
              }}
            >
              <h4 className={styles.listHeading}> {`Dietary & Lifestyle`} </h4>
              <ul className={styles.checkBoxesList}>
                {dietaryLifestyle.map((item) => {
                  return (
                    <li style={{ fontSize: "12px" }}>
                      <input
                        id={item}
                        type="checkbox"
                        name={item}
                        value={item}
                        onClick={checkBoxClick}
                        onChange={checkBoxChange}
                      />
                      <label htmlFor={item}>{item} </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className={styles.productsDisplay}>
            <CardContainer foodItemDetails={fruitsVeggieNames} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesPage;
