import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/auth';
import '../stylePage/Register.css';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', contact_number: '', role: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form); // Register the user
      alert('Registration successful!');
      navigate('/login'); // Redirect to login after successful registration
    } catch (error) {
      alert('Registration failed! ' + error.message);
    }
  };

  return React.createElement('div', { className: 'register-container' },
    // Form section on the left
    React.createElement('div', { className: 'register-form' },
      React.createElement('h2', null, 'Create an Account'),
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('input', {
          type: 'text',
          name: 'name',
          placeholder: 'Full Name',
          value: form.name,
          onChange: handleChange,
          required: true
        }),
        React.createElement('input', {
          type: 'email',
          name: 'email',
          placeholder: 'Email Address',
          value: form.email,
          onChange: handleChange,
          required: true
        }),
        React.createElement('input', {
          type: 'text',
          name: 'contact_number',
          placeholder: 'Contact Number',
          value: form.contact_number,
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
        React.createElement('input', {
          type: 'text',
          name: 'role',
          placeholder: 'Role',
          value: form.role,
          onChange: handleChange,
          required: true
        }),
        React.createElement('button', { type: 'submit' }, 'Register')
      )
    ),
    // Sidebar on the right
    React.createElement('div', { className: 'sidebar-register' },
      React.createElement('h1', null, 'Hello, Friend!'),
      React.createElement('p', null, 'Already have an account? Go back and sign in.')
    )
  );
}

export default Register;
