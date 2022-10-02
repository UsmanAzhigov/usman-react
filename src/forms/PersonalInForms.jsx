import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('Введите имя').min(2, 'Имя слишком короткое'),
  lastName: yup.string().required('Введите фамилию'),
  email: yup.string().required('Укажите почту'),
  password: yup
    .string()
    .min(5, 'Пароль должен быть более 5 символов')
    .max(10, 'Пароль слишком большой'),
});

const PersonalInForms = ({ setFormValues }) => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: 'Усман',
      lastName: 'Ажигов',
      email: 'gog',
      password: 'gog06',
    },
  });

  const onSubmit = (values) => {
    navigate('address');
    setFormValues(values);
  };

  console.log(formState);
  return (
    <div>
      <div className="row">
        <TextField
          {...register('firstName')}
          name="firstName"
          label="Имя"
          helperText={formState.errors.firstName && formState.errors.firstName.message}
          error={!!formState.errors.firstName}
          fullWidth
        />
        <TextField
          {...register('lastName')}
          name="lastName"
          label="Фамилия"
          helperText={formState.errors.lastName && formState.errors.lastName.message}
          error={!!formState.errors.lastName}
          fullWidth
        />
      </div>
      <div className="row">
        <TextField
          {...register('email')}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          name="email"
          label="email"
          fullWidth
        />
        <TextField
          {...register('password')}
          helperText={formState.errors.password && formState.errors.password.message}
          error={!!formState.errors.password}
          name="password"
          type="password"
          label="password"
          fullWidth
        />
      </div>
      <br />
      <div className="row">
        <Button
          className="knopka"
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary">
          Зарегистрироваться
        </Button>
        <Button
          className="knopka"
          onClick={() => {
            reset();
          }}
          variant="contained"
          color="secondary">
          Очистить
        </Button>
      </div>{' '}
    </div>
  );
};
export default PersonalInForms;
