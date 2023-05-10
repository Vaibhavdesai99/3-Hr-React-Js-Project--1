import React, { useState, useEffect } from "react";

const Expenselist = ({ expenselist, setExpenses }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    // we use Number here caz  => If we dont use then it gives ans in string like 1+1= 11 not 2 so .
    expenselist.forEach((item) => {
      sum += Number(item.price);
    });
    setTotalPrice(sum);
  }, [expenselist]);

  const deleteProduct = (id) => {
    const updatedExpenses = expenselist.filter((item) => item.id !== id);
    const updatedTotalPrice = updatedExpenses.reduce(
      (total, item) => total + Number(item.price),
      0
    );
    setTotalPrice(updatedTotalPrice);
    setExpenses(updatedExpenses);
    localStorage.removeItem(id);
  };

  return (
    <div className="itemlist">
      <h2>Expense List</h2>
      <div className="list">
        {expenselist.map((item) => (
          <div key={item.id}>
            <span>Item Name: {item.iname}</span>
            <div>Product ID: {item.productid}</div>
            <span>Product Price: {item.price}</span>
            <button onClick={() => deleteProduct(item.id)}>
              Delete Product
            </button>
          </div>
        ))}
        <h3>Total Product Price: {totalPrice}</h3>
      </div>
    </div>
  );
};

export default Expenselist;
