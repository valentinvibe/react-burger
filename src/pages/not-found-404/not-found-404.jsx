import styles from "./not-found-404.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from "react-router-dom";
import {useCallback} from "react";
import { homePage } from "../../utils/variables";

const NotFound404 = () => {
    const history = useHistory();
    const onclick = useCallback(() => {
        history.replace({pathname: homePage })
    }, [history])

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>404 page not found</h2>
      <Button 
        onClick={onclick} 
        type="primary" 
        size="medium" 
        htmlType='button'
      >
        На главную страницу
      </Button>
    </div>
  );
};

export default NotFound404;
