import type { Product } from "../../interfaces/product";

interface ListProps {
  items: Product[];
  onRemoveItem: (id: string) => void;
}

export function List({ items, onRemoveItem }: ListProps) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} {item.quantity}
            <button onClick={() => onRemoveItem(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
