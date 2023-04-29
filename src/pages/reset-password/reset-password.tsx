import { useEffect } from 'react';
import styles from './reset-password.module.css';
import {
  Input,
  Button,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { resetPasswords } from '../../services/actions/user';
import { getCookie } from '../../utils/cookie';
import { useHistory } from 'react-router-dom';
import { useSelector } from '../../services/types/hooks';
import { 
  loginPage,
  forgotPasswordPage
} from '../../utils/variables';
import { 
  getIsForgotPassword
} from '../../utils/functions';
import { FC } from 'react';
import { useForm } from '../../hooks/use-form';

const ResetPassword : FC = () => {
  const { values, handleValues } = useForm({ password: "", code: "" });
  const token = getCookie('accessToken');
  const isForgotPassword = useSelector(getIsForgotPassword);

  const history = useHistory();

  const handleFormSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    resetPasswords(values.password, token);
    history.replace({pathname: loginPage})
  }

  useEffect(()=> {
    if (!isForgotPassword) {
      history.replace({pathname: forgotPasswordPage })
    }
  },[isForgotPassword, history])

  return (
    <div className={styles.wrapper}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div className="mt-6 mb-6">
        <PasswordInput
          placeholder={'Введите новый пароль'}
          value={values.password}
          onChange={handleValues}
          name={"password"}
          />
        </div>
        <div className="mb-6">
          <Input
            type={'text'}
            value={values.code}
            placeholder={'Введите код из письма'}
            onChange={handleValues}
            name={"code"}
          />
        </div>
        <Button type="primary" size="medium" htmlType='submit'>
          Сохранить
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {"Вспомнили пароль? "}
        <Link className={styles.link} to={loginPage}>
          Войти
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;


