import React from 'react';

import styles from './App';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';

const App = () => {
  return (
    <div className="App">
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients/>
      </main>
    </div>

  );
}

export default App;
