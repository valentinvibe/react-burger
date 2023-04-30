import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { FormEvent, useEffect, useState, FC, ChangeEvent, SyntheticEvent } from 'react';
import styles from './edit-data.module.css';
import { useDispatch, useSelector } from '../../services/types/hooks';
import { updateProfile } from '../../services/actions/user';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getUserData } from '../../utils/functions';
import { getCookie } from '../../utils/cookie';
import { useForm } from '../../hooks/use-form';

const EditData : FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const { values, handleValues, setValues } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [isDataChanged, setIsDataChanged] = useState(false);

  useEffect(()=> {
    if (userData) {
      setValues({name: userData.name, email: userData.email, password: ''})
    }
  },[userData, setValues])

  const onSubmit = (e : FormEvent) => {
    e.preventDefault();
    const token = getCookie("accessToken");
    dispatch(updateProfile(token!, values.email, values.name, values.password))
    setIsDataChanged(false)
  }

  const onNameChange = (e : ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValues({name: value})
    value === userData?.name ? setIsDataChanged(false) : setIsDataChanged(true)
  }

  const onEmailChange = (e : ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValues({email: value})
    value === userData?.email ? setIsDataChanged(false) : setIsDataChanged(true)
  }

  const onCancelEdit = (e : SyntheticEvent) => {
    e.preventDefault();
    if (userData) {
      setValues({
        name: userData.name,
        email: userData.email,
        password: '',
      })
      setIsDataChanged(false)
    }
  }


  return(
    <form onSubmit={onSubmit} className={styles.content}>
      <Input
        placeholder='Имя'
        icon="EditIcon"
        value={values.name}
        onChange={onNameChange}
        name={"name"}
      />
      <Input
        placeholder='Логин'
        icon="EditIcon"
        value={values.email}
        onChange={onEmailChange}
        name={"email"}
      />
      <PasswordInput
        placeholder='Пароль'
        value={values.password}
        onChange={handleValues}
        name={"password"}
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
