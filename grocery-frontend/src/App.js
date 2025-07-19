import React, { useState } from 'react';
import './App.css';
import groceries from './data/groceries';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import AddGroceryForm from './components/AddGroceryForm';
import GroceryList from './components/GroceryList';

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState(groceries);

  const handleLogin = (username) => setUser(username);
  const handleLogout = () => setUser(null);

  return (
    <div className="App">
      <Header />
      {user ? (
        <>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
          <h2>Welcome, {user} 👋</h2>
          <AddGroceryForm items={items} setItems={setItems} />
          <GroceryList items={items} setItems={setItems} />
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
