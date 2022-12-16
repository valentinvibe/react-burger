import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { getCookie } from '../../../../utils/cookie';
import styles from './edit-data.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../../services/actions/user';

const EditData = () => {
  const [ name, setName ] = useState('');
  const [ login, setLogin ] = useState('');
  const [ password, setPassword ] = useState('');

  const accessToken = getCookie('accessToken');
  const userData = useSelector((store) => store.user.userData)

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getUser(accessToken))
  },[dispatch,accessToken])

  useEffect(()=> {
    setName(userData.name);
    setLogin(userData.email);
  },[userData])


  return(
    <section className={styles.content}>
    <Input
          placeholder='Имя'
          icon="EditIcon"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder='Логин'
          icon="EditIcon"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <PasswordInput
          placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
    </section>
  )
}

export default EditData;
