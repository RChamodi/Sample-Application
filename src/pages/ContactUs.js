import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message submitted. Thank you!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! If you have any questions, concerns, or feedback, please get in touch with us.
      </p>

      <div style={{ margin: '20px 0' }}>
        <p><strong>Phone:</strong> 045 227-0576</p>
        <p><strong>Email:</strong> support@freshmart.com</p>
        <p><strong>Address:</strong> 123 Main Street, Kahawatta</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              rows="5"
            />
          </label>
        </div>

        <button type="submit" style={{ padding: '10px 20px' ,borderRadius: '8px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}
