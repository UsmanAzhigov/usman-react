import { Form, Button } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const [fields, setFields] = React.useState({
    email: '',
    password: '',
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const resp = await fetch(
      `https://mentor.archakov.im/api/mock/login?email=${fields.email}&password=${fields.password}`,
    );
    if (resp.ok) {
      const { token } = await resp.json();
      window.localStorage.getItem('token', token);
      navigate('/profile');
    } else {
      alert('Ошибка! неверный логин или пароль');
    }
  };
  const handleChangeInput = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          onChange={handleChangeInput}
          type="email"
          placeholder="Enter "
          value={fields.email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          name="password"
          onChange={handleChangeInput}
          type="password"
          placeholder="Password"
          value={fields.password}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
