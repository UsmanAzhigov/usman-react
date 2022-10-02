import React from 'react';

import './styles.css';

function App() {
  const [users, setUsers] = React.useState([]);
  async function gitUsers() {
    await fetch('https://6339640966857f698fb54345.mockapi.io/users').then((res) => {
      res.json().then((result) => {
        setUsers(result);
      });
    });
  }
  return (
    <div className="App">
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>
            {obj.id}.{obj.name}
          </li>
        ))}
      </ul>
      <button onClick={gitUsers}>Получить список пользователя</button>
    </div>
  );
}

export default App;
