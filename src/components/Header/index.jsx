import React from 'react';
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';

export const Header = () => {
  const isAuth = false;

  const onClickLogout = () => {};

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div>BLOGGIN</div>
          </a>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <a href="/posts/create">
                  <Button variant="contained">Create post</Button>
                </a>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Log out
                </Button>
              </>
            ) : (
              <>
                <a href="/login">
                  <Button variant="outlined">Login</Button>
                </a>
                <a href="/register">
                  <Button variant="contained">Sign up</Button>
                </a>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};