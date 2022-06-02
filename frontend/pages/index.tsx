import { AppBar } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <AppBar>Next+SST</AppBar>
      <h1>Welcome to Next.js and SST</h1>
      <h2>We're in region {process.env.NEXT_PUBLIC_REGION}</h2>
    </div>
  );
};

export default Home;
