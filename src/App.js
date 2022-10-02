import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddressForm from './forms/AddressForm';
import PersonalInForms from './forms/PersonalInForms';
import Result from './forms/Result';
import './styles.css';

function App() {
  const [formValues, setFormValues] = React.useState({});
  const navigate = useNavigate();
  const nexStep = () => {
    navigate('address', 'result');
  };
  const back = () => {
    navigate('/');
  };
  console.log('Общая информация', formValues);
  return (
    <div className="App">
      <button className="navigaciya" onClick={nexStep}>
        Адрес отправки
      </button>
      <button className="back" onClick={back}>
        Назад
      </button>
      <Routes>
        <Route
          path="/"
          element={<PersonalInForms navigate={nexStep} setFormValues={setFormValues} />}
          exact
        />
        <Route path="/address" element={<AddressForm setFormValues={setFormValues} />} />
        <Route path="/result" element={<Result formValues={formValues} />} />
      </Routes>
    </div>
  );
}

export default App;
