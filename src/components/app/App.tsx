import React from 'react';

import styles from './app.module.css';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';

const App = () => {
  return (
    <div className="App">
      <AppHeader/>
      <main className={styles.content}>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </main>
    </div>

  );
}

export default App;
