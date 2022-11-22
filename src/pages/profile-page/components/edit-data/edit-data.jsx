import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { getUserData } from '../../../../utils/api';
import { getCookie } from '../../../../utils/cookie';
import styles from './edit-data.module.css';
import { baseUrl } from '../../../../utils/variables';

const EditData = () => {
  const [ name, setName ] = useState('');
  const [ login, setLogin ] = useState('');
  const [ password, setPassword ] = useState('');

  const accessToken = getCookie('accessToken');
  getUserData(baseUrl, accessToken)
  .then(res => {
    console.log(res)
  })
  console.log(accessToken);

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
