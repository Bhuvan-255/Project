function GroceryItem({ item, onToggle, onDelete, onEdit }) {
    return (
      <div className={`grocery-item ${item.bought ? 'bought' : ''}`}>
        <h3>{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Shop: {item.shop}</p>
        <p>Status: {item.bought ? '✅ Bought' : '🛒 Not Bought'}</p>
  
        <button onClick={() => onToggle(item.id)}>Mark as {item.bought ? 'Not Bought' : 'Bought'}</button>
        <button onClick={() => onEdit(item.id)}>Edit</button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    );
  }
  
  export default GroceryItem;
  