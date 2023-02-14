import { useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [header] = useState('Vite + React + TS');

  return (
    <div className={styles.app}>
      <img src="./test_icon.svg" alt="Test icon" />
      <h1 className={styles.headerMain}>{header}</h1>
    </div>
  );
}

export default App;
