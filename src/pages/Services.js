import React from 'react';
import './Services.css';

const servicesList = [
  {
    id: 1,
    title: 'Network Security',
    description:
      'We secure your network infrastructure against unauthorized access, data breaches, and external attacks using firewalls and intrusion detection systems.',
  },
  {
    id: 2,
    title: 'Threat Detection',
    description:
      'Our tools continuously monitor your systems for suspicious behavior and alert you before small issues become serious threats.',
  },
  {
    id: 3,
    title: 'System Monitoring',
    description:
      '24/7 real-time monitoring of your servers, databases, and applications to ensure everything runs smoothly.',
  },
  {
    id: 4,
    title: 'Vulnerability Assessment',
    description:
      'We scan and test your systems to find weaknesses before attackers do, and provide a detailed report with fixes.',
  },
];

function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>
      <p>We offer a range of cybersecurity solutions tailored for small and medium businesses.</p>

      <div className="services-list">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card">
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
