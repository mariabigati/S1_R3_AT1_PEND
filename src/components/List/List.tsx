import "./List.css"

import type { Product } from "../../interfaces/product";

interface ListProps {
  items: Product[];
  onRemoveItem: (id: string) => void;
}

export function List({ items, onRemoveItem }: ListProps) {
  return (
    <div className={"list-container"}>
      <ul className={"list"}>
        {items.map((item) => (
          <li key={item.id} className={"list-item"}>
            {item.name} - {item.quantity}
            <button className={"list-item-remove-btn"} onClick={() => onRemoveItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
