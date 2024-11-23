// src/LocalizedRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRoutesConfig } from './routes';
import SharedLayout from './pages/SharedLayout';
import Intro from './pages/Intro';
import AboutMe from './pages/Aboutme';
import Services from './pages/Services';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import ErrorPage from './pages/ErrorPage';

const LocalizedRoutes = () => {
  const routes = useRoutesConfig();

  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path={routes.home} element={<Intro />} />
        <Route path={routes.aboutMe} element={<AboutMe />} />
        <Route path={routes.services} element={<Services />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route
          path={routes.thermsAndConditions}
          element={<ThermsAndConditions />}
        />
        <Route path={routes.error} element={<ErrorPage />} />
        {/* Catch-all route */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default LocalizedRoutes;
