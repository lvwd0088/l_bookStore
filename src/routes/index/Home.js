import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';

function Home() {
  return (
    <div className={styles.normal}>
      Route Component: Home
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
