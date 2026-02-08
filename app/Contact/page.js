"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header&Footer/Header';
import Footer from '@/components/Header&Footer/Footer';
import Contact from '@/components/Contact';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add API call or email service here
  };

  return (
    <>
    <Header/>
    <Contact/>
  <Footer/>
    </>
  );
};

export default ContactPage;