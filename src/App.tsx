import React from 'react';
import logo from './logo.png';
import { Counter } from './features/counter/Counter';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.title}>
          <a href={'/'}>
            <img
              src={logo}
              alt={'SAMPLE COMPANY'}
            />
          </a>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <a href={'/'}>What's New</a>
            </li>
            <li>
              <a href={'/'}>Company</a>
            </li>
            <li>
              <a href={'/'}>Service</a>
            </li>
            <li>
              <a href={'/'}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
