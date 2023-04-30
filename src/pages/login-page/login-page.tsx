import { FC } from "react";
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
import { useForm } from "../../hooks/use-form";



const LoginPage : FC = () => {
  const { values, handleValues } = useForm({ email: "", password: "" });
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const { state } = useLocation<TLocationState>();
 

  const handleSubmitForm = (e : React.FormEvent) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return
    }
    dispatch(signIn(values.email, values.password))
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
            value={values.email}
            placeholder={'E-mail'}
            onChange={handleValues}
            size={'default'}
            width={'100%'}
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


