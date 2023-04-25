import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect, useState, FC, ChangeEvent, SyntheticEvent } from 'react';
import styles from './edit-data.module.css';
import { useDispatch, useSelector } from '../../services/types/hooks';
import { updateProfile } from '../../services/actions/user';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getUserData } from '../../utils/functions';
import { getCookie } from '../../utils/cookie';

const EditData : FC = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const [isDataChanged, setIsDataChanged] = useState(false);
  const userData = useSelector(getUserData);

  const dispatch = useDispatch();

  useEffect(()=> {
    if (userData) {
    setName(userData.name);
    setEmail(userData.email);
    }
  },[userData])

  const onSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    const token = getCookie("accessToken");
    dispatch(updateProfile(token!, email, name, password))
    setIsDataChanged(false)
  }

  const onNameChange = (e : ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setName(value)
    value === userData?.name ? setIsDataChanged(false) : setIsDataChanged(true)
  }

  const onEmailChange = (e : ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    value === userData?.email ? setIsDataChanged(false) : setIsDataChanged(true)
  }

  const onCancelEdit = (e : SyntheticEvent) => {
    e.preventDefault();
    if (userData) {
      setName(userData.name);
      setEmail(userData.email);
      setPassword('');
      setIsDataChanged(false)
    }
  }


  return(
    <form onSubmit={onSubmit} className={styles.content}>
      <Input
        placeholder='Имя'
        icon="EditIcon"
        value={name}
        onChange={onNameChange}
      />
      <Input
        placeholder='Логин'
        icon="EditIcon"
        value={email}
        onChange={onEmailChange}
      />
      <PasswordInput
        placeholder='Пароль'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {
        isDataChanged && (
          <div className={styles.buttonsContainer}>
            <Button
              onClick={onCancelEdit}
              type="secondary"
              size="medium"
              htmlType={'button'}
            >
              Отмена
            </Button>
            <Button
              type="primary"
              size="medium"
              htmlType={'submit'}
            >
              Сохранить
            </Button>
          </div>
        )
      }
    </form>
  )
}

export default EditData;
