import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  const naviage = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [pathname]);

  const handleClickAuth = () => {
    if (isAuth && window.confirm('Вы точно хотите выйти?')) {
      window.localStorage.removeItem('token');
      naviage('/');
    } else {
      naviage('/login');
    }
  };
  return (
    <div className="header">
      <h2>React Blog</h2>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link active={pathname === '/'} to="/" as={Link}>
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={pathname === '/about'} to="/about" as={Link}>
            Обо мне
          </Nav.Link>
        </Nav.Item>
        <Button onClick={handleClickAuth} variant={isAuth ? 'danger' : 'dark'}>
          {isAuth ? 'Выйти' : 'Войти'}
        </Button>
      </Nav>
    </div>
  );
};
