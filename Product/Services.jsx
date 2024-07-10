import React from 'react';
import './Services.css'; 

const services = [
  {
    id: 1,
    title: 'Fast Delivery',
    description: 'We offer fast and reliable delivery services.',
    icon: '🚚'
  },
  {
    id: 2,
    title: '24/7 Customer Support',
    description: 'Our support team is available 24/7 to help you.',
    icon: '📞'
  },
  {
    id: 3,
    title: 'Warranty Services',
    description: 'All our products come with a 1-year warranty.',
    icon: '🛠️'
  },
];

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <span className="service-icon">{service.icon}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

