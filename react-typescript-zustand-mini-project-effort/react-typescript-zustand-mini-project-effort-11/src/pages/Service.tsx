import React, { useEffect, useState } from "react";
import { ServiceProps } from "../interface";
import { Link, useNavigate, useParams } from "react-router-dom";

const Service: React.FC = () => {
  

  const [services, setServices] = useState<ServiceProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
      const fetchServiceDetails = async () => {
        setLoading(true);
        try {
          const response = await fetch(import.meta.env.VITE_API_URL);
          if(!response.ok){
            const data = await response.json();
            setServices(data);
          }
        } catch (error) {
            console.error("Error fetching service:", error);
        }
        finally{
            setLoading(false)
        }
      };
      fetchServiceDetails();
  }, []);

  if (loading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <h1>Service List</h1>
      <ul>
  {services.map((service) => (
    <li key={service.id}>
       <Link to={`/service/${service.id}`}>{service.title}</Link>
    </li>
  ))}
</ul>

    </>
  );
};

export default Service;
