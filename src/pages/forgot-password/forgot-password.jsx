import { useState } from "react";
import styles from "./forgot-password.module.css";
import {
  Input,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory, useLocation, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswords } from "../../services/actions/user";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = useLocation();
  const userData = useSelector((store) => store.user.userData);

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(forgotPasswords(email))
    history.replace({pathname: '/reset-password'})
    setEmail('');
  }

  if (userData) {
    return (
      <Redirect
        to={ state?.from || '/'}
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <form onSubmit={onSubmitForm} className={styles.form}>
        <div className="mt-6 mb-6">
          <Input
            type={'email'}
            value={email}
            placeholder={'Укажите e-mail'}
            onChange={(e) => setEmail(e.target.value)}
            size={'default'}
            width={'100%'}
          />
        </div>
        <Button type="primary" size="medium">
          Восстановить
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {"Вспомнили пароль? "}
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;


