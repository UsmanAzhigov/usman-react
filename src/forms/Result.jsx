import React from 'react';

export const Result = ({ formValues }) => {
  return (
    <div>
      <h2>Персональная информация:</h2>
      <ul>
        <li>
          <b>Имя:{formValues.firstName}</b>
        </li>
        <li>
          <b>Фамилия:{formValues.lastName}</b>
        </li>
        <li>
          <b>Почта:{formValues.email}</b>
        </li>
        <li>
          <b>Пароль:{formValues.password}</b>
        </li>
        <hr />
        <h2>Информация о Адресе:</h2>
      </ul>
      <ul>
        <li>
          <b>Город:{formValues.city}</b>
        </li>
        <li>
          <b>Улица:{formValues.street}</b>
        </li>
        <li>
          <b>Номер квартиры:{formValues.appartment}</b>
        </li>
      </ul>
    </div>
  );
};
export default Result;
