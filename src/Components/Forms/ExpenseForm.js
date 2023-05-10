import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [itemname, setItemName] = useState("");
  const [ProductId, setProductId] = useState("");
  const [price, setPrice] = useState("");

  const Itemname = (e) => {
    setItemName(e.target.value);
  };

  const productId = (e) => {
    setProductId(e.target.value);
  };

  const Price = (e) => {
    setPrice(e.target.value);
  };

  const submitExpenses = (e) => {
    e.preventDefault();

    //console.log(itemname, description, quantity, price);
    const obj = {
      itemName: itemname,
      productid: ProductId,
      price: price,
    };
    const id = Math.random().toString(); // Generate a unique identifier

    const JsonObj = JSON.stringify(obj);

    localStorage.setItem(id, JsonObj);

    props.onIncomingExpenses(obj, id);

    // console.log(obj, key);
    setItemName("");
    setPrice("");
    setProductId("");
  };

  return (
    <form onSubmit={submitExpenses}>
      <div className="expenses">
        <div className="expensesItems">
          <div className="Itemname">
            <label>ItemName</label>
            <input
              type="text"
              username="itemname"
              onChange={Itemname}
              value={itemname}
            />
          </div>
          <div className="productId">
            <label>ProductID</label>
            <input
              type="text"
              username="productid"
              onChange={productId}
              value={ProductId}
            />
          </div>

          <div className="Price">
            <label>Price</label>
            <input
              type="text"
              username="Price"
              onChange={Price}
              value={price}
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
