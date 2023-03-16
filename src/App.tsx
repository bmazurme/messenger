import React, { useMemo, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundaryWrapper from './components/ErrorBoundaryWrapper';

import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';
import PasswordEditPage from './pages/PasswordEditPage';
import NotFoundPage from './pages/404';

import { Urls } from './utils/constants';
import ThemeContext from './context/ThemeContext';

export default function App() {
  const [style, setStyle] = useState('light');
  const providerValue = useMemo(() => ({ style, setStyle }), [style, setStyle]);

  useEffect(() => {
    const currentTheme = localStorage.getItem('wp-theme');
    document.documentElement.setAttribute('data-theme', (currentTheme === 'dark') ? 'dark' : 'light');
  }, [style]);

  return (
    <ThemeContext.Provider value={providerValue}>
      <ErrorBoundaryWrapper>
        <Routes>
          <Route path={Urls.BASE} element={(<MainPage />)} />
          <Route path={Urls.SIGNIN} element={(<SignInPage />)} />
          <Route path={Urls.SIGNUP} element={(<SignUpPage />)} />
          <Route path={Urls.PROFILE} element={(<ProfilePage />)} />
          <Route path={Urls.PROFILE_EDIT} element={(<ProfileEditPage />)} />
          <Route path={Urls.PASSWORD_EDIT} element={(<PasswordEditPage />)} />
          <Route path={Urls[404]} element={(<NotFoundPage />)} />
        </Routes>
      </ErrorBoundaryWrapper>
    </ThemeContext.Provider>
  );
}
