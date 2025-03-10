import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import axios from "axios";
import { User } from "../interface";
import { fetchUsers } from "../services/api";

const Home: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State for loading indicator
  const [error, setError] = useState<string>(""); // State for handling errors

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers(2);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError("failed to fetch users.");
        setLoading(false);
      }
    };
    getUsers();
  }, []);
  return (
    <>
      <Banner>
        <h3 className="text-red-500 text-[32px]">Home</h3>
        <p className="text-blue-500 text-[20px]">Description</p>
      </Banner>
      <div className="px-[1rem] container mx-auto">
        <h2 className="text-[24px]">Axios library in react</h2>
        {loading && <div>Loading</div>}
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* show error message */}
        <strong>
          {data.map((val) => (
            <>
              <div key={val.id}>
                <p>{val.email}</p>
              </div>
            </>
          ))}
        </strong>
      </div>
    </>
  );
};

export default Home;
