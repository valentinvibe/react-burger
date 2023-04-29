import { useEffect, FC } from "react";
import AppHeader from "../app-header/app-header";
import { useSelector, useDispatch } from "../../services/types/hooks";
import { getItems } from "../../services/actions/get-data";
import { getCookie } from "../../utils/cookie";
import ContentSwitch from "../content-switch/content-switch";
import { getUser, updateToken } from "../../services/actions/user";
import { FailedAuth, getIsLoad } from "../../utils/functions";

const App : FC = () => {
  const accessToken = getCookie("accessToken");
  const dispatch = useDispatch();
  const isLoad = useSelector(getIsLoad);
  const authFailed = useSelector(FailedAuth);

  useEffect(() => {
    dispatch(getItems());
    if (accessToken) {
      dispatch(getUser(accessToken));
    }
  }, [dispatch, accessToken]);


  useEffect(() => {
    if (authFailed) {
      dispatch(updateToken())
    }
  },[authFailed, dispatch])

  return (
    <>
      {!isLoad && (
        <>
          <AppHeader />
          <ContentSwitch />
        </>
      )}
    </>
  );
};

export default App;
