import React, { useState } from 'react';
import Product1 from './Product1';
import './stepform.css';

export default function StepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    payment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    console.log('Form Data:', formData);
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3>Step 1: Personal Details</h3>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Step 2: Address</h3>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </label>
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Step 3: Payment Details</h3>
            <label>
              Payment Method:
              <input
                type="text"
                name="payment"
                value={formData.payment}
                onChange={handleInputChange}
                required
              />
            </label>
            <button onClick={prevStep}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="step-form-container">
      <h2>Multi-Step Form</h2>
      {renderFormStep()}

      {/* Product page (Step 2) */}
      <Product1 />
    </div>
  );
}
