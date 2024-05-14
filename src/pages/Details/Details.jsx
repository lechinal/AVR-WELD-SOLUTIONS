import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import servicesData from '../../data/servicesData';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find(service => service.id === parseInt(id, 10));
  if (!service) {
    navigate('/not-found');
    return null;
  }

  return (
    <div>
      <h1>Services Details</h1>
      <div>
        <h2>{service.title}</h2>
        <img src={service.image} alt={service.title} />
        <p>{service.description}</p>
      </div>
    </div>
  );
}

export default Details;
