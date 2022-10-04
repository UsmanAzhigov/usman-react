import React from 'react';
import axios from 'axios';
import './styles.css';

function App() {
  const [users, setUsers] = React.useState([]);
  const uploadFile = () => {
    const fileELem = document.querySelector('#file');
    const file = fileELem.files[0];
    const formData = new FormData();
    formData.append('file', file);

    axios.post('https://localhost:9999', formData);
  };

  const gitUsers = async () => {
    const { info } = await axios.get('https://6339640966857f698fb54345.mockapi.io/users');
    setUsers(info);
  };
  const createProfile = () => {
    const emailElement = document.querySelector('#Email');
    const usernameElement = document.querySelector('#username');
    const info = {
      Email: emailElement.value,
      name: usernameElement.value,
    };
    axios.post('https://6339640966857f698fb54345.mockapi.io/users', info);
  };
  return (
    <div className="App">
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={gitUsers}>Получить список пользователя</button>
      <br />
      <br />
      <hr />
      <div>
        <h4>Создайте аккаунт:</h4>
        <input id="Email" placeholder="Email"></input>
        <input id="username" placeholder="Имя"></input>
        <button onClick={createProfile}>Отправить</button>
      </div>
      <br />
      <br />
      <hr />
      <div>
        <h4>Загрузка файла:</h4>
        <input id="file" type="file" />
        <button onClick={uploadFile}>Загрузить</button>
      </div>
    </div>
  );
}

export default App;
