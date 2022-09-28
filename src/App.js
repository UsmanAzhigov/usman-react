import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function App() {
  const [fields, setFields] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleClickClear = () => {
    setFields({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  const handleClickRegistred = () => {
    if (!fields.email.includes('@')) {
      alert('Почта неверная!');
      return;
    }
    if (fields.firstName.lenght < 3 || fields.lastName.length < 3) {
      alert('Имя или фамилия указаны неверно!');
      return;
    }
    if (fields.passwords.lenght < 6) {
      alert('Пароль должен содержать 6 символов или больше!');
      return;
    }
    console.log('ЗАРЕГИСТРИРОВАЛИСЬ', fields);
    handleClickClear();
  };

  const handleChangInput = (event) => {
    const { name, value } = event.target.name;
    setFields({
      ...fields,
      [name]: value,
    });
  };
  const isValid = fields.firstName && fields.lastName && fields.email && fields.password;
  console.log(isValid);
  return (
    <div className="App">
      <div>
        <TextField
          name="firstName"
          onChange={handleChangInput}
          id="standard-basic"
          label="Имя"
          variant="standard"
          value={fields.firstName}
        />
        <TextField
          name="lastName"
          onChange={handleChangInput}
          id="standard-basic"
          label="Фамилия"
          variant="standard"
          value={fields.lastName}
        />
      </div>
      <div>
        <TextField
          name="email"
          onChange={handleChangInput}
          id="standard-basic"
          label="Email"
          variant="standard"
          value={fields.email}
        />
        <TextField
          name="password"
          onChange={handleChangInput}
          id="standard-basic"
          label="Password"
          variant="standard"
          value={fields.password}
        />
      </div>
      <br />
      <Button
        disabled={!isValid}
        onClick={handleClickRegistred}
        className="btn"
        variant="contained">
        Зарегистрироваться
      </Button>
      <Button onClick={handleClickClear} variant="outlined" color="error">
        Очистить
      </Button>
    </div>
  );
}
