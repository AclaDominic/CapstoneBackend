import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return React.createElement(BrowserRouter, null,
    React.createElement(Routes, null,
      React.createElement(Route, {
        path: '/login',
        element: React.createElement(Login)
      }),
      React.createElement(Route, {
        path: '/register',
        element: React.createElement(Register)
      }),
      React.createElement(Route, {
        path: '/dashboard',
        element: React.createElement(Dashboard)
      }),
      React.createElement(Route, {
        path: '/',
        element: React.createElement(Login) // default route
      })
    )
  );
}

export default App;