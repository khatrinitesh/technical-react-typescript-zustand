import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceProps } from '../interface';

const ServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState<ServiceProps | null>(null);

    useEffect(() => {
      if (id) {
        const fetchServiceDetails = async () => {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
          const data = await response.json();
          setService(data);
        };
  
        fetchServiceDetails();
      }
    }, [id]);
  
    if (!service) {
      return <div>Loading...</div>;
    }
  return (
    <>
      <h1>Service Details</h1>
      <h2>{service.title}</h2>
      <p>{service.body}</p>
    </>
  );
}

export default ServiceDetail;
