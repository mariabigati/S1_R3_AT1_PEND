import { useState } from "react";

import "./App.css";
import type { Product } from "./interfaces/product";
function App() {
  const [list, setListItems] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(Number);

  function handleDelete(id: string) {
    const updatedList = list.filter((item) => {
      return item.id !== id;
    })
    setListItems(updatedList);
  }
  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeQnt(event) {
    setQuantity(event.target.value);
  }
  function handleAdd() {
    const newList = list.concat({ id: crypto.randomUUID(), name: name, quantity: quantity });
    setListItems(newList);
    setName("");
    setQuantity(0);
  }
  return (
    <div>
      <div className="product-list-form">
        <input
          name="product-name"
          value={name}
          type="text"
          onChange={handleChangeName}
        />
        <input
          name="product-qnt"
          value={quantity}
          type="number"
          onChange={handleChangeQnt}
        />
        <button type="submit" onClick={handleAdd}>
          Adicionar
        </button>
      </div>
      <div>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.name} {item.quantity} 
              <button onClick={() => handleDelete(item.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
