import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/24.2.1.2-6(AuthForm)';

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
