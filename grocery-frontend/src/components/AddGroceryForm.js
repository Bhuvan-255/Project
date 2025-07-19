import { useState } from 'react';

function AddGroceryForm({ items, setItems }) {
  const [form, setForm] = useState({
    name: '',
    quantity: '',
    shop: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.quantity || !form.shop) return;

    const newItem = {
      id: Date.now(),
      ...form,
      bought: false
    };

    setItems([...items, newItem]);
    setForm({ name: '', quantity: '', shop: '' });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Item name" />
      <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" />
      <input name="shop" value={form.shop} onChange={handleChange} placeholder="Shop name" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddGroceryForm;
