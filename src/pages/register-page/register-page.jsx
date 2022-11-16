import styles from './register-page.module.css';
import { useEffect, useState } from 'react';
import {
    Input,
    Button,
    PasswordInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from 'react-router-dom';

import { registration } from '../../services/actions/user';
import { useSelector, useDispatch } from 'react-redux';

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName ] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector(store => store.user.userData);
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      return;
    }

    dispatch(registration(email, password, name))
  }

  useEffect(()=> {
    userData && history.push('/')
  }, [userData, history])

  return (
    <div className={styles.wrapper}>
      <h2 className="text text_type_main-medium">Регистрация</h2>
      <form onSubmit={handleFormSubmit} className={styles.form}>
      <div className="mt-6 mb-6">
          <Input
            type={'text'}
            value={name}
            placeholder={'Имя'}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <Input
            type={'email'}
            value={email}
            placeholder={'E-mail'}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {"Уже зарегистрированы? "}
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;
