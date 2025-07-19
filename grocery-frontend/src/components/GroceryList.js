import GroceryItem from './GroceryItem';

function GroceryList({ items, setItems }) {
  const toggleBought = (id) => {
    const updated = items.map(item =>
      item.id === id ? { ...item, bought: !item.bought } : item
    );
    setItems(updated);
  };

  const deleteItem = (id) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
  };

  const editItem = (id) => {
    const newName = prompt('Enter new item name:');
    if (!newName) return;

    const updated = items.map(item =>
      item.id === id ? { ...item, name: newName } : item
    );
    setItems(updated);
  };

  return (
    <div className="grocery-list">
      {items.map(item => (
        <GroceryItem
          key={item.id}
          item={item}
          onToggle={toggleBought}
          onDelete={deleteItem}
          onEdit={editItem}
        />
      ))}
    </div>
  );
}

export default GroceryList;
