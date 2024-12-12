// 'use client';

import { useState } from 'react';

export default function ContactForm({ theme }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSuccessMessage('Thank you for reaching out! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSuccessMessage('');
      }, 10000);
    }
  };

  const isLightTheme = theme === 'light';

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-lg p-6 rounded-lg shadow-md space-y-4 ${
        isLightTheme ? 'bg-gray-100 text-gray-900' : 'bg-gray-800 text-white'
      }`}
    >
      {successMessage && (
        <p className={`${isLightTheme ? 'text-green-600' : 'text-green-400'} text-center`}>
          {successMessage}
        </p>
      )}

      {/* Name Input */}
      <div>
        <label
          htmlFor="name"
          className={`block text-sm font-medium ${
            isLightTheme ? 'text-gray-700' : 'text-gray-300'
          }`}
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-3 py-2 mt-1 rounded outline-none focus:ring-2 focus:ring-green-500 ${
            isLightTheme ? 'bg-gray-200 text-gray-900' : 'bg-gray-700 text-white'
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          className={`block text-sm font-medium ${
            isLightTheme ? 'text-gray-700' : 'text-gray-300'
          }`}
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 mt-1 rounded outline-none focus:ring-2 focus:ring-green-500 ${
            isLightTheme ? 'bg-gray-200 text-gray-900' : 'bg-gray-700 text-white'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Message Input */}
      <div>
        <label
          htmlFor="message"
          className={`block text-sm font-medium ${
            isLightTheme ? 'text-gray-700' : 'text-gray-300'
          }`}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className={`w-full px-3 py-2 mt-1 rounded outline-none focus:ring-2 focus:ring-green-500 ${
            isLightTheme ? 'bg-gray-200 text-gray-900' : 'bg-gray-700 text-white'
          }`}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full py-2 px-4 rounded transition ${
          isLightTheme
            ? 'bg-green-600 text-gray-100 hover:bg-green-500'
            : 'bg-green-500 text-gray-900 hover:bg-green-400'
        }`}
      >
        Send Message
      </button>
    </form>
  );
}
