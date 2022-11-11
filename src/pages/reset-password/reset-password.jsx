import { useState } from "react";
import styles from "./reset-password.module.css";
import {
  Input,
  Button,
  PasswordInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { resetPassword } from "../../utils/api";
import { baseUrl } from "../../utils/variables";

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    resetPassword(baseUrl, password, /*token*/);
  }


  return (
    <div className={styles.wrapper}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div className="mt-6 mb-6">
        <PasswordInput
          placeholder={'Введите новый пароль'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <Input
            type={'text'}
            value={code}
            placeholder={'Введите код из письма'}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <Button type="primary" size="medium">
          Сохранить
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

export default ResetPassword;


