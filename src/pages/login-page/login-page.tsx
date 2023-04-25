import { FC, useState } from "react";
import styles from "./login-page.module.css";
import {
  Input,
  Button,
  PasswordInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../../services/types/hooks";
import { signIn } from "../../services/actions/user";
import { homePage } from "../../utils/variables";
import { getUserData } from "../../utils/functions";
import { TLocationState } from "../../services/types";



const LoginPage : FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const { state } = useLocation<TLocationState>();
 

  const handleSubmitForm = (e : React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      return
    }
    dispatch(signIn(email, password))
  }

  if (userData) {
    return (
      <Redirect
        to={{ pathname: state ? state.from.pathname : homePage }}
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      <h2 className="text text_type_main-medium">Вход</h2>
      <form onSubmit={handleSubmitForm} className={styles.form}>
        <div className="mt-6 mb-6">
          <Input
            type={'email'}
            value={email}
            placeholder={'E-mail'}
            onChange={(e) => setEmail(e.target.value)}
            size={'default'}
            width={'100%'}
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="primary" size="medium" htmlType={'submit'}>
          Войти
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {"Вы — новый пользователь? "}
        <Link className={styles.link} to="/register">
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-default text_color_inactive mt-4">
        {"Забыли пароль? "}
        <Link className={styles.link} to="/forgot-password">
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;


