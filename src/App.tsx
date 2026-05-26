import { useState } from "react";

import "./App.css";
import { List } from "./components/List/List";
import { ListForm } from "./components/ListForm/ListForm";

import type { Product } from "./interfaces/product";
function App() {
  const [list, setListItems] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(Number);

  function handleDelete(id: string) {
    const updatedList = list.filter((item) => {
      return item.id !== id;
    });
    setListItems(updatedList);
  }

  function handleChangeName(event: any): void {
    event.preventDefault();
    setName(event.target.value);
  }
  function handleChangeQnt(event: any): void {
    event.preventDefault();
    setQuantity(event.target.value);
  }
  function handleAdd(event: any): void {
    event.preventDefault();
    if (name && quantity > 0) {
      const newList = list.concat({
        id: crypto.randomUUID(),
        name: name,
        quantity: quantity,
      });
      setListItems(newList);
      setName("");
      setQuantity(0);
    } else {
      alert("Campos inválidos!");
    }
  }
  return (
    <div className="container">
      <h1>Lista de Produtos</h1>
      <ListForm
        useStateName={name}
        onChangeName={handleChangeName}
        useStateQnt={quantity}
        onChangeQnt={handleChangeQnt}
        onAddItem={handleAdd}
      ></ListForm>

      <List items={list} onRemoveItem={handleDelete}></List>
    </div>
  );
}

export default App;
