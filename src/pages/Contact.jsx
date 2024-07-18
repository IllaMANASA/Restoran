import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
 margin-top: 89px;
  padding: 30px;
  max-width: 600px;
  margin: 29px auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const ContactHeader = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
  color: #333;
`;

const ContactForm = styled.form`
  display: grid;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px 15px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;
  width: 100%;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 15px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;
  width: 100%;
  resize: vertical;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  background-color: #097969;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactInfo = styled.div`
  margin-top: 30px;
  text-align: center;
  color: #555;
`;

const ContactItem = styled.p`
  margin: 10px 0;
  font-size: 1.1rem;
`;
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <ContactHeader>Contact Us</ContactHeader>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send Message</Button>
      </ContactForm>
      <ContactInfo>
        <ContactItem>Email: resto@gmail.com</ContactItem>
        <ContactItem>Phone: 7778889999</ContactItem>
        <ContactItem>Address: Gachibowli, Hyderabad,Telangana,India</ContactItem>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;
