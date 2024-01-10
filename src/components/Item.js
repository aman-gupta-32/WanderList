export default function Item({ item, onDeleteItem, onCheckedItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onCheckedItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
