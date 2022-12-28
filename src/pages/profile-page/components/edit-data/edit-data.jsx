import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { getCookie } from '../../../../utils/cookie';
import styles from './edit-data.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateProfile } from '../../../../services/actions/user';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';


const EditData = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const [isDataChanged, setIsDataChanged] = useState(false);

  const accessToken = getCookie('accessToken');
  const userData = useSelector((store) => store.user.userData)

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getUser(accessToken))
  },[dispatch,accessToken])

  useEffect(()=> {
    if (userData) {
    setName(userData.name);
    setEmail(userData.email);
    }
  },[userData])

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(getCookie('accessToken'), email, name, password))
    setIsDataChanged(false)
  }

  const onNameChange = (e) => {
    const value = e.target.value
    setName(value)
    value === userData.name ? setIsDataChanged(false) : setIsDataChanged(true)
  }

  const onEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    value === userData.email ? setIsDataChanged(false) : setIsDataChanged(true)
  }

  const onCancelEdit = (e) => {
    e.preventDefault();
    setName(userData.name);
    setEmail(userData.email);
    setPassword('');
    setIsDataChanged(false)
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
            <Button onClick={onCancelEdit} type="secondary" size="medium" htmlType={'button'}>
              Отмена
            </Button>
            <Button type="primary" size="medium" htmlType={'button'}>
              Сохранить
            </Button>
          </div>
        )
      }
    </form>
  )
}

export default EditData;
