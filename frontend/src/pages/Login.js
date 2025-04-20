import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import '../stylePage/Login.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      alert('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      alert('Login failed!');
    }
  };

  return React.createElement('div', { className: 'login-container' },
    // Sidebar
    React.createElement('div', { className: 'sidebar' },
      React.createElement('h1', null, 'RM Dental Clinic'),
      React.createElement('p', null, 'Log in to access your dashboard')
    ),

    // Form
    React.createElement('div', { className: 'login-form' },
      React.createElement('h2', null, 'Sign In'),
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('input', {
          type: 'email',
          name: 'email',
          placeholder: 'Email address',
          value: form.email,
          onChange: handleChange,
          required: true
        }),
        React.createElement('input', {
          type: 'password',
          name: 'password',
          placeholder: 'Password',
          value: form.password,
          onChange: handleChange,
          required: true
        }),
        React.createElement('button', { type: 'submit' }, 'Login'),
        React.createElement('button', {
          type: 'button',
          className: 'register-btn',
          onClick: () => navigate('/register')
        }, 'Register')
      )
    )
  );
}

export default Login;
