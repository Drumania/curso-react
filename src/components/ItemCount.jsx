import React, { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(parseInt(initial));

  let countSuma = () => {
    setCount((count) => count + 1);
  };

  let countResta = () => {
    setCount((count) => count - 1);
  };

  let onAdd = (item_id) => {
    alert(item_id);
  };

  return (
    <>
      <label className="item-name">
        Camisa Fachera <br />
        <i>(stock: {stock})</i>
      </label>
      <div className="item-cart">
        <button
          onClick={() => countResta()}
          disabled={count <= 0 ? true : false}
        >
          -
        </button>
        <h1>{count}</h1>
        <button
          onClick={() => countSuma()}
          disabled={count == stock ? true : false}
        >
          +
        </button>
      </div>
      <button className="item-add" onClick={() => onAdd("camnisa_fachera_id")}>
        Añadir al carrito
      </button>
    </>
  );
};

export default ItemCount;
