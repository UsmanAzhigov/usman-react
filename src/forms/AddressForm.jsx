import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const schema = yup.object().shape({
  city: yup.string().required('Укажите город'),
  street: yup.string().required('Укажите улицу'),
  appartment: yup.number('Должен быть числом').min(2, 'Укажите номер квартиры'),
});

const AddressForm = ({ setFormValues }) => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      city: '',
      street: '',
      appartment: '',
    },
  });

  const onSubmit = (values) => {
    navigate('/result');
    setFormValues((prev) => {
      return { ...prev, ...values };
    });
  };
  console.log(formState);
  return (
    <div>
      <TextField
        {...register('city')}
        name="city"
        label="Город"
        helperText={formState.errors.city && formState.errors.city.message}
        error={!!formState.errors.city}
        fullWidth
      />
      <TextField
        {...register('street')}
        name="street"
        label="Улица"
        helperText={formState.errors.street && formState.errors.street.message}
        error={!!formState.errors.street}
        fullWidth
      />
      <TextField
        {...register('appartment')}
        name="appartment"
        label="Номер квартиры"
        helperText={formState.errors.appartment && formState.errors.appartment.message}
        error={!!formState.errors.appartment}
        fullWidth
        type="number"
      />

      <br />
      <div className="row">
        <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
          Далее
        </Button>
        <Button
          onClick={() => {
            reset();
          }}
          variant="contained"
          color="secondary">
          Очистить
        </Button>
      </div>
    </div>
  );
};
export default AddressForm;
