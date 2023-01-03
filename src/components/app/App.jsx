import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../services/actions/get-data'
import { getCookie } from '../../utils/cookie';
import ContentSwitch  from '../content-switch/content-switch';
import { getUser } from '../../services/actions/user';

const App = () => {
  const accessToken = getCookie('accessToken');
  const dispatch = useDispatch();
  const isLoad = useSelector((store) => store.data.ingredientsRequest);

  useEffect(() => {
    dispatch(getItems());
    if (accessToken) {
      dispatch(getUser(accessToken))
    }
  },[dispatch,accessToken])

  return (
    <>
      {!isLoad && (
        <>
        <AppHeader/>
        <ContentSwitch/>
        </>
        )}
    </>

  );
}

export default App;
