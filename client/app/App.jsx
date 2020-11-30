import React from 'react';
import { connect } from 'react-redux';
// import { Row, Column } from './components/grid';
import WelcomePage from './components/welcome-page';
import RegisterForm from './components/register-form';
import LoggedInPage from './components/logged-in-page';

import styles from './reset.scss';

const App = () => (
  <div className={styles.app}>
    <div className={styles.app__item}>
      <WelcomePage />
      <RegisterForm />
      <LoggedInPage />
    </div>
  </div>
);

const mapStateToProps = (store) => ({
  state: {
    ...store.sendButton.users,
    ...store.input,
  },
});

export default connect(mapStateToProps)(App);
