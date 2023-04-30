import styles from './register-page.module.css';
import {
    Input,
    Button,
    PasswordInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from 'react-router-dom';

import { registration } from '../../services/actions/user';
import { useSelector, useDispatch } from '../../services/types/hooks';
import { 
  loginPage,
  homePage
} from '../../utils/variables';
import { getUserData } from '../../utils/functions';
import { FC } from 'react';
import { TLocationState } from '../../services/types';
import { useForm } from '../../hooks/use-form';

const RegisterPage : FC = () => {
  const {values, handleValues} = useForm({name: "", email: "", password: ""});
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const { state } = useLocation<TLocationState>();

  const handleFormSubmit = (e : React.FormEvent) => {
    e.preventDefault();

    if (!values.email || !values.password || !values.name) {
      return;
    }

    dispatch(registration(values.email, values.password, values.name))
  }

  if (userData) {
    return (
      <Redirect
        to={ state?.from || homePage }
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      <h2 className="text text_type_main-medium">Регистрация</h2>
      <form onSubmit={handleFormSubmit} className={styles.form}>
      <div className="mt-6 mb-6">
          <Input
            type={'text'}
            value={values.name}
            placeholder={'Имя'}
            onChange={handleValues}
            name={"name"}
          />
        </div>
        <div className="mb-6">
          <Input
            type={'email'}
            value={values.email}
            placeholder={'E-mail'}
            onChange={handleValues}
            name={"email"}
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            value={values.password}
            onChange={handleValues}
            name={"password"}
          />
        </div>
        <Button 
          type="primary" 
          size="medium"
          htmlType="submit"  
        >
          Зарегистрироваться
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {"Уже зарегистрированы? "}
        <Link className={styles.link} to={loginPage}>
          Войти
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;
