import { useEffect, FC } from "react";
import AppHeader from "../app-header/app-header";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../services/actions/get-data";
import { getCookie } from "../../utils/cookie";
import ContentSwitch from "../content-switch/content-switch";
import { getUser } from "../../services/actions/user";
import { getIsLoad } from "../../utils/functions";

const App : FC = () => {
  const accessToken = getCookie("accessToken");
  const dispatch = useDispatch();
  const isLoad = useSelector(getIsLoad);

  useEffect(() => {
    dispatch(getItems());
    if (accessToken) {
      dispatch(getUser(accessToken));
    }
  }, [dispatch, accessToken]);

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
